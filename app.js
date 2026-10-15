const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const langButtons=$$('.lang button');
const ticker=$('#ticker');
const nav=$('#nav');
const burger=$('#burger');

function cleanEnglish(value=''){
  return value.replace(/([A-Za-z])[-‐‑]([A-Za-z])/g,'$1 $2');
}
function text(obj,lang){
  const value=obj?.[lang]??obj?.en??'';
  return lang==='en'?cleanEnglish(value):value;
}

function configureResearchIdentity(){
  const heroFocus=$('h1 span[data-en][data-ko]');
  if(heroFocus){
    heroFocus.dataset.en='Video Understanding · Physical AI · Computer Vision';
    heroFocus.dataset.ko='영상 이해 · 피지컬 AI · 컴퓨터 비전';
  }
  const footerFocus=$('footer [data-en][data-ko]');
  if(footerFocus){
    footerFocus.dataset.en='Research Professor · Video Understanding · Physical AI · Computer Vision';
    footerFocus.dataset.ko='연구교수 · 영상 이해 · 피지컬 AI · 컴퓨터 비전';
  }
  const description=$('meta[name="description"]');
  if(description)description.content='Yawar Rehman, PhD — Research Professor at Kyungpook National University. Video understanding, Physical AI, temporal action localization, and computer vision.';
  const ogDescription=$('meta[property="og:description"]');
  if(ogDescription)ogDescription.content='Video Understanding · Physical AI · Computer Vision';
}

function removeTrustworthyAICopy(){
  const intro=$('.hero .intro');
  if(intro){
    intro.dataset.en='I work on video understanding and Physical AI — especially temporal action localization from sparse supervision and computer vision systems for real world environments.';
    intro.dataset.ko='영상 이해와 피지컬 AI를 연구합니다. 특히 희소 감독 기반 시간적 행동 위치 추정과 실제 환경을 위한 컴퓨터 비전 시스템에 관심이 있습니다.';
    intro.textContent=intro.dataset.en;
  }

  const projectsIntro=$('#projects .sec-head p:last-child');
  if(projectsIntro){
    projectsIntro.dataset.en='Research in video understanding, point supervised temporal localization, Physical AI, and visual detection.';
    projectsIntro.dataset.ko='영상 이해, 포인트 감독 기반 시간적 위치 추정, 피지컬 AI 및 시각 객체 탐지에 관한 연구입니다.';
    projectsIntro.textContent=projectsIntro.dataset.en;
  }

  const trustworthySkill=$$('#skills .skill').find(card=>card.querySelector('h3')?.dataset.en==='Trustworthy AI');
  if(trustworthySkill)trustworthySkill.remove();

  if(window.SITE_DATA?.experience?.[0]?.summary){
    SITE_DATA.experience[0].summary.en='Research in video understanding, temporal action localization, computer vision, and Physical AI.';
    SITE_DATA.experience[0].summary.ko='영상 이해, 시간적 행동 위치 추정, 컴퓨터 비전 및 피지컬 AI를 연구하고 있습니다.';
  }
}

function configurePortrait(){
  const portrait=$('.portrait img');
  if(portrait){
    portrait.src='assests/yawar-rehman.png';
    portrait.removeAttribute('height');
    portrait.setAttribute('width','320');
    portrait.alt='Yawar Rehman';
  }
  const ogImage=$('meta[property="og:image"]');
  if(ogImage)ogImage.content='https://yawarguguma.github.io/assests/yawar-rehman.png';
}

function loadHeroStyles(){
  if($('link[href="hero.css"]'))return;
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href='hero.css';
  document.head.appendChild(link);
}

function ensurePhysicalAISkill(){
  const grid=$('.skill-grid');
  if(!grid)return;
  const existing=$$('.skill h3',grid).some(h=>h.dataset.en==='Physical AI'||h.textContent.trim()==='Physical AI');
  if(existing)return;
  const card=document.createElement('article');
  card.className='skill reveal on';
  card.id='physical-ai-skill';
  card.innerHTML='<h3 data-en="Physical AI" data-ko="피지컬 AI">Physical AI</h3><p data-en="Embodied and real world intelligent systems that connect perception, reasoning, and action." data-ko="지각, 추론, 행동을 연결하는 실세계 지능형 시스템과 체화 AI를 연구합니다.">Embodied and real world intelligent systems that connect perception, reasoning, and action.</p>';
  grid.appendChild(card);
}

function configureVisitCounter(){
  const footer=$('footer .footer');
  if(!footer||$('#visit-counter'))return;
  const counter=document.createElement('a');
  counter.id='visit-counter';
  counter.href='https://hits.sh/yawar26.github.io/';
  counter.target='_blank';
  counter.rel='noreferrer';
  counter.setAttribute('aria-label','Website visit statistics');
  counter.innerHTML='<img src="https://hits.sh/yawar26.github.io.svg?style=flat-square&label=visits" alt="Website visits">';
  footer.appendChild(counter);
}

