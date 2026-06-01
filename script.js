// =========================================================================
// 1. 30가지 고품질 질문 풀 (일상, 인격관, 가치관, 조직 성향 융합)
// =========================================================================
const questionPool = [
    { q: "만약 로또 100억에 당첨된다면, 당신이 가장 먼저 할 일은?", a: [{ text: "당장 회사를 때려치우고 나만의 건물이나 브랜드를 세운다.", score: { E: 1, N: 1 } }, { text: "조용히 예적금과 안전 자산에 묻어두고 하던 일을 계속한다.", score: { I: 1, S: 1 } }] },
    { q: "친구와 대화 중 의견 대립이 생겼다. 당신이 취하는 스탠스는?", a: [{ text: "내 논리가 맞음을 증명하기 위해 팩트와 근거를 명확히 제시한다.", score: { T: 2 } }, { text: "관계가 어색해지는 것이 싫어 적당히 공감하며 대화를 넘긴다.", score: { F: 2 } }] },
    { q: "인생에서 단 하나의 가치만 선택해야 한다면 당신의 선택은?", a: [{ text: "끊임없는 성장과 남들보다 앞서나가는 명예 및 성취", score: { N: 1, T: 1 } }, { text: "정서적인 안정과 사랑하는 사람들과 함께하는 평화로운 일상", score: { S: 1, F: 1 } }] },
    { q: "오랜만에 찾아온 일주일간의 황금 연휴, 당신의 휴식 스타일은?", a: [{ text: "새로운 핫플레이스를 가거나 지인들을 만나며 에너지를 충전한다.", score: { E: 2 } }, { text: "집에서 밀린 OTT를 보거나 혼자만의 시간을 가지며 방전된 몸을 추스른다.", score: { I: 2 } }] },
    { q: "낯선 사람이 길을 물어보며 무리한 부탁을 해올 때 당신의 속마음은?", a: [{ text: "상황이 안타까우니 내 일정에 조금 손해가 가더라도 최대한 도와준다.", score: { F: 1 } }, { text: "내 알 바 아니거나 곤란하므로 단호하게 거절하고 내 길을 간다.", score: { T: 1 } }] },
    { q: "길을 가다 아주 독특하고 창의적인 건축물을 보았을 때 드는 생각은?", a: [{ text: "이 건물을 지은 사람은 무슨 상상을 하며 만들었을지 대단하다 느낀다.", score: { N: 2 } }, { text: "청소하기 힘들겠다거나 건축비가 얼마나 들었을지 현실적인 계산이 먼저 든다.", score: { S: 2 } }] },
    { q: "주변 사람들이 당신을 평가할 때 가장 많이 쓰는 단어는?", a: [{ text: "아이디어가 많고 도전적이며 주도적인 사람", score: { E: 1, N: 1 } }, { text: "성실하고 믿음직하며 중심을 잘 잡는 사람", score: { I: 1, S: 1 } }] },
    { q: "세상에 나쁜 사람은 없다는 말에 동의하시나요?", a: [{ text: "상황과 환경이 사람을 만든 것이므로 어느 정도 이해의 여지가 있다.", score: { F: 1 } }, { text: "아니다. 본성이 악하거나 선을 넘은 인간은 대가가 필요하다.", score: { T: 1 } }] },
    { q: "약속 시간에 늦은 친구가 '오는 길에 하늘이 너무 예뻐서 보다가 늦었다'고 한다면?", a: [{ text: "하늘 사진을 보여달라고 하거나 그 감성에 동조해 웃어넘긴다.", score: { F: 2 } }, { text: "늦은 건 늦은 거고, 감성 핑계 대지 말고 미안하다고 먼저 하라고 생각한다.", score: { T: 2 } }] },
    { q: "만약 과거로 돌아갈 수 있는 타임머신이 있다면?", a: [{ text: "미래 지식을 활용해 엄청난 비즈니스를 일으키거나 세상을 바꿔본다.", score: { N: 2 } }, { text: "과거 내 실수를 바로잡고 안정적인 삶의 기반을 더 탄탄히 다진다.", score: { S: 2 } }] },
    { q: "팀 프로젝트 중 팀원들의 업무 효율이 엉망이다. 당신의 행동은?", a: [{ text: "내가 총대를 메고 타임라인을 새로 짜서 강하게 드라이브를 건다.", score: { E: 1, T: 1 } }, { text: "서로 스트레스받지 않도록 개별 사정을 들어주며 조용히 내 분량을 채운다.", score: { I: 1, F: 1 } }] },
    { q: "회사에서 엄청난 업무 성과를 냈다. 더 듣고 싶은 칭찬은?", a: [{ text: "역시 김 대리 없으면 이 팀 안 돌아가! 정말 고생 많았어.", score: { F: 2 } }, { text: "이번 기획서 완벽했어. 수치랑 데이터 검증이 완벽하더라고.", score: { T: 2 } }] },
    { q: "새로운 부서로 발령받았다. 당신이 가장 중요하게 생각하는 것은?", a: [{ text: "이 부서에서 다루는 기술이 내 커리어에 얼마나 비전이 있는가", score: { N: 1 } }, { text: "부서원들의 성향이 모나지 않고 워라밸이 잘 지켜지는가", score: { S: 1 } }] },
    { q: "갑작스러운 야근이 확정되었다. 저녁 메뉴를 고를 때 당신은?", a: [{ text: "팀원들과 북적북적 맛있는 걸 먹으며 스트레스를 푼다.", score: { E: 1 } }, { text: "자기 자리에서 조용히 배달 음식을 먹으며 빨리 일 끝낼 생각만 한다.", score: { I: 1 } }] },
    { q: "상사가 도저히 실현 불가능해 보이는 무리한 기획안을 요구한다면?", a: [{ text: "일단 알겠다고 한 뒤, 안 되는 논리적 데이터와 대안을 찾아 대치한다.", score: { T: 1 } }, { text: "상사의 체면을 고려해 최대한 맞추려고 노력하는 시늉이라도 먼저 한다.", score: { F: 1 } }] },
    { q: "회사 모니터 화면 뒤에 붙은 메모지, 당신의 스타일은?", a: [{ text: "중요 스케줄과 주간 업무가 타임라인 순으로 명확히 정리되어 있다.", score: { S: 1 } }, { text: "아이디어나 낙서, 당장 처리할 것들이 자유롭게 흩어져 있다.", score: { N: 1 } }] },
    { q: "동료가 주말에 있었던 힘든 개인사를 털어놓으며 눈물을 보인다면?", a: [{ text: "같이 마음 아파하며 이야기를 끝까지 들어주고 위로해 준다.", score: { F: 2 } }, { text: "위로는 하지만 속으로는 '이걸 왜 나한테 이야기하지?'라는 생각이 스친다.", score: { T: 2 } }] },
    { q: "업무 지침서(SOP)가 없는 신규 프로젝트에 투입되었다면?", a: [{ text: "아무것도 없는 맨땅에 헤딩하며 내 스타일대로 룰을 만드는 게 재밌다.", score: { N: 1, E: 1 } }, { text: "표준 가이드가 없어서 심하게 불안하고, 전임자 자료부터 필사적으로 찾는다.", score: { S: 1, I: 1 } }] },
    { q: "사내 공모전에 참여하게 되었다. 당신이 노리는 포지션은?", a: [{ text: "무대 위에서 청중을 사로잡고 발표를 진행하는 PT 발표자", score: { E: 2 } }, { text: "뒤에서 완벽한 데이터 수집과 PPT 템플릿을 만드는 백엔드 기획자", score: { I: 2 } }] },
    { q: "회사가 경영난으로 인원 감축을 해야 한다. 방출 기준은 어떻게 되어야 할까?", a: [{ text: "철저하게 최근 3개년 하위 고과자 및 생산성 저하 지표 기준으로 자른다.", score: { T: 1 } }, { text: "가정 형편이나 부양가족 유무 등 개인적 안타까운 상황을 참작해야 한다.", score: { F: 1 } }] },
    { q: "지하철을 탔는데 내 앞에 앉은 사람이 갑자기 소리 내어 운다면?", a: [{ text: "무슨 슬픈 일이 있는지 마음이 쓰이고 나까지 우울해진다.", score: { F: 1 } }, { text: "이상한 사람인가 싶어 슬쩍 자리를 옮기거나 이어폰 볼륨을 높인다.", score: { T: 1 } }] },
    { q: "평소 자주 가던 단골 음식점의 맛이 미묘하게 변했다면 당신은?", a: [{ text: "주방장이나 레시피, 혹은 재료 원산지가 바뀌었는지 파고든다.", score: { N: 1, T: 1 } }, { text: "오늘만 컨디션이 안 좋은가 보다 하고 그냥 먹는다.", score: { S: 1, F: 1 } }] },
    { q: "처음 보는 모임에 참석했을 때 당신의 행동 양식은?", a: [{ text: "먼저 적극적으로 말을 걸며 어색한 분위기를 깨려고 노력한다.", score: { E: 2 } }, { text: "누군가 나에게 말을 걸어줄 때까지 음료를 마시며 대기한다.", score: { I: 2 } }] },
    { q: "갑자기 하늘에서 UFO가 떨어진다면 당신의 즉각적인 반응은?", a: [{ text: "외계인의 존재와 지구 침공 시나리오, 우주 전쟁을 상상한다.", score: { N: 2 } }, { text: "일단 112나 119에 신고해야 하는 거 아닌가 생각한다.", score: { S: 2 } }] },
    { q: "주변 친구가 나에게 주로 상담을 요청하는 분야는?", a: [{ text: "감정적 위로나 내 편을 들어줄 따뜻한 공감이 필요할 때", score: { F: 1 } }, { text: "인생의 중요한 결정이나 문제에 대한 이성적인 해결책이 필요할 때", score: { T: 1 } }] },
    { q: "업무 메일을 쓸 때 당신이 가장 신경 쓰는 부분은?", a: [{ text: "상대방이 읽었을 때 기분 나쁘지 않도록 정중하고 부드러운 어조 선택", score: { F: 1 } }, { text: "핵심 요구사항과 데드라인이 명확히 드러나는 깔끔한 개조식 문체", score: { T: 1 } }] },
    { q: "약속이 취소되어 갑자기 주말 하루가 통째로 비었다면?", a: [{ text: "아싸 자유다! 침대와 물아일체가 되어 완벽한 고독을 즐긴다.", score: { I: 2 } }, { text: "심심해서 못 참는다. 당장 다른 친구에게 연락해 번개 약속을 잡는다.", score: { E: 2 } }] },
    { q: "유튜브 알고리즘에 뜬 영상 중 더 클릭하고 싶은 썸네일은?", a: [{ text: "인류문명의 미스터리와 50년 후 미래 과학 예측", score: { N: 2 } }, { text: "자산 10억 모은 직장인의 현실적인 자취방 가계부 언박싱", score: { S: 2 } }] },
    { q: "새로운 취미 생활을 시작할 때 당신의 스타일은?", a: [{ text: "일단 장비부터 최고급으로 완벽하게 세팅해 두고 시작한다.", score: { S: 1 } }, { text: "맛보기로 가볍게 경험해 보면서 재미가 붙으면 조금씩 확장한다.", score: { N: 1 } }] },
    { q: "단톡방에 동료가 아프다는 카톡을 남겼다. 당신의 답변은?", a: [{ text: "헐ㅠㅠ 어디가 어떻게 아픈 거야? 약은 먹었어? 많이 아프겠다...", score: { F: 2 } }, { text: "고생이네. 무리하지 말고 병원 다녀와서 연차 써.", score: { T: 2 } }] }
];

