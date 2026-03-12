// ═══════════════════════════════════
// DATA
// ═══════════════════════════════════
const AVATARS = [
  'Bird','Cat','Dog','Jellyfish','Koala','Monkey','Otter','Quokka','Rabbit','Snail','Snowman','Whale'
];
const AV_COLORS = [
  '#4ade80', '#fb923c', '#f87171', '#fde047',
  '#60a5fa', '#c084fc', '#f472b6', '#ffffff'
];

function avDiv(charIdx, colorIdx, size = 48, innerSize = null) {
  const name = AVATARS[charIdx % AVATARS.length];
  const bg = AV_COLORS[colorIdx % AV_COLORS.length];
  const svgBase64 = typeof SVG_DATA !== 'undefined' && SVG_DATA[name] ? SVG_DATA[name] : `characters/${name}.svg`;
  const imgSize = innerSize ?? (size >= 48 ? Math.round(size * 0.78) : Math.round(size * 0.85));
  return `<div class="av-circle" style="width:${size}px;height:${size}px;background:#1F1F1F;display:flex;align-items:center;justify-content:center;">
    <div style="width:${imgSize}px;height:${imgSize}px;background-color:${bg};-webkit-mask:url('${svgBase64}') no-repeat center/contain;mask:url('${svgBase64}') no-repeat center/contain;"></div>
  </div>`;
}

const PURPOSES_LIST = [
  {id:'info',label:'정보 교류 (업계/기술 트렌드)'},
  {id:'collab',label:'협업/프로젝트 팀원 찾기'},
  {id:'mentor',label:'멘토링/조언 받기'},
  {id:'job',label:'취업/이직'},
  {id:'hire',label:'채용 (정식 채용/인재 발굴)'},
  {id:'invest',label:'투자/비즈니스 파트너 찾기'},
  {id:'network',label:'네트워킹/인맥 확장 (커뮤니티)'},
];

const JOB_CATEGORIES = [
  {id:'sw',label:'소프트웨어 개발',subs:['프론트엔드','백엔드','풀스택','모바일','AI 엔지니어','데이터 엔지니어','네트워크 엔지니어링','시스템 아키텍처','클라우드 엔지니어']},
  {id:'data',label:'데이터 & AI',subs:['데이터 분석','ML 엔지니어','AI 연구']},
  {id:'plan',label:'기획',subs:['서비스 기획','PM','PO']},
  {id:'ops',label:'운영',subs:['CS','운영 기획','커뮤니티']},
  {id:'design',label:'UI/UX 디자인',subs:['UX 디자인','UI 디자인','프로덕트 디자인']},
  {id:'graphic',label:'그래픽 디자인',subs:['브랜드 디자인','모션 그래픽','일러스트']},
  {id:'mkt',label:'마케팅',subs:['그로스','브랜드','콘텐츠']},
  {id:'biz',label:'세일즈 & 비즈니스',subs:['B2B 영업','파트너십','사업개발']},
  {id:'startup',label:'창업 & 경영',subs:['창업가','C-level']},
  {id:'invest',label:'투자 & VC',subs:['VC','엔젤 투자','IR']},
  {id:'edu',label:'연구 & 교육',subs:['연구원','교수','강사']},
];

const INTEREST_LIST = ['소프트웨어 개발','데이터 & AI','클라우드 & 인프라','보안 & 블록체인','핀테크 & 금융','헬스케어 & 바이오','이커머스 & 마케팅','엔터테인먼트 & 미디어','스타트업 & 창업'];

const DUMMY = [
  {id:'d1', avIdx:0, colIdx:0, name:'그린버드',role:'프론트엔드 개발자',career:'주니어',company:'스타트업',bio:'웹 개발 3년차입니다. 새로운 사람들과 교류하고 싶어요.',tags:['프론트엔드','풀스택'],interests:['소프트웨어 개발','스타트업 & 창업'],purpose:'collab',status:'협업 파트너 찾아요'},
  {id:'d2', avIdx:1, colIdx:1, name:'오렌지캣',role:'프로덕트 매니저',career:'미드레벨',company:'카카오',bio:'PM 5년차. 좋은 프로덕트를 만드는 법을 공유하고 싶어요.',tags:['서비스 기획','PM'],interests:['스타트업 & 창업','핀테크 & 금융'],purpose:'info',status:'정보 교류 환영'},
  {id:'d3', avIdx:2, colIdx:2, name:'레드독',role:'UX 디자이너',career:'시니어',company:'토스',bio:'핀테크 UX 경력 7년. 멘토링 해드릴 수 있어요.',tags:['UI/UX 디자인'],interests:['핀테크 & 금융','이커머스 & 마케팅'],purpose:'mentor',status:'멘토링 신청 받아요'},
  {id:'d4', avIdx:3, colIdx:3, name:'옐로우젤리',role:'AI 엔지니어',career:'미드레벨',company:'KAIST',bio:'자연어처리 연구 중. 산업계 분들과 얘기 나누고 싶어요.',tags:['AI 엔지니어','데이터 엔지니어'],interests:['데이터 & AI','소프트웨어 개발'],purpose:'info',status:'AI 협업 관심'},
  {id:'d5', avIdx:4, colIdx:4, name:'블루코알라',role:'스타트업 창업자',career:'시니어',company:'핀업',bio:'B2B SaaS 창업 2년차. 투자자분들 찾고 있어요.',tags:['창업 & 경영'],interests:['스타트업 & 창업','핀테크 & 금융'],purpose:'invest',status:'Series A 준비 중'},
  {id:'d6', avIdx:5, colIdx:5, name:'퍼플멍키',role:'백엔드 개발자',career:'시니어',company:'네이버',bio:'Java·Spring 8년차. 대용량 트래픽 경험 공유해 드려요.',tags:['백엔드','시스템 아키텍처'],interests:['소프트웨어 개발','클라우드 & 인프라'],purpose:'mentor',status:'백엔드 멘토링 가능'},
  {id:'d7', avIdx:6, colIdx:6, name:'핑크오터',role:'데이터 분석가',career:'미드레벨',company:'쿠팡',bio:'커머스 데이터 분석 4년차. SQL·Python 잘해요.',tags:['데이터 분석','ML 엔지니어'],interests:['데이터 & AI','이커머스 & 마케팅'],purpose:'info',status:'데이터 인사이트 나눠요'},
  {id:'d8', avIdx:7, colIdx:7, name:'화이트쿼카',role:'그로스 마케터',career:'미드레벨',company:'버킷플레이스',bio:'퍼포먼스 마케팅 5년차. 그로스 전략 공유하고 싶어요.',tags:['그로스','콘텐츠'],interests:['이커머스 & 마케팅','스타트업 & 창업'],purpose:'network',status:'마케터 분들 연결해요'},
  {id:'d9', avIdx:8, colIdx:1, name:'오렌지래빗',role:'클라우드 엔지니어',career:'시니어',company:'AWS',bio:'클라우드 인프라 전문가. 아키텍처 고민 같이 해요.',tags:['클라우드 엔지니어','네트워크 엔지니어링'],interests:['클라우드 & 인프라','소프트웨어 개발'],purpose:'collab',status:'클라우드 프로젝트 모집 중'},
  {id:'d10', avIdx:9, colIdx:2, name:'레드스네일',role:'VC 심사역',career:'시니어',company:'본엔젤스',bio:'시드~시리즈A 스타트업 투자 전문. IR 피드백 드려요.',tags:['VC','엔젤 투자'],interests:['스타트업 & 창업','핀테크 & 금융'],purpose:'invest',status:'투자 미팅 오픈'},
  {id:'d11', avIdx:10, colIdx:4, name:'블루스노맨',role:'iOS 개발자',career:'미드레벨',company:'당근마켓',bio:'SwiftUI 3년차. 모바일 개발자 분들과 교류하고 싶어요.',tags:['모바일','프론트엔드'],interests:['소프트웨어 개발','스타트업 & 창업'],purpose:'network',status:'모바일 개발자 모임'},
  {id:'d12', avIdx:11, colIdx:6, name:'핑크웨일',role:'브랜드 디자이너',career:'주니어',company:'무신사',bio:'패션·라이프스타일 브랜딩 전문. 감각 있는 분과 협업 원해요.',tags:['브랜드 디자인','UI/UX 디자인'],interests:['이커머스 & 마케팅','엔터테인먼트 & 미디어'],purpose:'collab',status:'브랜딩 협업 찾아요'},
  {id:'d13', avIdx:0, colIdx:3, name:'옐로우버드',role:'보안 엔지니어',career:'미드레벨',company:'카카오페이',bio:'핀테크 보안 전문가. 보안 이슈 같이 얘기해요.',tags:['네트워크 엔지니어링','백엔드'],interests:['보안 & 블록체인','핀테크 & 금융'],purpose:'info',status:'보안 스터디 모집'},
  {id:'d14', avIdx:2, colIdx:5, name:'퍼플독',role:'헬스케어 기획자',career:'주니어',company:'눔',bio:'디지털 헬스케어 서비스 기획 2년차. 임팩트 있는 서비스 만들고 싶어요.',tags:['서비스 기획','PO'],interests:['헬스케어 & 바이오','스타트업 & 창업'],purpose:'collab',status:'헬스케어 팀 찾아요'},
];