function configureContactForm(){
  const box=$('#contact .contact-box');
  if(!box||$('#contact-form'))return;

  const heading=$('#contact h2');
  if(heading){
    heading.dataset.en='Do you like my work?';
    heading.dataset.ko='제 연구에 관심이 있으신가요?';
    heading.textContent=heading.dataset.en;
  }

  const description=$('#contact .contact-box h2 + p');
  if(description){
    description.dataset.en="Working on video understanding, Physical AI, or computer vision? Say hello. I'm always open to a conversation.";
    description.dataset.ko='영상 이해, 피지컬 AI 또는 컴퓨터 비전 분야에서 연구하고 계신가요? 언제든 편하게 연락해 주세요.';
    description.textContent=description.dataset.en;
  }

  const note=document.createElement('p');
  note.className='contact-note';
  note.dataset.en='The form opens your own mail app with the message ready to send. Nothing is stored on this site.';
  note.dataset.ko='이 양식은 작성된 메시지와 함께 사용자의 메일 앱을 엽니다. 이 사이트에는 어떠한 내용도 저장되지 않습니다.';
  note.textContent=note.dataset.en;

  const form=document.createElement('form');
  form.id='contact-form';
  form.className='contact-form';
  form.innerHTML=`
    <div class="contact-field">
      <label for="contact-name" data-en="Name *" data-ko="이름 *">Name *</label>
      <input id="contact-name" name="name" type="text" autocomplete="name" required>
    </div>
    <div class="contact-field">
      <label for="contact-email" data-en="E-mail *" data-ko="이메일 *">E-mail *</label>
      <input id="contact-email" name="email" type="email" autocomplete="email" required>
    </div>
    <div class="contact-field contact-message-field">
      <label for="contact-message" data-en="Message *" data-ko="메시지 *">Message *</label>
      <textarea id="contact-message" name="message" maxlength="300" required></textarea>
      <div class="contact-count" id="contact-count">0 / 300</div>
    </div>
    <button class="btn solid contact-submit" type="submit" data-en="Send message" data-ko="메시지 보내기">Send message</button>`;

  const socials=$('#contact .socials');
  if(socials){
    socials.insertAdjacentElement('afterend',note);
    note.insertAdjacentElement('afterend',form);
  }else{
    box.append(note,form);
  }

  const textarea=$('#contact-message');
  const counter=$('#contact-count');
  textarea?.addEventListener('input',()=>{counter.textContent=`${textarea.value.length} / 300`;});

  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const name=$('#contact-name').value.trim();
    const email=$('#contact-email').value.trim();
    const message=$('#contact-message').value.trim();
    const subject=`Website message from ${name}`;
    const body=`Name: ${name}\nE-mail: ${email}\n\nMessage:\n${message}`;
    window.location.href=`mailto:reh.yawar2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

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
  const en=['Video Understanding','Temporal Action Localization','Point Supervision','Physical AI','Computer Vision','Object Detection','Uncertainty','Robust Learning'];
  const ko=['영상 이해','시간적 행동 위치 추정','포인트 감독 학습','피지컬 AI','컴퓨터 비전','객체 탐지','불확실성','강건 학습'];
  const a=lang==='ko'?ko:en;
  ticker.innerHTML=[...a,...a].map(x=>`<span>${x}</span>`).join('');
}
function setLang(lang){
  document.documentElement.lang=lang;
  $$('[data-en][data-ko]').forEach(el=>{
    el.textContent=lang==='en'?cleanEnglish(el.dataset.en):el.dataset.ko;
  });
  langButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
  localStorage.setItem('site-lang',lang);
  renderExperience(lang);
  renderEducation(lang);
  buildTicker(lang);
}

configureResearchIdentity();
removeTrustworthyAICopy();
configurePortrait();
loadHeroStyles();
ensurePhysicalAISkill();
configureVisitCounter();
configureContactForm();

langButtons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
function syncMenu(){if(!nav)return;if(innerWidth<=900)nav.hidden=true;else nav.hidden=false}
syncMenu();addEventListener('resize',syncMenu);
if(burger&&nav){burger.addEventListener('click',()=>{nav.hidden=!nav.hidden;burger.setAttribute('aria-expanded',String(!nav.hidden))});$$('a',nav).forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=900)nav.hidden=true}))}
$('#year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.1});$$('.reveal').forEach(e=>io.observe(e));
setLang(localStorage.getItem('site-lang')||'en');
