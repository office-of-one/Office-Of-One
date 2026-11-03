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
  await p.evaluate(()=>location.hash='#settings');await p.waitForTimeout(300);
  if(await p.locator('text=Just do it').count())errs.push('Settings still offers Just do it');
  await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300);
  await p.locator('[aria-label="Work, memory note"]').first().click();await p.waitForTimeout(300);
  const bt=await p.evaluate(()=>document.body.innerText);
  if(/\b[\w-]+\.md\b/.test(bt))errs.push('Brain panel shows a file path: '+bt.match(/\b[\w-]+\.md\b/)[0]);
  return errs;},
 norunner:async(p)=>{const errs=[];
  for(const t of ['today','todos','brain','calendar','plan']){await p.evaluate(x=>location.hash='#'+x,t);await p.waitForTimeout(300);
   for(const s of ['Run','Build this agent']){ if(await p.getByText(new RegExp('^\\s*(✦\\s*)?'+s+'$')).count())errs.push(`"${s}" shown on ${t} with no helper task`);} }
  // The suggestion card shows without a runner; "Yes, draft it" writes the to-do and starts nothing.
  await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300);
  const yes=p.locator('.suggest button:has-text("Yes, draft it")');
  if(!await yes.count())errs.push('no "Yes, draft it" on a goal with a suggestion and no runner');
  else{ await yes.click();await p.waitForTimeout(400);
   const r=await p.evaluate(()=>({call:window.__call,todo:Object.entries(window.__store).filter(([k,v])=>k.startsWith('todos/')&&v.from==='Brain').map(([k,v])=>v)}));
   if(r.call!==undefined)errs.push('an MCP tool was called with no runner: '+JSON.stringify(r.call));
   if(r.todo.length!==1)errs.push('expected one Brain to-do, got '+r.todo.length);
   else{ const t=r.todo[0]; if(t.title!=='Draft a plan'||t.state!=='recommend'||t.category!=='Goal'||t.status!=='open'||!t.action||t.action.kind!=='ask'||t.action.instruction!=='Draft a plan')errs.push('Brain to-do has the wrong shape: '+JSON.stringify(t)); }
   if(!/will draft this before your next memo/.test(await p.textContent('.suggest')))errs.push('no "will draft this before your next memo" line'); }
  return errs;},
 goals:async(p)=>{const errs=[];
  await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300);
  const pt=await p.textContent('#panel');
  if(!/Launch studio site/.test(pt))errs.push('Brain did not open on the site goal');
  for(const s of ['Feeding it','Competing for its time','Missing','SUGGESTION','You might move Thursday'])if(!pt.includes(s))errs.push('panel lacks '+s);
  const nf=await p.locator('svg .edge.feed.hot').count(), nc=await p.locator('svg .edge.compete.hot').count();
  if(nf!==2)errs.push('feed.hot edges '+nf+', expected 2'); if(nc!==1)errs.push('compete.hot edges '+nc+', expected 1');
  const out=await p.evaluate(()=>{ const d=document.querySelector('svg .core-disc'); if(!d) return ['no .core-disc'];
   const b=d.getBoundingClientRect(), cx=b.x+b.width/2, cy=b.y+b.height/2, R=b.width/2; const e=[];
   const gs=[...document.querySelectorAll('svg .node.goal .dot')]; if(gs.length!==2) e.push('goal nodes '+gs.length);
   gs.forEach(g=>{ const r=g.getBoundingClientRect(); const dx=r.x+r.width/2-cx, dy=r.y+r.height/2-cy; if(Math.hypot(dx,dy)>=R) e.push('goal outside the core disc'); }); return e; });
  errs.push(...out);
  const yes=p.locator('.suggest button:has-text("Yes, draft it")');
  if(!await yes.count())errs.push('no "Yes, draft it"');
  else{ await yes.click();await p.waitForTimeout(400);
   const c=await p.evaluate(()=>window.__call);
   if(!c||c[1]!=='fire_trigger')errs.push('Yes, draft it did not fire the runner: '+JSON.stringify(c));
   const n=await p.evaluate(()=>Object.values(window.__store).filter(v=>v&&v.from==='Brain'&&v.state==='recommend').length);
   if(n!==1)errs.push('Brain to-dos '+n+', expected 1'); }
  // Not now on the other goal logs a dismissal and hides its card
  const rn=p.locator('[aria-label="Half marathon, April, goal"]');
  if(!await rn.count())errs.push('no race goal node');else{await rn.click();await p.waitForTimeout(300);}
  const nn=p.locator('.suggest button:has-text("Not now")');
  if(!await nn.count())errs.push('no "Not now" on the race goal');
  else{ await nn.click();await p.waitForTimeout(300);
   const d=await p.evaluate(()=>Object.entries(window.__store).filter(([k,v])=>k.startsWith('decisions/')&&v.kind==='suggestion'&&v.action==='dismissed'&&/longer run/.test(v.title)).length);
   if(d!==1)errs.push('Not now did not log one dismissal: '+d);
   if(!/Half marathon/.test(await p.textContent('#panel')))errs.push('panel left the race goal after Not now');
   if(await p.locator('.suggest').count())errs.push('card still shown after Not now'); }
  return errs;},
 nogoals:async(p)=>{const errs=[];
  await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300);
  const r=await p.evaluate(()=>({t:[...document.querySelectorAll('#v-brain svg text')].map(x=>x.textContent),
   gap:document.querySelectorAll('#v-brain svg path.edge.gap[data-s="profile"],#v-brain svg path.edge.gap[data-t="profile"]').length}));
  if(!r.t.includes('No goals yet'))errs.push('no "No goals yet" in the centre');
  if(!r.gap)errs.push('no gap edge touching the profile node');
  return errs;},
 manygoals:async(p)=>{ await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300); return goalLabelLayout(p); },
 calgoogle:async(p)=>{const errs=[];
  await p.evaluate(()=>location.hash='#calendar');await p.waitForTimeout(300);
  const sg=p.locator('button.sug, button.sgc').first();
  if(!await sg.count())return ['no calendar suggestion to click'];
  await sg.click();await p.waitForTimeout(300);
  const b=p.locator('button:has-text("Add to calendar")').first();
  if(!await b.count())return ['no Add to calendar button'];
  await b.click();await p.waitForTimeout(400);
  const c=await p.evaluate(()=>window.__call);
  if(!c||c[1]!=='create_event')errs.push('create_event not called: '+JSON.stringify(c));
  else{ if('attendees' in c[2])errs.push('attendees reached create_event');
   if(!c[2].summary)errs.push('create_event has no summary'); }
  return errs;}
};
// Five goal labels and the name: no overlaps, all inside the core disc. Run at 1280 and at 390.
const goalLabelLayout=async(p)=>{const errs=[];
  errs.push(...await p.evaluate(()=>{ const e=[]; const R=x=>x.getBoundingClientRect();
   const d=document.querySelector('svg .core-disc'); if(!d) return ['no .core-disc']; const db=R(d);
   const gl=[...document.querySelectorAll('svg .node.goal .lbl')].map(R); const nm=document.querySelector('svg .node.profile .lbl');
   if(gl.length!==5) e.push('goal labels '+gl.length+', expected 5'); if(!nm) e.push('no name label');
   const hit=(a,b)=>a.left<b.right&&b.left<a.right&&a.top<b.bottom&&b.top<a.bottom;
   gl.forEach((a,i)=>{ gl.forEach((b,j)=>{ if(j>i&&hit(a,b)) e.push(`goal labels ${i} and ${j} overlap`); });
    if(nm&&hit(a,R(nm))) e.push(`goal label ${i} overlaps the name`);
    if(a.left<db.left||a.right>db.right||a.top<db.top||a.bottom>db.bottom) e.push(`goal label ${i} spills out of the disc`); });
   const long=[...document.querySelectorAll('svg .node.goal .lbl')].map(x=>[...x.querySelectorAll('tspan')].map(t=>t.textContent).join(' ')||x.textContent).find(x=>/^Get the house/.test(x));
   if(!long||long.length>23||!/…$/.test(long)) e.push('long goal label not truncated: '+long);
   return e; }));
  return errs;};