const MOCK_CHATS = {
  d1:{partnerId:'d1',messages:[
    {id:'m1',from:'d1',text:'안녕하세요! 네트워킹 됐네요 😊',time:'14:30'},
    {id:'m2',from:'me',text:'반갑습니다! 협업 얘기 나눠보고 싶었어요',time:'14:31'},
    {id:'m3',from:'d1',text:'저도요! 잠깐 얘기 나눌 수 있을까요?',time:'14:31'},
  ],unread:1},
};

const MOCK_NOTIFS = [
  {id:'n1',text:'닉네임글자수_123님이 네트워킹을 수락했어요!',time:'방금 전',read:false,chatId:'d1'},
  {id:'n2',text:'오늘 네트워킹 세션에 5명이 참여했어요',time:'1시간 전',read:true,chatId:null},
];

// 나에게 온 네트워킹 요청 (받은 요청)
const MOCK_INCOMING = [
  {id:'r1', fromId:'d3', time:'방금 전'},
  {id:'r2', fromId:'d6', time:'2분 전'},
  {id:'r3', fromId:'d8', time:'5분 전'},
];

let S = {
  myId: null,
  sessionCode: 'DEMO',
  people: [],
  chats: {},
  currentChat: null,
  networkingOn: false,
  homeTab: '1v1',
  qrBannerDismissed: false,
  requestedIds: new Set(),
  expandedId: null,
  pendingRequestId: null,
  pendingCancelId: null,
  prevScreen: null,
  regStep: 1,
  regData: {},
  editingId: null,
  filterActive: {jobs:[], interests:[], careerMin:0, careerMax:4, purposes:[]},
  notifEnabled: false,
  incomingRequests: [...MOCK_INCOMING],
  notifTab: '1v1',
};

let rAvatar = 0;
let rColor = 0;
let rTags = [];
let rPurpose = null;
let rWant = null;

function load() {
  try {
    const raw = localStorage.getItem('qnw1');
    if (raw) {
      const s = JSON.parse(raw);
      S.myId = s.myId||null;
      S.people = s.people||[];
      S.chats = s.chats||{};
      S.sessionCode = s.sessionCode||'DEMO';
      S.requestedIds = new Set(s.requestedIds||[]);
    }
  } catch(e){}
  if (!S.people.length) S.people = DUMMY.map(d=>({
    avIdx: Math.floor(Math.random() * AVATARS.length),
    colIdx: Math.floor(Math.random() * AV_COLORS.length),
    ...d,
  }));
  if (!Object.keys(S.chats).length) S.chats = JSON.parse(JSON.stringify(MOCK_CHATS));
}

function save() {
  localStorage.setItem('qnw1', JSON.stringify({
    myId:S.myId, people:S.people, chats:S.chats,
    sessionCode:S.sessionCode, requestedIds:[...S.requestedIds]
  }));
}

// ═══════════════════════════════════
// SCREEN
// ═══════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-'+id);
  if (el) el.classList.add('active');
}

const MAIN_TABS = {home:'home', notif:'notif', mypage:'mypage'};
function switchMainTab(tab) {
  showScreen(MAIN_TABS[tab]);
  if (tab==='home') renderHomeList();
  if (tab==='notif') renderNotif();
  if (tab==='mypage') renderMypage();
}

// ═══════════════════════════════════
// LANDING
// ═══════════════════════════════════
function simulateQR() { S.sessionCode='NW24'; afterLanding(); }
function joinCode() {
  const v = document.getElementById('code-input').value.trim().toUpperCase();
  if (!v) { toast('세션 코드를 입력해 주세요'); return; }
  S.sessionCode = v; afterLanding();
}
function afterLanding() {
  if (S.myId) { showScreen('home'); renderHomeList(); }
  else startReg();
}

