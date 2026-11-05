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
window.claude={use:async n=>n==='db'?db:n==='user'?{isOwner:async()=>true}:n==='mcp'?{callTool:async(s,t,i)=>{window.__call=[s,t,i];(window.__calls=window.__calls||[]).push([s,t]);return {payload:{}}},watchTool:(s,t)=>{(window.__calls=window.__calls||[]).push([s,t,'watch']);return()=>{}},invalidate:async()=>{}}:null};})();`;

// Per-fixture checks, run after the tab loop. Each is async (page) => string[] of errors.
const CHECKS={
 seeded:async(p)=>{const errs=[];
  await p.evaluate(()=>location.hash='#today');await p.waitForTimeout(300);
  console.log('hdr',await p.textContent('#deskname'),await p.title(),'| href',await p.getAttribute('.email a.btn.primary','href'));
  await p.click('text=Mark sent');await p.waitForTimeout(300);
  const st=await p.evaluate(()=>window.__store['emails/e1'].status);console.log('status',st);
  if(st!=='sent')errs.push('Mark sent did not set status sent: '+st);
  await p.evaluate(()=>location.hash='#settings');await p.waitForTimeout(300);
  const jdi=p.locator('button[role=radio]:not([disabled])',{hasText:'Just do it'});
  if(await jdi.count()!==7)errs.push('Just do it should be offered on the 7 unlocked categories, found '+await jdi.count());
  if(!/Nothing is sent until you say so/.test(await p.evaluate(()=>document.body.innerText)))errs.push('Settings lacks the never-sent note');
  await jdi.first().click();await p.waitForTimeout(300);
  const tc=await p.evaluate(()=>(window.__store['settings/trust']||{}).cats||{});
  if(!Object.values(tc).includes('auto'))errs.push('Just do it did not save auto: '+JSON.stringify(tc));
  if(tc.money!=='never')errs.push('money is not never after a trust save: '+tc.money);
  await p.evaluate(()=>location.hash='#brain');await p.waitForTimeout(300);
  await p.locator('[aria-label="Work, note"]').first().click();await p.waitForTimeout(300);
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
  // No helper task: no flight button on the trip, no "do it now" after a capture, no Agents section, no scheduled-task calls.
  await p.evaluate(()=>location.hash='#today');await p.waitForTimeout(300);
  if(!await p.locator('.card.trip').count())errs.push('no trip card to check');
  if(await p.locator('.card.trip button').count())errs.push('trip shows a flight button with no runner');
  if(/J:/.test(await p.evaluate(()=>document.body.innerText)))errs.push('the "J:" hint is still shown');
  await p.fill('.cap-row input','Book dinner with Pat');await p.click('.cap-row button');await p.waitForTimeout(400);
  const cm=await p.textContent('.cap-msg');
  if(!/Added to To-dos/.test(cm))errs.push('capture did not confirm: '+cm);
  if(/do it now/.test(cm))errs.push('capture offers "do it now" with no runner');
  await p.evaluate(()=>location.hash='#plan');await p.waitForTimeout(300);
  if(await p.locator('#team:visible').count())errs.push('Agents section shown with no builder and no live agents');
  const pt=await p.evaluate(()=>document.querySelector('#v-plan').innerText);
  for(const s of ['Recommended','Meeting Prep','On Oct 31'])if(pt.includes(s))errs.push(`Plan shows "${s}" with no builder`);
  const rc=await p.evaluate(()=>(window.__calls||[]).filter(c=>c[0]==='Claude Code Remote'));
  if(rc.length)errs.push('scheduled-task calls with no helper: '+JSON.stringify(rc));
  return errs;},
 loose:async(p)=>{const errs=[];
  await p.evaluate(()=>location.hash='#today');await p.waitForTimeout(300);
  if(await p.evaluate(()=>document.getElementById('v-today').hidden))errs.push('picking Today did not stick while the setup headline holds');
  // Agent-written links: only https: and mailto: become links.
  for(const t of ['today','todos','calendar']){await p.evaluate(x=>location.hash='#'+x,t);await p.waitForTimeout(300);
   const bad=await p.evaluate(()=>[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>!/^(https:|mailto:|#)/i.test(h.trim())));
   if(bad.length)errs.push(t+' has unsafe hrefs: '+bad.join(' ')); }
  await p.evaluate(()=>location.hash='#todos');await p.waitForTimeout(300);
  if(await p.locator('a:has-text("Open guide")[href]').count())errs.push('javascript: link rendered as a link');
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
  return errs;},
 // The card deck: order, peeks, Done/Dismiss/Later, Undo, swipe, keys, and the Cards/List toggle.
 cards:async(p)=>{const errs=[]; const W=ms=>p.waitForTimeout(ms);
  const st=id=>p.evaluate(i=>window.__store['todos/'+i],id);
  const top=()=>p.evaluate(()=>{ const c=document.querySelector('.tcard.top .tct'); return c&&c.textContent; });
  const undo=async()=>{ const b=p.locator('.ttoast.on button',{hasText:'Undo'}); if(!await b.count()){ errs.push('no Undo toast'); return; } await b.click(); await W(300); };
  await p.evaluate(()=>location.hash='#todos');await W(300);
  if(await top()!=='Send Q4 numbers to Pat')errs.push('top card is not the most urgent: '+await top());
  const peeks=await p.locator('.tcard.peek').allTextContents();
  if(peeks.join('|')!=='Renew passport|Book the dentist')errs.push('peeks wrong: '+peeks.join('|'));
  if((await p.textContent('.tdeck .tcount'))!=='1 of 4')errs.push('count wrong: '+await p.textContent('.tdeck .tcount'));
  const cardTxt=await p.textContent('.tcard.top');
  if(!/Open the sheet/.test(cardTxt))errs.push("card lacks the pick's button");
  if(!/Open the email from Pat/.test(cardTxt))errs.push('card lacks the email link');
  // Later, then Undo
  await p.click('.tacts button:has-text("Later")');await W(300);
  if(await top()!=='Book the dentist')errs.push('Later did not move the card back: '+await top());
  await undo(); if(await top()!=='Send Q4 numbers to Pat')errs.push('Undo after Later did not restore: '+await top());
  // Done, then Undo
  await p.click('.tacts .tdone');await W(500);
  let s=await st('L2'); if(s.status!=='done'||s.doneBy!=='card')errs.push('Done did not mark done: '+JSON.stringify(s));
  if(!/Marked done/.test(await p.textContent('.ttoast')))errs.push('no done toast');
  if(await top()!=='Book the dentist')errs.push('next card not shown after Done');
  await undo(); s=await st('L2'); if(s.status!=='open')errs.push('Undo after Done did not reopen: '+s.status);
  // Dismiss, then Undo
  await p.click('.tacts .tdis');await W(500);
  s=await st('L2'); if(s.status!=='closed'||s.doneBy!=='dismissed')errs.push('Dismiss did not close: '+JSON.stringify(s));
  await undo(); s=await st('L2'); if(s.status!=='open')errs.push('Undo after Dismiss did not reopen: '+s.status);
  // Swipe right
  const box=await p.locator('.tcard.top').boundingBox();
  await p.mouse.move(box.x+box.width/2,box.y+box.height-20);await p.mouse.down();
  for(let i=1;i<=10;i++)await p.mouse.move(box.x+box.width/2+i*30,box.y+box.height-20);
  await p.mouse.up();await W(500);
  s=await st('L2'); if(s.status!=='done')errs.push('swipe right did not mark done: '+s.status);
  await undo();
  // A short drag springs back
  const b2=await p.locator('.tcard.top').boundingBox();
  await p.mouse.move(b2.x+b2.width/2,b2.y+b2.height-20);await p.mouse.down();await p.mouse.move(b2.x+b2.width/2-40,b2.y+b2.height-20);await p.mouse.up();await W(400);
  s=await st('L2'); if(s.status!=='open')errs.push('a short drag changed the to-do: '+s.status);
  // Left arrow on the focused card dismisses
  await p.focus('.tcard.top');await p.keyboard.press('ArrowLeft');await W(500);
  s=await st('L2'); if(s.status!=='closed')errs.push('left arrow did not dismiss: '+s.status);
  await undo();
  // The toast goes after six seconds
  await p.click('.tacts button:has-text("Later")');await W(6300);
  if(await p.locator('.ttoast.on').count())errs.push('toast still showing after 6s');
  // Cards / List toggle
  await p.click('.vtg button:has-text("List")');await W(300);
  if(await p.locator('.tcard').count())errs.push('List still shows cards');
  if(await p.locator('.tdrow').count()<4)errs.push('List does not show every to-do');
  if(await p.evaluate(()=>localStorage.getItem('jz-todo-view'))!=='list')errs.push('List choice not remembered');
  await p.click('.vtg button:has-text("Cards")');await W(300);
  if(!await p.locator('.tcard.top').count())errs.push('Cards did not come back');
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
// Checks on first load, before any tab is picked.
const ONLOAD={
 loose:async(p)=>{const errs=[]; const vis=await p.evaluate(()=>['today','brain'].filter(k=>!document.getElementById('v-'+k).hidden));
  if(vis.join()!=='brain')errs.push('a page fresh from setup did not open on Brain: '+vis.join());
  for(const n of ['person-alex','pickup','money'])if(!await p.locator(`#v-brain svg .node[data-id="${n}"]`).count())errs.push('no node '+n);
  return errs;},
 seeded:async(p)=>{ const vis=await p.evaluate(()=>!document.getElementById('v-today').hidden); return vis?[]:['a page past setup did not open on Today']; }
};
// Checks for the light 390px run.
const PHONE={
 cards:async(p)=>{ await p.evaluate(()=>{ try{ localStorage.removeItem('jz-todo-view'); }catch(e){} location.hash='#todos'; });await p.waitForTimeout(300);
  return p.evaluate(()=>{ const e=[]; const c=document.querySelector('.tcard.top'); if(!c) return ['no card on phone'];
   const r=c.getBoundingClientRect(); if(r.left<0||r.right>innerWidth) e.push('card wider than the phone');
   document.querySelectorAll('.tacts button').forEach(b=>{ if(b.getBoundingClientRect().height<44) e.push('"'+b.textContent+'" under 44px'); });
   return e; }); },
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
 if(ONLOAD[fx])errs.push(...await ONLOAD[fx](p));
 for(const t of ['today','todos','brain','calendar','plan']){await p.evaluate(x=>location.hash='#'+x,t);await p.waitForTimeout(300);
  await p.screenshot({path:path.join(__dirname,`s-${name}-${t}.png`)});
  const o=await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth);if(o>0)errs.push(t+' overflow '+o);
  const txt=await p.evaluate(()=>document.body.innerText);if(/⟦|undefined|NaN/.test(txt))errs.push(t+' token/undefined: '+txt.match(/.{0,40}(⟦|undefined|NaN).{0,40}/)?.[0]);
  if(t==='brain')errs.push(...await p.evaluate(()=>[...[...document.querySelectorAll('#v-brain svg .node')].filter(g=>/undefined|NaN/.test(g.getAttribute('transform')||'')).map(g=>'node '+g.dataset.id+' transform '+g.getAttribute('transform')),
   ...[...document.querySelectorAll('#v-brain svg path')].filter(x=>/undefined|NaN/.test(x.getAttribute('d')||'')).map(x=>'path d has NaN: '+(x.getAttribute('data-s')||'')+'>'+(x.getAttribute('data-t')||''))]));}
 if(name===fx&&CHECKS[fx])errs.push(...await CHECKS[fx](p));
 if(w===390&&cs==='light'&&PHONE[fx])errs.push(...await PHONE[fx](p));
 console.log(name,errs);if(errs.length)failed=true;await c.close();}
await b.close();process.exit(failed?1:0);})();