// =========================================================================
// 2. 동물 페르소나 융합 + 취업 컨설턴트급 타겟 회사 및 요구 역량 스펙
// =========================================================================
const results = {
    "ENT": {
        title: "불도저 호랑이 유형",
        desc: "거대한 판을 짜고 목표를 향해 돌진하는 포식자 리더입니다. 규율 속에서 글로벌 수주와 대형 비즈니스를 이끄는 첨단 제조 및 방산 대기업에 최적화되어 있습니다.",
        company: {
            name: "한화에어로스페이스 / LIG넥스원 (K-방산 산업군)",
            info: "글로벌 방산 수주 잭팟을 터뜨리며 다국적 방위산업 및 항공우주 독점 기술을 선도하는 국가대표 방산 대기업입니다.",
            talent: "강인한 추진력, 리스크 돌파 능력, 글로벌 비즈니스 협상력",
            specs: "방산 분야 특성상 인성 및 신원 검증이 철저하며, 해외 수주를 위한 비즈니스 영어 회화(OPIc AL 이상 / 토익스피킹 AM 이상) 필수.",
            license: "품질경영기사, CPIM(국제공인생산재고관리사), PMP(프로젝트관리전문가), 공학 계열 전공 자격증"
        }
    },
    "INT": {
        title: "고독한 올빼미 유형",
        desc: "나노 단위의 오차도 허용하지 않는 철두철미한 분석가입니다. 대한민국 수출의 기둥이자 초정밀 기술 집약체인 반도체 핵심 기업에서 최고의 역량을 발휘합니다.",
        company: {
            name: "SK하이닉스 / 삼성전자 DS부문 (반도체/하드웨어형)",
            info: "AI 시대를 지배하는 고대역폭메모리(HBM) 및 시스템 반도체 공정을 설계·제조하는 글로벌 일류 테크 대기업입니다.",
            talent: "논리적 팩트 검증력, 통계적 불량 디버깅 능력, 고도의 집중력 및 끈기",
            specs: "반도체 8대 공정에 대한 깊은 이해도와 관련 교육 수료 이력 필수. 직무 적성 검사(SKCT / GSAT)의 수리·논리 영역 고득점 요망.",
            license: "반도체공학/전자회로 관련 전공 학점(3.8 이상 권장), ADsP(데이터분석준전문가), 화공/전기기사"
        }
    },
    "EST": {
        title: "치밀한 일개미 유형",
        desc: "현실적인 데이터를 기반으로 거대한 글로벌 공급망을 통제하는 오퍼레이션 엘리트입니다. 현재 전 세계가 확보 경쟁을 벌이는 배터리·이차전지 양산 라인에 최적입니다.",
        company: {
            name: "LG에너지솔루션 / 삼성SDI (이차전지/에너지 산업군)",
            info: "글로벌 완성차 브랜드들과 연합전선을 구축하여 차세대 전기차 배터리 공급망을 지배하는 에너지 테크 대기업입니다.",
            talent: "글로벌 공장 수율 관리 역량, 철저한 SOP(표준절차) 준수 역량, 현장 소통력",
            specs: "배터리 셀/모듈 공정 실무 교육 이력 우대. 글로벌 사업장(미국/유럽) 파견 동의 및 주재원 근무가 가능한 어학 스펙(토익 850점 이상 등) 우대.",
            license: "위험물산업기사, 화공기사, 일반기계기사, 식스시그마(Six Sigma GB/BB)"
        }
    },
    "INF": {
        title: "스마트한 돌고래 유형",
        desc: "유저의 심리를 꿰뚫어 보고 세상에 없던 편리함을 창조하는 플랫폼 설계자입니다. 자율성이 보장되고 트렌드 변화가 극도로 빠른 탑티어 IT 테크 기업 체질입니다.",
        company: {
            name: "네이버(NAVER) / 카카오 (IT/플랫폼 서비스 산업군)",
            info: "AI, 검색, 클라우드, 엔터테인먼트 등 전방위 라이프스타일 플랫폼을 구축하고 서비스를 운영하는 대한민국 대표 테크 기업입니다.",
            talent: "유저 중심의 기획력, 데이터 기반 UX 개선 능력, 유연한 애자일(Agile) 소통 능력",
            specs: "자격증보다 실제 포트폴리오(기획서, 토이 프로젝트, 피그마 설계본)가 합격을 결정함. IT 인턴십 및 공모전 수상 경력 매우 우대.",
            license: "컴퓨터활용능력 따위는 무의미함. SQLD(SQL개발자), GA4(구글애널리틱스 인증), 서비스 기획 포트폴리오 필수"
        }
    },
    "ISF": {
        title: "듬직한 리트리버 유형",
        desc: "국가 안전과 공공의 이익을 최우선으로 하며 리스크를 제로화하는 안정감의 끝판왕입니다. 고용 안정이 완벽히 보장되고 매뉴얼대로 움직이는 공기업에 뼈를 묻을 상입니다.",
        company: {
            name: "한국전력공사(한전) / 인천국제공항공사 (에너지/인프라 공기업)",
            info: "국가 기간산업 및 국가 핵심 인프라망을 독점 관리하며 안정적인 공공 서비스를 제공하는 산자부/국토부 산하 최대 공공기관입니다.",
            talent: "공공 윤리의식, 규정 준수 능력, 갈등 조율 및 민원 대응력",
            specs: "공공기관 블라인드 채용 스펙 완벽 준수 필요. NCS(국가직무능력표준) 필기시험 통과가 당락의 90%를 결정함.",
            license: "한국사능력검정시험 1급, KBS한국어능력시험(가점용), 전기기사/토목기사 등 직렬별 필수 전공 기사 자격증 필수"
        }
    },
    "default": {
        title: "단단한 바위 코끼리 유형",
        desc: "조직 내외의 리스크를 완벽히 통제하고 묵묵하게 시스템의 중추를 지탱하는 든든한 해결사입니다. 전 산업군의 핵심 브레인인 경영기획실에 적합합니다.",
        company: {
            name: "삼성전자 / 현대자동차 경영지원실 (탑티어 대기업 스태프 직군)",
            info: "글로벌 초일류 대기업의 재무, 인사(HR), 기획, 법무를 총괄하며 전사 사업부를 뒤에서 서포트하고 지탱하는 핵심 본부입니다.",
            talent: "전사 리스크 관리 능력, 예산 및 손익 분석력, 최고 수준의 비즈니스 매너",
            specs: "경영학적 지식 및 거시경제 지표 분석 능력 요망. 대기업 인적성(GSAT/HMAT) 통과 및 다차원 압박 면접 대응 역량 필요.",
            license: "재경관리사, 전산세무 1급, 공인노무사(HR 직무 우대), CFA/AICPA(재무 직무 우대)"
        }
    }
};