// ═══════════════════════════════════
// REGISTER
// ═══════════════════════════════════
function startReg(editing) {
  S.regStep = 1; S.editingId = editing||null;
  if (editing) {
    const p = S.people.find(x=>x.id===editing);
    if (p) {
      S.regData = {name:p.name,role:p.role,company:p.company||'',bio:p.bio,email:p.email||'',link:p.link||''};
      rAvatar = p.avIdx||0; rColor = p.colIdx||0; rTags=[...(p.tags||[])]; rPurpose=p.purpose||null; rWant=p.want||null;
    }
  } else {
    S.regData={}; rAvatar=0; rColor=0; rTags=[]; rPurpose=null; rWant=null;
  }
  buildRegStep(); showScreen('register');
}

function buildRegStep() {
  const step = S.regStep;
  [1,2,3].forEach(i => document.getElementById('pd'+i).classList.toggle('done',i<=step));
  const titles=['기본 정보','관심사 & 목적','오늘의 상태'];
  document.getElementById('reg-title').textContent = S.editingId?'프로필 수정':titles[step-1];
  const body = document.getElementById('reg-body');

  if (step===1) {
    body.innerHTML=`
      <div class="form-section preview-section" style="display:flex; justify-content:center; padding: 10px 0 20px;">
        <div id="step1-preview"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">아바타</div>
        <div class="avatar-row" id="av-row" style="margin-bottom:16px;"></div>
        <div class="form-section-title">배경 색상</div>
        <div class="avatar-row" id="color-row"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">기본 정보</div>
        <div class="field"><label>이름 / 닉네임 *</label><input id="r-name" type="text" placeholder="닉네임글자수_123" value="${esc(S.regData.name||'')}"></div>
        <div class="field"><label>직업 / 역할 *</label><input id="r-role" type="text" placeholder="프론트엔드 개발자" value="${esc(S.regData.role||'')}"></div>
        <div class="field"><label>소속</label><input id="r-company" type="text" placeholder="스타트업" value="${esc(S.regData.company||'')}"></div>
        <div class="field"><label>한줄 소개 *</label><textarea id="r-bio" placeholder="간단하게 자신을 소개해 주세요">${esc(S.regData.bio||'')}</textarea></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">연락처</div>
        <div class="field"><label>이메일</label><input id="r-email" type="email" placeholder="hello@example.com" value="${esc(S.regData.email||'')}"></div>
        <div class="field"><label>링크드인 / 링크</label><input id="r-link" type="url" placeholder="https://" value="${esc(S.regData.link||'')}"></div>
      </div>
      <button class="btn btn-primary" onclick="regStep1Next()">다음 →</button>
    `;
    buildAvatarPicker();
    updateStep1Preview();
  } else if (step===2) {
    body.innerHTML=`
      <div class="form-section">
        <div class="form-section-title">관심사 태그 <span style="color:var(--sub);font-weight:400;font-size:11px">(입력 후 Enter)</span></div>
        <div class="tag-input-wrap" id="tag-wrap"><input id="tag-in" type="text" placeholder="React, AI, 스타트업…"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">네트워킹 참여 목적</div>
        <div class="chip-row" id="purpose-row"></div>
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-outline" style="flex:1" onclick="S.regStep=1;buildRegStep()">← 이전</button>
        <button class="btn btn-primary" style="flex:2" onclick="regStep2Next()">다음 →</button>
      </div>
    `;
    buildTagInput(); buildChips('purpose-row',PURPOSES_LIST,()=>rPurpose,v=>rPurpose=v);
  } else {
    body.innerHTML=`
      <div class="form-section">
        <div class="form-section-title">오늘의 상태 메시지</div>
        <p style="font-size:13px;color:var(--sub);margin-bottom:14px;line-height:1.6">지금 무엇을 찾고 있나요? 다른 참여자에게 표시돼요.</p>
        <div class="field"><input id="r-status" type="text" placeholder="예: CTO 찾고 있어요" value="${esc(S.regData.status||'')}" maxlength="30"></div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px" id="status-sugg"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">카드 미리보기</div>
        <div class="p-card" style="margin-bottom:0">
          <div class="p-card-top" style="cursor:default">
            <div class="p-card-left">
              ${avDiv(rAvatar, rColor, 48)}
              <div class="p-card-info">
                <div class="p-card-name">${esc(S.regData.name||'닉네임')}</div>
              </div>
            </div>
            <span class="p-card-arrow">›</span>
          </div>
          <div class="p-card-tag-row"><img class="bm" src="icons/Icon_Bookmark_filled.svg"><span>${PURPOSES_LIST.find(p=>p.id===rPurpose)?.label||'목적 미선택'}</span></div>
        </div>
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-outline" style="flex:1" onclick="S.regStep=2;buildRegStep()">← 이전</button>
        <button class="btn btn-primary" style="flex:2" onclick="submitReg()">🎉 ${S.editingId?'수정 완료':'등록 완료'}</button>
      </div>
    `;
    const suggs=['CTO 찾고 있어요','Series A 준비 중','협업 파트너 구해요','멘토 찾습니다','오픈 마인드'];
    const sg=document.getElementById('status-sugg');
    suggs.forEach(s=>{
      const b=document.createElement('button');
      b.className='chip';b.style.fontSize='12px';b.textContent=s;
      b.onclick=()=>{document.getElementById('r-status').value=s;};
      sg.appendChild(b);
    });
  }
  body.scrollTop=0;
}

function buildAvatarPicker() {
  const row=document.getElementById('av-row');
  row.innerHTML='';
  AVATARS.forEach((name,i)=>{
    const d=document.createElement('div');
    d.className='avatar-opt'+(i===rAvatar?' selected':'');
    const bg = AV_COLORS[rColor % AV_COLORS.length];
    const svgBase64 = typeof SVG_DATA!=='undefined'&&SVG_DATA[name]?SVG_DATA[name]:`characters/${name}.svg`;
    d.innerHTML=`<div class="av-circle" style="width:100%;height:100%;background:#1F1F1F;">
      <div style="width:100%;height:100%;background-color:${bg};-webkit-mask:url('${svgBase64}') no-repeat center/85%;mask:url('${svgBase64}') no-repeat center/85%;"></div>
    </div>`;
    d.onclick=()=>{rAvatar=i;document.getElementById('av-row').querySelectorAll('.avatar-opt').forEach(x=>x.classList.remove('selected'));d.classList.add('selected');updateStep1Preview();};
    row.appendChild(d);
  });
  const crow=document.getElementById('color-row');
  if(!crow) return;
  crow.innerHTML='';
  AV_COLORS.forEach((bg,i)=>{
    const d=document.createElement('div');
    d.className='avatar-opt'+(i===rColor?' selected':'');
    d.style.cssText = `width:100%;height:100%;border-radius:50%;background:${bg};cursor:pointer;border:3px solid transparent;`;
    if(i===rColor) d.style.borderColor='var(--primary)';
    d.onclick=()=>{
      rColor=i;
      document.getElementById('color-row').querySelectorAll('.avatar-opt').forEach(x=>x.style.borderColor='transparent');
      d.style.borderColor='var(--primary)';
      buildAvatarPicker(); // 캐릭터 색상 즉시 업데이트
      updateStep1Preview(); // 미리보기 창 업데이트 (전체 폼 렌더링 X)
    };
    crow.appendChild(d);
  });
}