// The centre is read on a phone: rendered em height = font-size in user units x the SVG's screen scale.
const centreSizes=async(p,nGoals)=>p.evaluate((nGoals)=>{ const e=[]; const svg=document.querySelector('#v-brain svg'); if(!svg) return ['no brain map'];
  const sc=svg.getScreenCTM().a, fs=x=>parseFloat(getComputedStyle(x).fontSize)*sc;
  const nm=document.querySelector('svg .node.profile .lbl'); if(!nm) e.push('no name label'); else if(fs(nm)<16) e.push('name renders '+fs(nm).toFixed(1)+'px, under 16');
  const gl=[...document.querySelectorAll('svg .node.goal .lbl')]; if(gl.length!==nGoals) e.push('goal labels '+gl.length);
  gl.forEach(x=>{ if(fs(x)<10) e.push('goal label "'+x.textContent+'" renders '+fs(x).toFixed(1)+'px, under 10'); });
  [...document.querySelectorAll('svg .node.goal .dot')].forEach(d=>{ const r=d.getBoundingClientRect(); if(r.width<14||r.height<14) e.push('goal dot '+r.width.toFixed(1)+'px, under 14'); });
  return e; },nGoals);
// Checks for the light 390px run.
const PHONE={
 goals:async(p)=>{ await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300); return centreSizes(p,2); },
 manygoals:async(p)=>{ await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300); return [...await centreSizes(p,5),...await goalLabelLayout(p)]; }
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
 if(w===390&&cs==='light'&&PHONE[fx])errs.push(...await PHONE[fx](p));
 console.log(name,errs);if(errs.length)failed=true;await c.close();}
await b.close();process.exit(failed?1:0);})();
