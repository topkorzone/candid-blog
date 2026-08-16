---
title: '묻지 않아도 보이는 업무 현황 — Candid를 소개합니다'
description: '단체방 대화를 읽어 "누가·무슨 일을·어디까지"를 묻지 않아도 화면에 떠올리는 업무 가시성 레이어, Candid. (수집은 로컬 추론 기반 · 베타) 지금은 대기자·파일럿으로 함께 확인해 갑니다.'
pubDate: 'Aug 16 2026'
---

### 💬 도입 — 웨지 문제 제기

팀 단체방을 쓰는 매니저라면 하루에도 몇 번씩 이 말을 합니다. "그거 어디까지 됐어?"

업무는 이미 단체방에서 시작되고 흘러갑니다. 그런데 상태는 아무도 입력하지 않습니다. 그래서 매니저는 매번 물어야만 압니다.

### 🗂 밸류 — 대화가 곧 현황

Candid는 그 대화를 읽어, 업무·담당자·상태를 스스로 추론합니다. 묻지 않아도, 입력하지 않아도 현황이 화면에 떠오릅니다(로컬 추론 기반 · 베타).

<!-- 인라인 SVG #1 · 밸류 도식 "대화가 조용히 현황으로 떠오름" · alt = 정본 문장(landing 히어로/launch §1) · 저채도 slate-teal · 발송 암시 시각 없음(화살표·날아가는 알림 없이 아래→위 잔잔한 부상) -->
<svg width="640" height="200" viewBox="0 0 640 200" role="img"
     aria-label="흩어진 단체방 대화 조각이 아래에서 조용히 위로 떠올라 업무 현황 카드로 또렷해지는 도식. 묻지 않아도, 입력하지 않아도 현황이 화면에 떠오릅니다."
     xmlns="http://www.w3.org/2000/svg" font-family="Pretendard, -apple-system, 'Segoe UI', sans-serif">
  <rect x="0" y="0" width="640" height="200" fill="#DCE8EC" rx="12"/>
  <!-- 아래: 흩어진 대화 조각(저채도, 흐릿) -->
  <g fill="#8A93A0" opacity="0.55">
    <rect x="40"  y="150" width="70" height="16" rx="8"/>
    <rect x="150" y="158" width="54" height="14" rx="7"/>
    <rect x="235" y="150" width="80" height="16" rx="8"/>
    <rect x="360" y="160" width="46" height="12" rx="6"/>
    <rect x="450" y="150" width="72" height="16" rx="8"/>
  </g>
  <!-- 위: 또렷해진 업무 현황 카드(잔잔히 부상) -->
  <g>
    <rect x="220" y="40" width="200" height="60" rx="10" fill="#FFFFFF" stroke="#2E6B7E" stroke-width="1.5"/>
    <circle cx="242" cy="62" r="5" fill="#3E7CA8"/>
    <text x="256" y="66" fill="#12303A" font-size="13">디자인 시안 · 담당 J</text>
    <text x="256" y="86" fill="#6B7680" font-size="12">status: 진행중</text>
    <text x="410" y="55" fill="#8A93A0" font-size="10" text-anchor="end">예시·데모 데이터</text>
  </g>
  <!-- 부상 표현: 화살표 아닌, 위로 옅어지는 잔잔한 점선(떠오름=surface, 쏨=push 아님) -->
  <g stroke="#2E6B7E" stroke-width="1" stroke-dasharray="2 6" opacity="0.4">
    <line x1="320" y1="150" x2="320" y2="105"/>
  </g>
</svg>

또 다른 입력 노동은 없습니다. 태스크를 등록하지 않아도, 상태를 적지 않아도 됩니다. 셋업하고 다 등록하라고 하지 않습니다 — 대화가 곧 현황이니까요.

며칠째 멈춰 있는 일은 알아채기 전에 먼저 떠올립니다 — 이 정체 감지는 통제된 환경에서 다졌고, 실 데이터로는 더 검증해 가는 중입니다.