// =========================================================================
// 3. 상태 관리 및 30개 중 무작위 7개 추출 핵심 알고리즘
// =========================================================================
let questions = []; 
let currentIdx = 0;
let scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0 };

function startTest() {
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    questions = shuffled.slice(0, 7); 

    currentIdx = 0;
    scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0 };

    switchPage('start-page', 'question-page');
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= questions.length) {
        processResults();
        return;
    }

    const progress = (currentIdx / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    const currentQ = questions[currentIdx];
    document.getElementById('question-text').innerText = `Q${currentIdx + 1}. ${currentQ.q}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; 

    currentQ.a.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerText = option.text;
        btn.onclick = () => handleSelect(option.score);
        optionsContainer.appendChild(btn);
    });
}

function handleSelect(score) {
    for (let key in score) {
        scores[key] = (scores[key] || 0) + score[key];
    }
    currentIdx++;
    showQuestion();
}

function processResults() {
    switchPage('question-page', 'loading-page');

    let resultKey = "";
    resultKey += (scores.E >= scores.I) ? "E" : "I";
    resultKey += (scores.N >= scores.S) ? "N" : "S";
    resultKey += (scores.T >= scores.F) ? "T" : "F";

    const finalResult = results[resultKey] || results["default"];

    setTimeout(() => {
        document.getElementById('result-type').innerText = finalResult.title;
        document.getElementById('result-desc').innerText = finalResult.desc;

        const c = finalResult.company;
        
        document.getElementById('result-jobs').innerHTML = `
            <div style="font-weight: 900; font-size: 1.3rem; color: #4f46e5; margin-bottom: 12px; border-left: 5px solid #4f46e5; padding-left: 10px;">🏢 추천 산업 및 Target 기업: ${c.name}</div>
            <p style="font-size: 0.95rem; color: #1e293b; margin-bottom: 12px; line-height: 1.6;"><strong>• 비즈니스 모델 요약:</strong> ${c.info}</p>
            <p style="font-size: 0.95rem; color: #1e293b; margin-bottom: 12px; line-height: 1.6;"><strong>• 기업 요구 핵심 역량:</strong> <span style="color: #4f46e5; font-weight:700;">${c.talent}</span></p>
            <p style="font-size: 0.95rem; color: #334155; line-height: 1.6; background-color: #f1f5f9; padding: 12px; border-radius: 12px; border: 1px dashed #cbd5e1;"><strong>💡 취업 컨설턴트 꿀팁:</strong> ${c.specs}</p>
        `;
        
        document.getElementById('result-culture').innerHTML = `
            <div style="font-weight: 700; font-size: 1.05rem; color: #0f172a; margin-bottom: 10px;">🛠️ 추천 직무 자격증 및 스펙 로드맵</div>
            <p style="font-size: 0.95rem; color: #0d9488; font-weight: 700; line-height: 1.6; background-color: #f0fdf4; padding: 10px; border-radius: 10px; border: 1px solid #bbf7d0;">✔ 권장 스펙: ${c.license}</p>
        `;

        switchPage('loading-page', 'result-page');
    }, 1800);
}

function restartTest() {
    switchPage('result-page', 'start-page');
}

function switchPage(fromId, toId) {
    const fromPage = document.getElementById(fromId);
    const toPage = document.getElementById(toId);
    
    fromPage.classList.remove('active');
    setTimeout(() => {
        fromPage.style.display = 'none';
        toPage.style.display = 'flex';
        setTimeout(() => {
            toPage.classList.add('active');
        }, 50);
    }, 300);
}
