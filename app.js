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
  if(footerFocus)footerFocus.remove();
  const description=$('meta[name="description"]');
  if(description)description.content='Yawar Rehman, PhD — Research Professor at Kyungpook National University. Video understanding, Physical AI, temporal action localization, and computer vision.';
  const ogDescription=$('meta[property="og:description"]');
  if(ogDescription)ogDescription.content='Video Understanding · Physical AI · Computer Vision';
}

function configureHeroBio(){
  const heroRole=$('.hero-role');
  if(heroRole){
    heroRole.dataset.en='PhD — Hanyang University, South Korea';
    heroRole.dataset.ko='박사 — 한양대학교, 대한민국';
    heroRole.textContent=heroRole.dataset.en;
  }

  $('.hero .credential')?.remove();

  const intro=$('.hero .intro');
  if(intro){
    const replacement=document.createElement('div');
    replacement.className='intro';
    replacement.id='hero-introduction';
    const paragraphs=[
      {
        en:'I have been working in Korea for the past three years. I worked in the AI industry for approximately 2.5 years, where I built AI models for client needs, developed and managed raw data annotation strategies, and worked on AI video anonymization and video understanding. I also developed edge AI for dashcam systems using computer vision models deployed on NVIDIA Jetson and Rockchip processor based Radxa platforms, contributing to physical AI perception in real world environments.',
        ko:'저는 지난 3년 동안 한국에서 일해 왔습니다. 약 2.5년 동안 AI 산업에서 근무하며 고객 요구에 맞는 AI 모델을 개발하고, 원시 데이터 주석 전략을 설계 및 관리했으며, AI 영상 익명화와 영상 이해 업무를 수행했습니다. 또한 NVIDIA Jetson 및 Rockchip 프로세서 기반 Radxa 플랫폼에 컴퓨터 비전 모델을 배포하여 대시캠 시스템용 엣지 AI를 개발했으며, 실제 환경에서의 피지컬 AI 인지에 기여했습니다.'
      },
      {
        en:"In academia, I worked for fifteen years at NED University of Engineering & Technology, one of Pakistan's top universities, where I served as an assistant professor in the Department of Electronic Engineering. I taught AI and electronics subjects to undergraduate, master's, and Ph.D. students. I supervised three Ph.D. students through completion of their degrees and designed several AI based courses for undergraduate, master's, and Ph.D. programs. I also served as a member of the Board of Studies and the Industrial Advisory Board, and as the ISO coordinator for documentation and management standards in the Department of Electronic Engineering.",
        ko:'학계에서는 파키스탄의 주요 대학 중 하나인 NED University of Engineering & Technology 전자공학과에서 15년 동안 근무했으며 조교수로 재직했습니다. 학부, 석사, 박사과정 학생들에게 AI 및 전자공학 과목을 강의했고, 3명의 박사과정 학생이 학위를 완료하도록 지도했습니다. 또한 학부, 석사, 박사과정을 위한 여러 AI 기반 교과목을 설계했습니다. 학과의 Board of Studies와 Industrial Advisory Board 위원으로 활동했으며, 전자공학과의 문서화 및 관리 표준을 담당하는 ISO 코디네이터로도 근무했습니다.'
      },
      {
        en:'Currently, I am working as a research professor at Kyungpook National University, where I am building AI models for video understanding and making these models deployable on edge devices.',
        ko:'현재 경북대학교 연구교수로 재직하며 영상 이해를 위한 AI 모델을 개발하고 이러한 모델을 엣지 디바이스에 배포할 수 있도록 연구하고 있습니다.'
      }
    ];
    replacement.replaceChildren(...paragraphs.map(item=>{
      const p=document.createElement('p');
      p.className='hero-intro-paragraph';
      p.dataset.en=item.en;
      p.dataset.ko=item.ko;
      p.textContent=item.en;
      return p;
    }));
    intro.replaceWith(replacement);
  }
}

function removeTrustworthyAICopy(){
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
  const portraitTag=$('.portrait .tag');
  if(portraitTag){
    portraitTag.dataset.en='person 0.99';
    portraitTag.dataset.ko='사람 0.99';
    portraitTag.textContent='person 0.99';
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

function configureSimpleContact(){
  const box=$('#contact .contact-box');
  if(!box)return;

  const eyebrow=$('#contact .eyebrow');
  if(eyebrow)eyebrow.remove();

  const heading=$('#contact h2');
  if(heading){
    heading.dataset.en='Do you like my work?';
    heading.dataset.ko='제 연구에 관심이 있으신가요?';
    heading.textContent=heading.dataset.en;
  }

  const description=$('#contact .contact-box h2 + p');
  if(description){
    description.dataset.en="Working on video understanding, physical AI, computer vision or AI model deployment onto edge hardware? Say hello — I'm always open to a conversation.";
    description.dataset.ko='영상 이해, 피지컬 AI, 컴퓨터 비전 또는 엣지 하드웨어에 AI 모델을 배포하는 연구를 하고 계신가요? 언제든 편하게 연락해 주세요.';
    description.textContent=description.dataset.en;
  }

  $('#contact .socials')?.remove();
  $('#contact-form')?.remove();
  $('#contact .contact-note')?.remove();
  $('#contact .contact-email')?.remove();

  const email=document.createElement('p');
  email.className='contact-email';
  email.innerHTML='Email: <a href="mailto:reh.yawar2@gmail.com">reh.yawar2@gmail.com</a>';
  box.appendChild(email);
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
configureHeroBio();
removeTrustworthyAICopy();
configurePortrait();
loadHeroStyles();
ensurePhysicalAISkill();
configureVisitCounter();
configureSimpleContact();

langButtons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
function syncMenu(){if(!nav)return;if(innerWidth<=900)nav.hidden=true;else nav.hidden=false}
syncMenu();addEventListener('resize',syncMenu);
if(burger&&nav){burger.addEventListener('click',()=>{nav.hidden=!nav.hidden;burger.setAttribute('aria-expanded',String(!nav.hidden))});$$('a',nav).forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=900)nav.hidden=true}))}
$('#year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.1});$$('.reveal').forEach(e=>io.observe(e));
setLang(localStorage.getItem('site-lang')||'en');
