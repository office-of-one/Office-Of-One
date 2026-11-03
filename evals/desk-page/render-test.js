// Renders the Desk page against fixtures with a mock window.claude runtime.
// Usage: node render-test.js [fixture.json ...]   (default: fixtures/*.json)
// A fixture is a JSON object of {"<collection>/<doc>": data}.
// Outputs t.html and s-*.png land in this folder (git-ignored). Exit 1 on any error.
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const page_=fs.readFileSync(path.join(__dirname,'../../plugins/office-of-one/desk-page/desk.html'),'utf8');
const skel='<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"></head><body>'+page_+'</body></html>';
const mock=(seed)=>`
(function(){const store=${JSON.stringify(seed)};const subs=[];
const snap=(p)=>{ const parts=p.split('/'); if(parts.length%2===0){const d=store[p];return {exists:!!d,data:()=>d,id:parts.at(-1)}}
 const docs=Object.keys(store).filter(k=>k.startsWith(p+'/')&&k.split('/').length===parts.length+1).map(k=>({id:k.split('/').at(-1),data:()=>store[k]}));return {docs,metadata:{fromCache:false}}};
const fire=()=>subs.forEach(([p,f])=>f(snap(p)));
const ref=(p)=>({onSnapshot(f){subs.push([p,f]);setTimeout(()=>f(snap(p)),0);return()=>{}},where(){return this},orderBy(){return this},limit(){return this},
 doc(k){return ref(p+'/'+k)},async add(d){store[p+'/x'+Date.now()]=d;fire()},async set(d){store[p]=d;fire()},async update(d){store[p]={...store[p],...d};fire()},async delete(){delete store[p];fire()},async get(){return snap(p)}});
const db={collection:ref,doc:ref};window.__store=store;
window.claude={use:async n=>n==='db'?db:n==='user'?{isOwner:async()=>true}:n==='mcp'?{callTool:async(s,t,i)=>{window.__call=[s,t,i];return {payload:{}}},watchTool:()=>()=>{},invalidate:async()=>{}}:null};})();`;

// Per-fixture checks, run after the tab loop. Each is async (page) => string[] of errors.
const CHECKS={
 seeded:async(p)=>{const errs=[];
  await p.evaluate(()=>location.hash='#today');await p.waitForTimeout(300);
  console.log('hdr',await p.textContent('#deskname'),await p.title(),'| href',await p.getAttribute('.email a.btn.primary','href'));
  await p.click('text=Mark sent');await p.waitForTimeout(300);
  const st=await p.evaluate(()=>window.__store['emails/e1'].status);console.log('status',st);
  if(st!=='sent')errs.push('Mark sent did not set status sent: '+st);
  return errs;}
};
const args=process.argv.slice(2);
const files=args.length?args:fs.readdirSync(path.join(__dirname,'fixtures')).filter(f=>f.endsWith('.json')).sort().map(f=>path.join(__dirname,'fixtures',f));
const fixtures=files.map(f=>[path.basename(f,'.json'),JSON.parse(fs.readFileSync(f,'utf8'))]);
fs.writeFileSync(path.join(__dirname,'t.html'),skel);
(async()=>{const b=await chromium.launch();let failed=false;
const runs=[['blank','blank',{},'light',1280]];
for(const [n,sd] of fixtures){runs.push([n,n,sd,'light',1280],[n+'dark',n,sd,'dark',1280],[n==='seeded'?'phone':'phone-'+n,n,sd,'light',390]);}
for(const [name,fx,sd,cs,w] of runs){
 const c=await b.newContext({colorScheme:cs,viewport:{width:w,height:900}});const p=await c.newPage();const errs=[];
 p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error'&&!/ERR_|Failed to load/.test(m.text()))errs.push(m.text())});
 await p.addInitScript(mock(sd));await p.goto('file://'+path.join(__dirname,'t.html'));await p.waitForTimeout(500);
 for(const t of ['today','todos','brain','calendar','plan']){await p.evaluate(x=>location.hash='#'+x,t);await p.waitForTimeout(300);
  await p.screenshot({path:path.join(__dirname,`s-${name}-${t}.png`)});
  const o=await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth);if(o>0)errs.push(t+' overflow '+o);
  const txt=await p.evaluate(()=>document.body.innerText);if(/⟦|undefined|NaN/.test(txt))errs.push(t+' token/undefined: '+txt.match(/.{0,40}(⟦|undefined|NaN).{0,40}/)?.[0]);}
 if(name===fx&&CHECKS[fx])errs.push(...await CHECKS[fx](p));
 console.log(name,errs);if(errs.length)failed=true;await c.close();}
await b.close();process.exit(failed?1:0);})();