<!-- 인라인 SVG #2 · 정체 감지 도식 · alt = 정본 문장(landing 블록3 · §5-6 단서 포함) · 정체색 muted amber #B0803A(색+아이콘●+텍스트라벨 3중) · 레드알람/번개 없음 -->
<svg width="640" height="150" viewBox="0 0 640 150" role="img"
     aria-label="시간축을 따라 이어지는 업무 카드 흐름 위에서, 며칠째 진전 없는 항목 하나가 정체로 조용히 표시되는 도식. 이 정체 감지는 통제된 환경에서 다졌고 실 데이터로는 더 검증해 가는 중입니다."
     xmlns="http://www.w3.org/2000/svg" font-family="Pretendard, -apple-system, 'Segoe UI', sans-serif">
  <rect x="0" y="0" width="640" height="150" fill="#DCE8EC" rx="12"/>
  <!-- 시간축 -->
  <line x1="40" y1="100" x2="600" y2="100" stroke="#8A93A0" stroke-width="1.5"/>
  <!-- 진행 항목들(sage/blue) -->
  <circle cx="110" cy="100" r="8" fill="#4E8A6B"/>
  <circle cx="240" cy="100" r="8" fill="#3E7CA8"/>
  <circle cx="500" cy="100" r="8" fill="#3E7CA8"/>
  <!-- 정체 항목: muted amber + 라벨(3중 병기) -->
  <circle cx="370" cy="100" r="10" fill="#B0803A"/>
  <rect x="322" y="46" width="96" height="30" rx="8" fill="#FFFFFF" stroke="#B0803A" stroke-width="1.5"/>
  <circle cx="338" cy="61" r="4" fill="#B0803A"/>
  <text x="350" y="65" fill="#7A5A28" font-size="12">정체 · Stalled</text>
  <line x1="370" y1="90" x2="370" y2="76" stroke="#B0803A" stroke-width="1" stroke-dasharray="2 4"/>
</svg>

### 🧭 정직성 섹션 — 우리가 지어내지 않는 방식

우리는 없는 일을 지어내지 않습니다. 애매하면 완료로 지르지 않고 확인 큐로 넘깁니다. 우리가 만든 채점을 그대로 믿지 않고 독립 모델로 교차 확인했습니다 — 83.3%, 자기채점 편향 ≈10점까지 함께 밝힙니다.

<!-- 인라인 SVG #3 · 정직성 도식 "독립 교차 확인" · alt = 정본 문장(launch §0-2 · §5-2) · ★83.3%와 편향 ≈10점을 동일 위계로 병기(거대 히어로 숫자 단독 금지) · 확인 큐색 #6E6A86 3중 병기 -->
<svg width="640" height="170" viewBox="0 0 640 170" role="img"
     aria-label="우리 채점을 그대로 믿지 않고 독립 모델로 교차 확인한 결과를 동일 위계로 나란히 표시. 독립 모델 status 83.3%, 자기채점 편향 약 10점. 애매하면 확인 큐로."
     xmlns="http://www.w3.org/2000/svg" font-family="Pretendard, -apple-system, 'Segoe UI', sans-serif">
  <rect x="0" y="0" width="640" height="170" fill="#DCE8EC" rx="12"/>
  <!-- 두 값 동일 위계 병기(같은 폰트크기·같은 굵기) -->
  <g text-anchor="middle">
    <rect x="60"  y="40" width="230" height="90" rx="10" fill="#FFFFFF" stroke="#2E6B7E" stroke-width="1.5"/>
    <text x="175" y="72" fill="#12303A" font-size="20" font-weight="600">83.3%</text>
    <text x="175" y="98" fill="#6B7680" font-size="12">독립 모델 · status 일치</text>

    <rect x="350" y="40" width="230" height="90" rx="10" fill="#FFFFFF" stroke="#6E6A86" stroke-width="1.5"/>
    <text x="465" y="72" fill="#12303A" font-size="20" font-weight="600">≈10점</text>
    <text x="465" y="98" fill="#6B7680" font-size="12">자기채점 편향(함께 밝힘)</text>
  </g>
  <!-- 확인 큐 배지(필러3 색 #6E6A86, 색+아이콘◇+라벨 3중) -->
  <g>
    <rect x="245" y="140" width="150" height="24" rx="12" fill="#6E6A86"/>
    <text x="320" y="157" fill="#FFFFFF" font-size="12" text-anchor="middle">◇ 애매하면 확인 큐로</text>
  </g>
</svg>

대화 데이터를 제3자 클라우드로 보내지 않는 것이 우리 원칙입니다 — 프로토타입부터 로컬 추론을 선택했습니다.

그리고 아직 만들지 않은 것도 정직하게 말씀드립니다. **실시간·이벤트 푸시 발송은 아직 만들지 않았습니다.** Candid가 하는 일은 멈춘 일·확인할 일을 화면·대시보드에 떠올리는 것까지입니다.

### 🌱 비전 — 가는 방향

우리는 회의 한 시점의 액션아이템을 넘어, 대화가 흐르는 시간 전체에 걸쳐 업무의 시작→진행→멈춤→완료를 봅니다. 이 종단 가시성이 우리가 시장에 **세우려는** 웨지입니다.

지금은 시작 단계입니다. "이미 시장이 검증했다"고 말하지 않겠습니다 — 이건 우리가 세우려는 웨지입니다. 그래서 지금 우리가 여는 것은 대기자와 파일럿입니다. 당신의 실제 대화로 함께 확인해 가고 싶습니다.

**[대기자 등록]  ·  [화면 예시 보기]  ·  [파일럿 문의]**

---
