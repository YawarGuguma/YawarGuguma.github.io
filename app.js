const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const langButtons=$$('.lang button');
const ticker=$('#ticker');
const nav=$('#nav');
const burger=$('#burger');

function text(obj,lang){return obj?.[lang]??obj?.en??''}
function renderExperience(lang){
  const host=$('#experience-list');
  if(!host||!window.SITE_DATA)return;
  host.innerHTML=SITE_DATA.experience.map(role=>`<article class="role-card reveal on"><div class="role-top"><h3>${text(role.title,lang)}</h3><span class="when">${text(role.period,lang)}</span></div><div class="org">${text(role.org,lang)}</div><p>${text(role.summary,lang)}</p>${role.bullets?.length?`<ul class="details">${role.bullets.map(b=>`<li>${text(b,lang)}</li>`).join('')}</ul>`:''}</article>`).join('');
}
function renderEducation(lang){
  const host=$('#education-list');
  if(!host||!window.SITE_DATA)return;
  host.innerHTML=SITE_DATA.education.map(item=>`<article class="edu reveal on"><div class="degree">${text(item.degree,lang)}</div><div class="school">${text(item.school,lang)}</div><p>${text(item.note,lang)}</p></article>`).join('');
}
function buildTicker(lang){
  if(!ticker)return;
  const en=['Video Understanding','Temporal Action Localization','Point Supervision','Trustworthy AI','Computer Vision','Object Detection','Uncertainty','Robust Learning'];
  const ko=['영상 이해','시간적 행동 위치 추정','포인트 감독 학습','신뢰할 수 있는 AI','컴퓨터 비전','객체 탐지','불확실성','강건 학습'];
  const a=lang==='ko'?ko:en;
  ticker.innerHTML=[...a,...a].map(x=>`<span>${x}</span>`).join('');
}
function setLang(lang){
  document.documentElement.lang=lang;
  $$('[data-en][data-ko]').forEach(el=>el.textContent=el.dataset[lang]);
  langButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
  localStorage.setItem('site-lang',lang);
  renderExperience(lang); renderEducation(lang); buildTicker(lang);
}
langButtons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
function syncMenu(){if(!nav)return;if(innerWidth<=900)nav.hidden=true;else nav.hidden=false}
syncMenu();addEventListener('resize',syncMenu);
if(burger&&nav){burger.addEventListener('click',()=>{nav.hidden=!nav.hidden;burger.setAttribute('aria-expanded',String(!nav.hidden))});$$('a',nav).forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=900)nav.hidden=true}))}
$('#year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.1});$$('.reveal').forEach(e=>io.observe(e));
setLang(localStorage.getItem('site-lang')||'en');