function updateStep1Preview() {
  const preview = document.getElementById('step1-preview');
  if (preview) {
    preview.innerHTML = avDiv(rAvatar, rColor, 88);
  }
}

function buildTagInput() {
  renderTagChips();
  const inp=document.getElementById('tag-in');
  inp.onkeydown=e=>{
    if(e.key==='Enter'||e.key===','){
      e.preventDefault();
      const v=inp.value.trim().replace(/,$/,'');
      if(v&&!rTags.includes(v)){rTags.push(v);renderTagChips();}
      inp.value='';
    }
    if(e.key==='Backspace'&&!inp.value&&rTags.length){rTags.pop();renderTagChips();}
  };
  document.getElementById('tag-wrap').onclick=e=>{if(e.target.id==='tag-wrap')inp.focus();};
}

function renderTagChips() {
  const wrap=document.getElementById('tag-wrap');
  const inp=document.getElementById('tag-in');
  if(!wrap)return;
  wrap.innerHTML='';
  rTags.forEach((t,i)=>{
    const chip=document.createElement('span');
    chip.className='tag-chip';
    chip.innerHTML=`${esc(t)}<span class="rm">×</span>`;
    chip.querySelector('.rm').onclick=()=>{rTags.splice(i,1);renderTagChips();};
    wrap.appendChild(chip);
  });
  wrap.appendChild(inp);
}

function buildChips(cid,items,getVal,setVal) {
  const c=document.getElementById(cid);
  items.forEach(item=>{
    const btn=document.createElement('button');
    btn.className='chip'+(getVal()===item.id?' selected':'');
    btn.innerHTML=`${item.icon} ${item.label}`;
    btn.onclick=()=>{setVal(item.id);c.querySelectorAll('.chip').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');};
    c.appendChild(btn);
  });
}

function regStep1Next() {
  const name=document.getElementById('r-name').value.trim();
  const role=document.getElementById('r-role').value.trim();
  const bio=document.getElementById('r-bio').value.trim();
  if(!name||!role||!bio){toast('이름, 역할, 소개는 필수예요');return;}
  S.regData={name,role,bio,company:document.getElementById('r-company').value.trim(),email:document.getElementById('r-email').value.trim(),link:document.getElementById('r-link').value.trim()};
  S.regStep=2;buildRegStep();
}

function regStep2Next() {
  if(!rPurpose){toast('네트워킹 목적을 선택해 주세요');return;}
  S.regStep=3;buildRegStep();
}

function submitReg() {
  const status=document.getElementById('r-status').value.trim();
  const person={id:S.editingId||('u'+Date.now()),avIdx:rAvatar,colIdx:rColor,...S.regData,tags:[...rTags],purpose:rPurpose,want:rWant,status};
  if(S.editingId){
    const idx=S.people.findIndex(p=>p.id===S.editingId);
    if(idx!==-1)S.people[idx]=person;
    toast('프로필이 수정됐어요 ✓');
  }else{
    S.people.push(person);S.myId=person.id;
    toast('등록 완료! 환영해요 🎉');
  }
  S.editingId=null;save();
  showScreen('home');renderHomeList();
}

// ═══════════════════════════════════
// HOME
// ═══════════════════════════════════
function toggleNetworking() {
  S.networkingOn = !S.networkingOn;
  document.getElementById('main-toggle').classList.toggle('on', S.networkingOn);
  const overlay = document.getElementById('networking-off-overlay');
  if (S.networkingOn) {
    overlay.classList.add('hidden');
    toast('네트워킹 ON!');
  } else {
    overlay.classList.remove('hidden');
    toast('네트워킹을 종료했어요');
  }
}

function dismissQRBanner() {
  S.qrBannerDismissed = true;
  document.getElementById('qr-banner').style.display = 'none';
}

function switchHomeTab(tab) {
  S.homeTab = tab;
  document.getElementById('tab-1v1').classList.toggle('active', tab==='1v1');
  document.getElementById('tab-group').classList.toggle('active', tab==='group');
  renderHomeList();
}

function renderHomeList() {
  const el = document.getElementById('home-list');
  if (!el) return;
  const list = S.people.filter(p => p.id !== S.myId);
  if (!list.length) {
    el.innerHTML=`<div class="empty-state"><div class="ei">👥</div><p>아직 참여자가 없어요.<br>조금만 기다리면 새로운 만남이 시작될 거예요!</p></div>`;
    return;
  }
  el.innerHTML='';
  list.forEach(p => {
    const purposeObj = PURPOSES_LIST.find(x=>x.id===p.purpose);
    const isRequested = S.requestedIds.has(p.id);
    const avIdx = p.avIdx||0;
    const purposeShort = purposeObj ? purposeObj.label.replace(/ \(.+\)$/,'') : '';

    const card = document.createElement('div');
    card.className = 'p-card'+(isRequested?' requested':'');
    card.id = 'pcard-'+p.id;
    card.innerHTML = `
      <div class="p-card-top" onclick="toggleCard('${p.id}')">
        <div class="p-card-left">
          ${avDiv(avIdx, p.colIdx||0, 48)}
          <div class="p-card-info">
            <div class="p-card-name">${esc(p.name)}</div>
          </div>
        </div>
        ${isRequested
          ? `<button class="net-cancel-pill" onclick="openCancelModal('${p.id}',event)">네트워킹 취소</button>`
          : `<span class="p-card-arrow">›</span>`
        }
      </div>
      ${purposeObj ? `<div class="p-card-tag-row"><img class="bm" src="icons/Icon_Bookmark_filled.svg"><span>${esc(purposeShort)}</span></div>` : ''}
    `;
    el.appendChild(card);
  });

  const overlay = document.getElementById('networking-off-overlay');
  if (overlay) overlay.classList.toggle('hidden', S.networkingOn);
}

function toggleCard(pid) {
  if (!S.networkingOn) { toast('스위치를 켜야 참여할 수 있어요'); return; }
  openProfilePopup(pid);
}

function openProfilePopup(pid) {
  const p = S.people.find(x => x.id === pid);
  if (!p) return;
  const isRequested = S.requestedIds.has(pid);
  const avIdx = p.avIdx||0;
  const purposeObj = PURPOSES_LIST.find(x => x.id === p.purpose);

  document.getElementById('profile-popup-header').innerHTML = `
    <div class="pp-avatar">${avDiv(avIdx, p.colIdx||0, 64, 60)}</div>
    <div class="pp-info">
      <div class="pp-name">${esc(p.name)}</div>
      ${(p.role||p.career) ? `<div class="pp-meta">${[p.role,p.career].filter(Boolean).map(esc).join(' | ')}</div>` : ''}
      ${p.company ? `<div class="pp-meta">${esc(p.company)}</div>` : ''}
    </div>
  `;

  const chips = p.interests||p.tags||[];
  const chipsEl = document.getElementById('profile-popup-chips');
  chipsEl.innerHTML = chips.length
    ? chips.map(t => `<span class="tag">${esc(t)}</span>`).join('')
    : '';
  chipsEl.style.display = chips.length ? 'flex' : 'none';

  const purposeEl = document.getElementById('profile-popup-purpose');
  const purposeShortLabel = purposeObj ? purposeObj.label.replace(/ \(.+\)$/, '') : '';
  purposeEl.innerHTML = purposeObj
    ? `<img class="bm" src="icons/Icon_Bookmark_filled.svg"><span>${esc(purposeShortLabel)}</span>`
    : '';
  purposeEl.style.display = purposeObj ? 'flex' : 'none';
  purposeEl.style.marginTop = chips.length ? '0' : '16px';

  document.getElementById('profile-popup-footer').innerHTML = !isRequested
    ? `<button class="net-request-btn" onclick="closeProfilePopup();openNetModal('${pid}')">네트워킹 신청</button>`
    : `<button class="net-request-btn net-cancel-btn" onclick="closeProfilePopup();openCancelModal('${pid}')">네트워킹 취소</button>`;

  document.getElementById('profile-popup').classList.remove('hidden');
}

function closeProfilePopup() {
  document.getElementById('profile-popup').classList.add('hidden');
}

function openNetModal(pid, e) {
  if (e) e.stopPropagation();
  const p = S.people.find(x=>x.id===pid);
  if (!p) return;
  S.pendingRequestId = pid;
  document.getElementById('modal-title').innerHTML = `<b>${esc(p.name)}</b>님에게<br>네트워킹을 신청할까요?`;
  document.getElementById('net-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('net-modal').classList.add('hidden');
  S.pendingRequestId = null;
}

function confirmNetRequest() {
  if (!S.pendingRequestId) return;
  const pid = S.pendingRequestId;
  S.requestedIds.add(pid);
  save();
  closeModal();
  renderHomeList();
  openSentModal(pid);
}

function openSentModal(pid) {
  const descEl = document.getElementById('sent-modal-desc');
  const actionsEl = document.getElementById('sent-modal-actions');

  if (S.notifEnabled) {
    // HO02_M03 — 알림 켜져있는 경우
    descEl.textContent = '요청 수락 시 알림으로 알려드릴게요.';
    actionsEl.innerHTML = `<button class="modal-yes" style="flex:1" onclick="closeSentModal()">확인</button>`;
  } else {
    // HO02_M04 — 알림 꺼져있는 경우
    descEl.textContent = '요청이 수락되면 알림으로 알려드릴게요.';
    actionsEl.innerHTML = `
      <button class="modal-no" onclick="closeSentModal()">괜찮아요</button>
      <button class="modal-yes" onclick="enableNotif()">알림받기</button>
    `;
  }

  document.getElementById('net-sent-modal').classList.remove('hidden');

  // 4초 후 자동 매칭 시뮬레이션
  setTimeout(() => {
    createChatIfNeeded(pid);
    document.getElementById('net-sent-modal').classList.add('hidden');
    toast('매칭됐어요! 채팅을 시작해 보세요 🎉');
    document.getElementById('notif-badge').style.display = 'flex';
    document.getElementById('notif-badge').textContent = '1';
  }, 4000);
}

function closeSentModal() {
  document.getElementById('net-sent-modal').classList.add('hidden');
}

function enableNotif() {
  S.notifEnabled = true;
  closeSentModal();
  toast('알림이 설정됐어요 🔔');
}

function openCancelModal(pid, e) {
  if (e) e.stopPropagation();
  S.pendingCancelId = pid;
  document.getElementById('net-cancel-modal').classList.remove('hidden');
}

function closeCancelModal() {
  document.getElementById('net-cancel-modal').classList.add('hidden');
  S.pendingCancelId = null;
}

function confirmCancelRequest() {
  const pid = S.pendingCancelId;
  if (!pid) return;
  S.requestedIds.delete(pid);
  save();
  closeCancelModal();
  renderHomeList();
  toast('네트워킹 신청을 취소했어요');
}

// ═══════════════════════════════════
// FILTER
// ═══════════════════════════════════
function openFilter() {
  buildFilterSheet();
  document.getElementById('filter-sheet').classList.remove('hidden');
}
function closeFilter() { document.getElementById('filter-sheet').classList.add('hidden'); }

function buildFilterSheet() {
  const body = document.getElementById('filter-sheet-body');
  // Job categories accordion
  let html = `
    <div class="filter-section">
      <div class="filter-section-title">직무/직책 <span class="filter-count-badge" id="fc-job">0/50</span></div>
  `;
  JOB_CATEGORIES.forEach(cat => {
    html += `
      <div class="accordion-item" id="ac-${cat.id}">
        <div class="accordion-header" onclick="toggleAccordion('${cat.id}')">
          <div class="ac-left">
            <div class="accordion-check" id="ach-${cat.id}"></div>
            <span>${cat.label}</span>
          </div>
          <span class="accordion-arrow">∨</span>
        </div>
        <div class="accordion-body">
          ${cat.subs.map(s=>`<button class="chip" onclick="toggleJobChip(this,'${cat.id}','${s}')">${s}</button>`).join('')}
        </div>
      </div>
    `;
  });
  html += `</div>
    <div class="filter-section">
      <div class="filter-section-title">관심분야 <span class="filter-count-badge" id="fc-int">0/9</span></div>
      <div class="chip-row" id="interest-chips">
        ${INTEREST_LIST.map(s=>`<button class="chip" onclick="toggleInterestChip(this,'${s}')">${s}</button>`).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">경력</div>
      <div class="dual-range-wrap">
        <div class="dual-range-track"><div class="dual-range-fill" id="career-fill"></div></div>
        <input type="range" class="range-thumb" id="career-min" min="0" max="4" value="0" oninput="updateDualRange()">
        <input type="range" class="range-thumb" id="career-max" min="0" max="4" value="4" oninput="updateDualRange()">
      </div>
      <div class="range-labels">
        <span class="range-label" data-i="0">학생<br><span class="range-sub">-</span></span>
        <span class="range-label" data-i="1">신입<br><span class="range-sub">1년 이하</span></span>
        <span class="range-label" data-i="2">주니어<br><span class="range-sub">1~3년</span></span>
        <span class="range-label" data-i="3">미드레벨<br><span class="range-sub">4~9년</span></span>
        <span class="range-label" data-i="4">시니어<br><span class="range-sub">10년 이상</span></span>
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">네트워킹 참여 목적 <span class="filter-count-badge" id="fc-purpose">0/7</span></div>
      <div class="chip-row">
        ${PURPOSES_LIST.map(p=>`<button class="chip" onclick="togglePurposeChip(this,'${p.id}')">${p.label}</button>`).join('')}
      </div>
    </div>
  `;
  body.innerHTML = html;
}

function toggleAccordion(id) {
  const item = document.getElementById('ac-'+id);
  item.classList.toggle('open');
}
function toggleJobChip(btn) { btn.classList.toggle('selected'); }
function toggleInterestChip(btn) { btn.classList.toggle('selected'); }
function togglePurposeChip(btn) { btn.classList.toggle('selected'); }
function updateDualRange() {
  const minEl = document.getElementById('career-min');
  const maxEl = document.getElementById('career-max');
  const fill = document.getElementById('career-fill');
  if (!minEl||!maxEl||!fill) return;
  let minV = parseInt(minEl.value), maxV = parseInt(maxEl.value);
  if (minV > maxV) { minEl.value = maxV; minV = maxV; }
  if (maxV < minV) { maxEl.value = minV; maxV = minV; }
  const pct = 25; // 100/4
  fill.style.left = (minV * pct) + '%';
  fill.style.width = ((maxV - minV) * pct) + '%';
  document.querySelectorAll('.range-label').forEach((l,i) => {
    l.classList.toggle('active', i >= minV && i <= maxV);
  });
}

function resetFilter() {
  buildFilterSheet();
  document.getElementById('filter-btn').classList.remove('active');
  document.getElementById('filter-count').style.display='none';
}

function applyFilter() {
  closeFilter();
  toast('필터가 적용됐어요');
  document.getElementById('filter-btn').classList.add('active');
  document.getElementById('filter-count').style.display='flex';
  document.getElementById('filter-count').textContent='1';
}

// ═══════════════════════════════════
// QR
// ═══════════════════════════════════
function goQR() {
  renderQR(); showScreen('qr');
}
function renderQR() {
  const body=document.getElementById('qr-body');
  const me=S.people.find(p=>p.id===S.myId);
  if(!me){body.innerHTML=`<div class="empty-state"><div class="ei">🪪</div><p>프로필을 먼저 등록해 주세요</p></div>`;return;}
  body.innerHTML=`
    <div class="qr-card">
      <div class="qr-code-box">${avDiv(me.avIdx||0, me.colIdx||0, 100)}</div>
      <div class="qr-name">${esc(me.name)}</div>
      <div class="qr-role">${esc(me.role)}</div>
      ${me.status?`<div class="qr-status">"${esc(me.status)}"</div>`:''}
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px">${(me.tags||[]).map(t=>`<span class="tag primary">${esc(t)}</span>`).join('')}</div>
      <button class="btn btn-outline btn-sm" onclick="toast('링크가 복사됐어요!')">🔗 링크 복사</button>
    </div>
    <div class="profile-info-card">
      ${me.bio?`<div class="profile-row"><span class="pr-icon">💬</span><div><div class="pr-label">소개</div><div class="pr-val">${esc(me.bio)}</div></div></div>`:''}
      ${me.email?`<div class="profile-row"><span class="pr-icon">✉️</span><div><div class="pr-label">이메일</div><div class="pr-val">${esc(me.email)}</div></div></div>`:''}
      ${me.company?`<div class="profile-row"><span class="pr-icon">🏢</span><div><div class="pr-label">소속</div><div class="pr-val">${esc(me.company)}</div></div></div>`:''}
    </div>
    <button class="btn btn-outline" onclick="startReg('${me.id}')">✏️ 프로필 수정</button>
  `;
}

// ═══════════════════════════════════
// NOTIFICATION
// ═══════════════════════════════════
function switchNotifTab(tab) {
  S.notifTab = tab;
  document.getElementById('notif-tab-1v1').classList.toggle('active', tab==='1v1');
  document.getElementById('notif-tab-group').classList.toggle('active', tab==='group');
  renderNotif();
}

function toggleNotif() {
  S.notifEnabled = !S.notifEnabled;
  renderNotif();
}

function renderNotif() {
  document.getElementById('notif-badge').style.display = 'none';
  const body = document.getElementById('notif-body');
  const incoming = S.incomingRequests || [];
  body.innerHTML = '';

  // ── 토글 카드 ──
  const toggleCard = document.createElement('div');
  toggleCard.className = 'notif-toggle-card';
  toggleCard.innerHTML = `
    <div class="notif-toggle-info">
      <div class="notif-toggle-title">${S.notifEnabled ? '알림 ON' : '알림 OFF'}</div>
      <div class="notif-toggle-desc">네트워킹 요청을 확인하려면 알림을 켜야해요!</div>
    </div>
    <div class="toggle-switch${S.notifEnabled ? ' on notif-on' : ''}" onclick="toggleNotif()"></div>
  `;
  body.appendChild(toggleCard);

  if (S.notifTab === 'group') {
    body.insertAdjacentHTML('beforeend', `<div class="empty-state"><p>그룹 알림이 없어요</p></div>`);
    return;
  }

  // ── 알림 ON + 받은 요청 있을 때: 그룹 카드 ──
  if (S.notifEnabled && incoming.length > 0) {
    const firstReq = incoming[0];
    const fp = S.people.find(p => p.id === firstReq.fromId);
    const groupCard = document.createElement('div');
    groupCard.className = 'notif-req-group';
    groupCard.onclick = () => openRequestDetail(firstReq.id);
    groupCard.innerHTML = `
      <div class="notif-req-header">
        <span class="notif-req-badge">${incoming.length}</span>
        <span class="notif-req-label">네트워킹요청</span>
        <span class="notif-req-count">${incoming.length}:${firstReq.time}</span>
        <span class="notif-req-arrow">›</span>
      </div>
      <div class="notif-req-item">
        ${fp ? avDiv(fp.avIdx||0, fp.colIdx||0, 40) : ''}
        <div class="notif-req-content">
          <div class="notif-req-msg"><b>${esc(fp?.name||'?')}님</b>이 네트워킹을 신청했습니다!</div>
          <div class="notif-req-sub">3분 내 응답하지 않으면 자동 취소됩니다.</div>
          <div class="notif-req-time">${firstReq.time}</div>
        </div>
      </div>
    `;
    body.appendChild(groupCard);
  }

  // ── 일반 알림 항목 (알림 OFF일 때도 표시) ──
  const allItems = [
    ...( (!S.notifEnabled && incoming.length > 0) ? incoming.map(r => {
      const p = S.people.find(x => x.id === r.fromId);
      return { id: r.id, isIncoming: true, fromId: r.fromId, name: p?.name||'?', time: r.time };
    }) : []),
    ...MOCK_NOTIFS.map(n => ({...n, isIncoming: false}))
  ];

  if (allItems.length === 0) {
    body.insertAdjacentHTML('beforeend', `<div class="empty-state"><p>받은 알림이 없어요. 네트워킹을 시작해보세요!</p></div>`);
    return;
  }

  allItems.forEach(item => {
    const el = document.createElement('div');
    el.className = 'notif-item';
    if (item.isIncoming) {
      el.onclick = () => openRequestDetail(item.id);
      el.innerHTML = `
        <div class="notif-item-body">
          <div class="notif-text"><b>${esc(item.name)}님</b>이 네트워킹을 신청했습니다!</div>
          <div class="notif-text" style="color:var(--sub);font-size:12px;margin-top:2px">3분 내 응답하지 않으면 자동 취소됩니다.</div>
          <div class="notif-time">${item.time}</div>
        </div>
      `;
    } else {
      if (item.chatId) el.onclick = () => openChatRoom(item.chatId);
      el.innerHTML = `
        <div class="notif-dot${item.read?' read':''}"></div>
        <div class="notif-item-body">
          <div class="notif-text">${esc(item.text)}</div>
          <div class="notif-time">${item.time}</div>
        </div>
      `;
      item.read = true;
    }
    body.appendChild(el);
  });
}

function openRequestDetail(rid) {
  const req = S.incomingRequests.find(r => r.id === rid);
  if (!req) return;
  const p = S.people.find(x => x.id === req.fromId);
  if (!p) return;

  const purposeObj = PURPOSES_LIST.find(x => x.id === p.purpose);
  const interests = p.interests || p.tags || [];

  document.getElementById('req-detail-body').innerHTML = `
    <div class="req-detail-profile">
      <div class="req-detail-avatar">${avDiv(p.avIdx||0, p.colIdx||0, 64, 50)}</div>
      <div class="req-detail-name">${esc(p.name)}</div>
      <div class="req-detail-role">${[p.role, p.career].filter(Boolean).map(esc).join('(') + (p.career ? ')' : '')}</div>
      <div class="req-detail-badge-row">
        <span class="req-badge-dot">1</span>
        <span class="req-detail-badge">네트워킹요청 ${S.incomingRequests.length}:${req.time}</span>
      </div>
    </div>
    ${purposeObj ? `
    <div class="req-detail-section">
      <div class="req-detail-section-title">참여목적</div>
      <div class="req-detail-section-body">${esc(purposeObj.label)}</div>
    </div>` : ''}
    ${interests.length ? `
    <div class="req-detail-section">
      <div class="req-detail-section-title">관심사</div>
      <div class="req-detail-chips">${interests.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    </div>` : ''}
  `;

  document.getElementById('req-action-panel').innerHTML = `
    <div class="req-action-inner">
      <div class="req-action-header">
        <span class="req-badge-dot">2</span>
        <span class="req-action-title">요청을 수락해 네트워킹 진행하시겠어요?</span>
      </div>
      <div class="req-action-desc">거절하면 네트워킹을 진행하지 않아요</div>
      <div class="modal-actions">
        <button class="modal-no" onclick="rejectRequest('${rid}')">거절</button>
        <button class="modal-yes" onclick="acceptRequest('${rid}')">수락</button>
      </div>
    </div>
  `;

  showScreen('req-detail');
}

function acceptRequest(rid) {
  const req = S.incomingRequests.find(r => r.id === rid);
  if (!req) return;
  S.incomingRequests = S.incomingRequests.filter(r => r.id !== rid);
  createChatIfNeeded(req.fromId);
  showScreen('notif');
  renderNotif();
  toast('네트워킹이 수락됐어요! 채팅을 시작해 보세요 🎉');
}

function rejectRequest(rid) {
  S.incomingRequests = S.incomingRequests.filter(r => r.id !== rid);
  showScreen('notif');
  renderNotif();
  toast('요청을 거절했어요');
}

// ═══════════════════════════════════
// MYPAGE
// ═══════════════════════════════════
function renderMypage() {
  const body=document.getElementById('mypage-body');
  const me=S.people.find(p=>p.id===S.myId);
  body.innerHTML=`
    <div class="mypage-profile-section">
      ${avDiv(me?.avIdx||0, me?.colIdx||0, 64)}
      <div class="mypage-info">
        <div class="mypage-name">${me?esc(me.name):'프로필 미등록'}</div>
        <div class="mypage-role">${me?esc(me.role):''}</div>
        ${me?.status?`<div class="mypage-status">"${esc(me.status)}"</div>`:''}
      </div>
    </div>
    <div class="mypage-menu">
      <div class="menu-section-title">내 정보</div>
      <div class="menu-item" onclick="${me?`startReg('${me.id}')`:'startReg()'}">
        <span class="menu-icon">👤</span>
        <span class="menu-label">내 정보 확인/수정</span>
        <span class="menu-arrow">›</span>
      </div>
      <div class="menu-item" onclick="goQR()">
        <span class="menu-icon">🪪</span>
        <span class="menu-label">내 명함 미리보기</span>
        <span class="menu-arrow">›</span>
      </div>
      <div class="menu-section-title">온라인 명함 보관함</div>
      <div class="menu-item" onclick="showScreen('chatroom');renderMsgs()">
        <span class="menu-icon">💬</span>
        <span class="menu-label">채팅 목록</span>
        <span class="menu-arrow">›</span>
      </div>
      <div class="menu-item" onclick="toast('저장된 명함이 없어요')">
        <span class="menu-icon">📁</span>
        <span class="menu-label">저장된 네트워킹 명함</span>
        <span class="menu-arrow">›</span>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════
// CHAT
// ═══════════════════════════════════
function createChatIfNeeded(pid) {
  if (!S.chats[pid]) {
    S.chats[pid]={partnerId:pid,messages:[{id:'m'+Date.now(),from:'system',text:'네트워킹이 연결됐어요! 자유롭게 대화해 보세요 🎉',time:nowTime()}],unread:0};
    save();
  }
}

function openChatRoom(pid) {
  const partner=S.people.find(p=>p.id===pid);
  if(!partner)return;
  S.currentChat=pid;
  if(S.chats[pid])S.chats[pid].unread=0;
  document.getElementById('chatroom-title').textContent=partner.name;
  showScreen('chatroom');
  renderMsgs();
  requestAnimationFrame(()=>{const el=document.getElementById('chat-messages');if(el)el.scrollTop=el.scrollHeight;});
}

function renderMsgs() {
  const el=document.getElementById('chat-messages');
  if(!el||!S.currentChat)return;
  const chat=S.chats[S.currentChat];
  if(!chat)return;
  el.innerHTML='';
  chat.messages.forEach(m=>{
    if(m.from==='system'){const d=document.createElement('div');d.className='msg-system';d.textContent=m.text;el.appendChild(d);return;}
    if(m.type==='card'){
      const p2=S.people.find(x=>x.id===m.cardId);
      const row=document.createElement('div');
      row.className='msg-row'+(m.from==='me'?' me':'');
      if(m.from!=='me'){const av=S.people.find(x=>x.id===S.currentChat);const avEl=document.createElement('div');avEl.className='msg-av';avEl.innerHTML=av?avDiv(av.avIdx||0,av.colIdx||0,28):'';row.appendChild(avEl);}
      const bubble=document.createElement('div');
      bubble.className='chat-card-bubble';
      bubble.innerHTML=`${avDiv(p2?.avIdx||0,p2?.colIdx||0,36)}<div><div class="cc-name">${esc(p2?.name||'?')}</div><div class="cc-role">${esc(p2?.role||'')}</div></div>`;
      bubble.onclick=()=>openDetail(m.cardId,'chatroom');
      row.appendChild(bubble);el.appendChild(row);return;
    }
    const row=document.createElement('div');
    row.className='msg-row'+(m.from==='me'?' me':'');
    if(m.from!=='me'){const av=S.people.find(x=>x.id===S.currentChat);const avEl=document.createElement('div');avEl.className='msg-av';avEl.innerHTML=av?avDiv(av.avIdx||0,av.colIdx||0,28):'';row.appendChild(avEl);}
    const bubble=document.createElement('div');bubble.className='msg-bubble';bubble.textContent=m.text;
    const tEl=document.createElement('span');tEl.className='msg-time';tEl.textContent=m.time;
    row.appendChild(bubble);row.appendChild(tEl);el.appendChild(row);
  });
}

function sendMsg() {
  const ta=document.getElementById('chat-ta');
  const text=ta.value.trim();
  if(!text||!S.currentChat)return;
  const chat=S.chats[S.currentChat];if(!chat)return;
  chat.messages.push({id:'m'+Date.now(),from:'me',text,time:nowTime()});
  ta.value='';ta.style.height='';save();renderMsgs();
  const el=document.getElementById('chat-messages');if(el)el.scrollTop=el.scrollHeight;
  setTimeout(()=>{
    const replies=['네, 맞아요!','오, 흥미롭네요 👀','좋아요! 연락 드릴게요 😊','저도 비슷한 고민이에요.','같이 한번 해봐요!'];
    chat.messages.push({id:'m'+Date.now(),from:S.currentChat,text:replies[Math.floor(Math.random()*replies.length)],time:nowTime()});
    save();renderMsgs();if(el)el.scrollTop=el.scrollHeight;
  },1000+Math.random()*800);
}

function shareCard() {
  if(!S.myId||!S.currentChat)return;
  const chat=S.chats[S.currentChat];if(!chat)return;
  chat.messages.push({id:'m'+Date.now(),from:'me',type:'card',cardId:S.myId,time:nowTime()});
  save();renderMsgs();
  const el=document.getElementById('chat-messages');if(el)el.scrollTop=el.scrollHeight;
  toast('명함을 공유했어요 🪪');
}

function chatKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,100)+'px';}
function backFromChat(){showScreen('home');renderHomeList();}
function openDetailFromChat(){if(S.currentChat)openDetail(S.currentChat,'chatroom');}

// ═══════════════════════════════════
// DETAIL
// ═══════════════════════════════════
function openDetail(id,from) {
  const p=S.people.find(x=>x.id===id);if(!p)return;
  S.prevScreen=from||'home';
  const isMe=p.id===S.myId;
  document.getElementById('d-av').innerHTML=avDiv(p.avIdx||0, p.colIdx||0, 80);
  document.getElementById('d-av').style.cssText='';
  document.getElementById('d-name').textContent=p.name;
  document.getElementById('d-role').textContent=p.role;
  document.getElementById('detail-title').textContent=p.name;
  const db=document.getElementById('d-body');
  const pObj=PURPOSES_LIST.find(x=>x.id===p.purpose);
  db.innerHTML=`
    ${p.bio?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">소개</div><p style="font-size:14px;line-height:1.6">${esc(p.bio)}</p></div>`:''}
    ${p.tags?.length?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">관심사</div><div style="display:flex;flex-wrap:wrap;gap:6px">${p.tags.map(t=>`<span class="tag primary">${esc(t)}</span>`).join('')}</div></div>`:''}
    ${p.status?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">오늘의 상태</div><p style="font-size:15px;font-weight:600;color:var(--orange-light)">"${esc(p.status)}"</p></div>`:''}
    ${pObj?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">참여 목적</div><span class="purpose-tag"><img class="bm" src="icons/Icon_Bookmark_filled.svg">${esc(pObj.label)}</span></div>`:''}
    ${(p.email||p.link||p.company)?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">연락처</div>${p.email?`<a href="mailto:${p.email}" style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);text-decoration:none;color:var(--text);font-size:14px"><span>✉️</span><span style="flex:1">${esc(p.email)}</span><span style="color:var(--sub)">›</span></a>`:''}${p.company?`<div style="display:flex;align-items:center;gap:10px;padding:10px 0;font-size:14px"><span>🏢</span><span>${esc(p.company)}</span></div>`:''}</div>`:''}
    ${!isMe?`<div style="display:flex;gap:10px">
      <button class="btn btn-outline" style="flex:1" onclick="openNetModal('${p.id}')">🤝 네트워킹 신청</button>
      <button class="btn btn-primary" style="flex:1" onclick="chatFromDetail('${p.id}')">💬 채팅</button>
    </div>`:`<button class="btn btn-outline" onclick="startReg('${p.id}')">✏️ 프로필 수정</button>`}
  `;
  showScreen('detail');
}

function chatFromDetail(id) {
  createChatIfNeeded(id); closeDetail();
  setTimeout(()=>openChatRoom(id),50);
}

function closeDetail() {
  const prev=S.prevScreen||'home';S.prevScreen=null;
  if(prev==='chatroom')showScreen('chatroom');
  else showScreen('home');
}

// ═══════════════════════════════════
// UTILS
// ═══════════════════════════════════
function nowTime(){const d=new Date();return `${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;}

function esc(s){
  if(!s)return'';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2500);
}

// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════
function init() {
  load();
  if (S.myId) {
    showScreen('home');
    renderHomeList();
  } else {
    showScreen('landing');
  }
}

init();
