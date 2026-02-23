export interface BlogPostType {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: number;
  content: string;
  toolLink?: string;
  toolName?: string;
}

export const blogPosts: BlogPostType[] = [
  {
    slug: 'web-encoding-complete-guide',
    title: '개발자라면 알아야 할 웹 인코딩 완벽 가이드 — URL, Base64, HTML 인코딩 총정리',
    date: '2025-01-10',
    category: '개발 도구',
    excerpt: '인코딩이란 데이터를 다른 형식으로 표현하는 과정을 뜻합니다. URL, Base64, HTML 등 실무에서 마주치는 다양한 인코딩 방식의 목적과 차이점을 완벽하게 정리했습니다.',
    readTime: 5,
    toolLink: '/tools/text/url',
    toolName: 'URL 인코더',
    content: `
      <h2>1. 인코딩(Encoding)이란 무엇인가?</h2>
      <p>인코딩은 정보를 특정한 형태나 형식으로 변환하는 처리 방식입니다. 컴퓨터 과학과 웹 기술에서 인코딩은 데이터를 안전하게 전송하거나 특정한 시스템 호환성을 맞추기 위해 필수적인 과정입니다. 반대로 변환된 데이터를 원래의 형태로 되돌리는 과정을 디코딩(Decoding)이라고 부릅니다.</p>

      <h2>2. URL 인코딩 (퍼센트 인코딩)</h2>
      <p>URL 인터넷 주소에는 알파벳, 숫자, 일부 기호만 안전하게 사용할 수 있도록 표준(RFC 3986)이 정해져 있습니다. 이로 인해 한글, 띄어쓰기, 슬래시 등의 특수문자가 포함된 주소나 파라미터를 그대로 전송할 경우 브라우저나 서버가 잘못 해석할 위험이 있습니다.</p>
      <ul>
        <li><strong>동작 원리:</strong> 허용되지 않은 문자를 "%" 기호와 함께 두 자리의 16진수 값으로 변환합니다. 예로 띄어쓰기(공백)는 <code>%20</code>이나 <code>+</code> 기호로 인코딩됩니다.</li>
        <li><strong>실무 사용 예:</strong> 검색어 쿼리 파라미터 전달, API 통신 시 데이터를 안전하게 전송하기 위한 필수적인 안전망 역할을 합니다.</li>
      </ul>

      <h2>3. Base64 인코딩</h2>
      <p>Base64는 이미지나 실행 파일과 같은 컴퓨터 이진(Binary) 데이터를 ASCII 코드로 이루어진 64개의 문자열 텍스트 형태로 변환하는 인코딩 방식입니다.</p>
      <ul>
        <li><strong>목적:</strong> 텍스트만을 안전하게 전송할 수 있는 이메일, HTTP 헤더 환경에서 이진 데이터 전송 시 데이터가 깨지는 것을 막기 위해서입니다.</li>
        <li><strong>활용 사례:</strong> 웹에서 Data URL 형식(<code>data:image/png;base64,...</code>)으로 작은 아이콘 이미지를 CSS와 HTML에 내장하거나, 최신 웹 보안 기술인 JWT(JSON Web Token) 페이로드에 주로 활용됩니다.</li>
      </ul>

      <h2>4. HTML 엔티티 인코딩</h2>
      <p>웹 페이지 코드를 구성하는 <code>&lt;</code> 과 <code>&gt;</code> 기호는 브라우저가 HTML 태그로 해석합니다. 만약 사용자가 게시판에서 이 기호를 그대로 입력하게 둘 경우 레이아웃이 깨지거나 악의적인 스크립트가 실행되는 XSS(크로스 사이트 스크립팅) 공격에 노출될 수 있습니다.</p>
      <p>HTML 인코딩은 이런 보안 위험을 차단하고 특수문자를 단순한 문자열 자체로 화면에 렌더링하기 위해 <code>&lt;</code>를 <code>&amp;lt;</code>로 변환하는 방식을 취합니다.</p>

      <h2>5. 결론: 각 인코딩 방식 비교표</h2>
      <table border="1" style="width:100%; text-align:left; border-collapse: collapse;">
        <tr><th>유형</th><th>주요 목적</th><th>형태 예시</th></tr>
        <tr><td>URL</td><td>웹 요청/파라미터 전송</td><td>%20, %EC%95%88</td></tr>
        <tr><td>Base64</td><td>이진 데이터를 텍스트 전송</td><td>SGVsbG8=</td></tr>
        <tr><td>HTML</td><td>브라우저 XSS 보안 및 화면 렌더링</td><td>&amp;lt;script&amp;gt;</td></tr>
      </table>
    `
  },
  {
    slug: 'json-vs-xml-comparison',
    title: 'JSON vs XML — 어떤 데이터 형식을 선택해야 할까?',
    date: '2025-01-18',
    category: '개발 도구',
    excerpt: '웹 데이터를 주고받는 표준, JSON과 XML. 각각의 역사와 현장 도입 상황, 그리고 어떤 상황에서 어떤 기술을 선택해야 프로젝트에 유리할지 두루 비교해봅니다.',
    readTime: 6,
    toolLink: '/tools/text/json',
    toolName: 'JSON 포맷터',
    content: `
      <h2>1. XML의 탄생 배경과 전성기</h2>
      <p>인터넷의 초기 시절, 시스템 이기종 간에 구조화된 데이터를 교환하기 위해 탄생한 것이 XML(eXtensible Markup Language)이었습니다. 태그로 자유롭게 확장이 가능하고, 기계와 인간이 동시에 읽을 수 있도록 고안되어 한 시대를 풍미했습니다. SOAP(Simple Object Access Protocol) 아키텍처는 XML을 데이터 전송 프로토콜로 채택하며 엔터프라이즈 데이터 통신의 핵심이 되었습니다.</p>

      <h2>2. JSON이 등장하고 대세가 된 이유</h2>
      <p>그러나 XML은 장황한 여는 태그와 닫는 태그 때문에 파일의 용량이 부피감 있게 무거웠습니다. 모바일 시대가 열리고 빠르고 가벼운 데이터 통신이 요구되자 JSON(JavaScript Object Notation)이 차세대 주자로 나타났습니다. JSON은 자바스크립트 객체 표기법과 완벽하게 일치하면서도 간결하여, 불필요한 태그 비용(오버헤드)을 최대로 덜어내 RESTful API 통신의 전 세계적인 표준이 되었습니다.</p>

      <h2>3. 여전히 XML이 쓰이는 분야</h2>
      <p>물론 XML이 완전히 사라진 것은 아닙니다. 구조에 대한 철저한 검증(XML Schema/DTD 지원)이 필요한 전통적인 금융 분야, RSS 데이터 피드, 안드로이드 모바일 UI의 레이아웃 설정 파일, 벡터 이미지인 SVG 포맷의 근간 등에서는 XML 형식이 오늘날에도 강력하게 사용되고 있습니다.</p>

      <h2>4. 상황별 선택 기준</h2>
      <ul>
        <li><strong>JSON이 유리한 상황:</strong> 클라이언트와 서버, 특히 모바일과 SPA(Single Page Application) 환경에서의 빠르고 가벼운 API 통신이 필요할 때 압도적으로 유리합니다.</li>
        <li><strong>XML이 유리한 상황:</strong> 메타데이터 등 데이터 자체에 높은 복잡성이 요구되고, 스키마에 의한 유효성 검증과 문서형 속성이 강하게 필요한 시스템적 데이터 교환에 특화되어 있습니다.</li>
      </ul>

      <h2>5. 비교 요약표</h2>
      <table border="1" style="width:100%; text-align:left; border-collapse: collapse;">
        <tr><th>비교 항목</th><th>JSON</th><th>XML</th></tr>
        <tr><td>간결성 / 가변성</td><td>높음 (데이터 용량이 가벼움)</td><td>낮음 (용량 크고 장황함)</td></tr>
        <tr><td>표준 스키마 검증</td><td>비교적 약함 (JSON Schema 존재)</td><td>강력함 (XSD 등 기반 제공)</td></tr>
        <tr><td>가독성</td><td>사람이 직관적으로 배열, 객체 파악</td><td>태그 구조로 계층 파악</td></tr>
        <tr><td>파싱(Parsing) 방식</td><td>기본 JS와 강력한 네이티브 연동</td><td>별도의 XML 파서 구조 필요</td></tr>
      </table>
    `
  },
  {
    slug: 'regex-essential-patterns',
    title: '정규식(Regex) 30분 완성 — 개발자 필수 패턴 20가지',
    date: '2025-01-25',
    category: '개발 도구',
    excerpt: '도저히 외워지지 않는 외계어 같은 정규 표현식. 개발 생산성을 높이기 위해 실무에서 흔히 쓰이는 핵심 메타 문법과 필수 패턴들을 총정리했습니다.',
    readTime: 7,
    toolLink: '/tools/text/regex',
    toolName: '정규식 테스터',
    content: `
      <h2>1. 정규식(Regex)이 무서운 이유와 쉽게 접근하는 방법</h2>
      <p>정규 표현식은 문자열의 규칙적인 흐름이나 패턴을 찾아내는 막강한 도구입니다. 복잡한 유효성 검사를 단 한 줄의 코드로 우아하게 줄여주지만, 기호와 문자가 난무하여 소위 "외계어"처럼 느껴지는 것이 극진한 진입 장벽입니다.</p>
      <p>초보자라면 전체를 단번에 해석하려 하지 말고, 구성되는 의미론적 조각들을 블록처럼 쪼개어 부분적으로 읽어들이는 훈련이 중요합니다.</p>

      <h2>2. 반드시 숙지해야 할 메타문자 기초</h2>
      <ul>
        <li><code>^</code> 문장의 시작을 의미 / <code>$</code> 문장의 끝을 의미</li>
        <li><code>.</code> 줄바꿈을 제외한 거의 모든 임의의 문자 하나</li>
        <li><code>*</code> 0회 이상의 반복 / <code>+</code> 1회 이상의 반복 / <code>?</code> 0회 또는 1회의 등장</li>
        <li><code>[abc]</code> a 또는 b 또는 c 캐릭터 중 하나와 매칭 (문자 형태 셋)</li>
        <li><code>(abc)</code> 패턴의 그룹핑 및 향후 캡처 저장용</li>
        <li><code>\\d</code> 0~9의 숫자 / <code>\\w</code> 알파벳, 숫자, 언더바 / <code>\\s</code> 공백 및 탭 등</li>
      </ul>

      <h2>3. 실무에서 바로 써먹는 필수 20가지 검증 패턴 예제</h2>
      <p>다음은 회원가입 폼이나 데이터 전처리 환경에서 즉시 사용할 수 있는 패턴들 중 대표적인 일부입니다:</p>
      <ul>
         <li><strong>이메일 형식 검사:</strong> <code>^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$</code></li>
         <li><strong>대한민국 010 전화번호:</strong> <code>^01[016-9]-\d{3,4}-\d{4}$</code></li>
         <li><strong>웹사이트 URL 검증:</strong> <code>^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$</code></li>
         <li><strong>영문자와 숫자만 결합 허용 유저명:</strong> <code>^[a-zA-Z0-9]{4,16}$</code></li>
         <li><strong>강력한 비밀번호 조건 (영대소, 특수문자, 숫자 포함 8자 이상):</strong> <code>^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$</code></li>
      </ul>

      <h2>4. 정규식을 읽고 사고하는 방법</h2>
      <p>정규식을 이해할 땐 항상 '왼쪽에서 오른쪽으로' 흘러가는 오토마타 엔진의 흐름을 생각하세요. 플래그 옵션인 <code>g (전역 검색)</code>, <code>i (대소문자 무시)</code>, <code>m (다중 행)</code> 등 적절한 탐색 환경을 설정하면 강력한 텍스트 파싱을 손쉽게 수행할 수 있습니다. Regex Tester 도구를 이용해 수시로 테스트하여 패턴에 대한 정확한 동작 여부를 짚어보시기를 권유합니다.</p>
    `
  },
  {
    slug: 'web-image-format-guide',
    title: '웹 이미지 최적화 완벽 가이드 — JPG, PNG, WebP, AVIF 언제 어떤 걸 써야 하나',
    date: '2025-02-01',
    category: '웹 기초',
    excerpt: '웹 성능 개선을 위해 이미지 최적화는 1순위 과제입니다. 다양한 이미지 확장자의 특징과 압축 원리를 살펴보고, 상황에 맞는 올바른 포맷 선택 가이드를 제공합니다.',
    readTime: 6,
    toolLink: '/tools/image/converter',
    toolName: '이미지 변환기',
    content: `
      <h2>1. 이미지 최적화가 웹 성능에 미치는 영향</h2>
      <p>오늘날 모던 웹 페이지를 불러올 때 다운로드해야 할 전체 페이로드 용량의 압도적 비중을 이미지가 차지하고 있습니다. 용량이 너무 큰 브라우저 랜더링 단계(Core Web Vitals의 LCP 지표 등) 속도를 치명적으로 발목 잡아 트래픽 이탈과 SEO 순위가 하락하는 원인이 됩니다. 개발자는 압축의 효율성을 적절하게 유지하며 포맷을 결정해야 합니다.</p>

      <h2>2. 주요 포맷별 특징과 용도</h2>
      <ul>
        <li><strong>JPG (JPEG):</strong> 역사가 깊은 형식입니다. 복잡한 풍경이나 색상이 화려한 실제 사진들을 '손실 압축'하여 아주 효율적으로 용량을 절감합니다. 하지만 글리치나 선명한 경계선은 번져보이는 치명적인 에지 아티팩트가 빈번합니다.</li>
        <li><strong>PNG:</strong> '무손실 압축' 알고리즘을 사용합니다. 품질과 선의 경계를 전혀 저하하지 않고 투명 배경(Alpha 채널)을 유지할 수 있기 때문에 UI의 아이콘이나 스크린샷, 타이포그래피, 일러스트에 아주 강력합니다. 그러나 사진을 담으면 용량이 터무니없이 비대해집니다.</li>
      </ul>

      <h2>3. 차세대 압축 기술: WebP와 AVIF 등장</h2>
      <p>구글이 개발한 <strong>WebP</strong> 패러다임이 등장하면서 상황이 달라졌습니다. WebP는 JPG의 손실, PNG의 무손실/투명도, 그리고 GIF의 애니메이션을 단일 포맷에서 제공하면서도 기존 JPG 대비 25~30% 넘게 용량을 절감합니다. 현재 모든 메인 모던 브라우저가 정식 지원하고 있는 차세대 표준입니다.</p>
      <p>그 뒤를 잇는 <strong>AVIF</strong>는 비디오 압축 기술로 탄생하여 WebP보다 한층 더 극한의 효율적인 압축률을 뽐내지만 아직 완전히 대중적으로 통합 포맷으로 자리 잡지는 못한 이머징(Emerging) 확장자 단계에 있습니다.</p>

      <h2>4. 상황별 추천과 최적화 활용 가이드</h2>
      <p>따라서 웬만한 사진이나 이미지 리소스들은 가급적 WebP를 채택하는 것이 가장 최적의 밸런스입니다. 단일한 컬러와 아이콘의 선명성이 아주 강할 경우에만 PNG로 유지하며, 백터 형태는 SVG를 이용해 해상도 저하 현상을 원천 방어하세요. Daily Pick Tools의 이미지 변환기를 통해 일상적인 이미지 포맷 체질을 최적의 형식으로 가볍게 개선할 수 있습니다.</p>
    `
  },
  {
    slug: 'color-palette-design-guide',
    title: '색상 이론을 몰라도 예쁜 UI를 만드는 법 — 팔레트 설계 실전 가이드',
    date: '2025-02-08',
    category: '디자인',
    excerpt: '매번 컬러를 고르느라 고민이라면? 60-30-10 법칙부터 보색, 유사색 조합까지 기본 원칙만으로 감각적이고 세련된 UI 팔레트를 설계하는 법을 공개합니다.',
    readTime: 5,
    toolLink: '/tools/image/palette',
    toolName: '팔레트 생성기',
    content: `
      <h2>1. 색상이 UI 경험에서 중요한 이유</h2>
      <p>사용자가 특정 소프트웨어나 웹 어플리케이션을 마주할 때 느끼는 감정적이고 즉각적인 감각인 '첫인상'의 90% 이상은 오직 컬러 조합(Color Pallete)에서 온다고 합니다. 브랜드의 신뢰도와 아이덴티티, 정보의 위계(Hierarchy), 그리고 조작 가능성 등을 즉각적으로 암시할 수 있는 도구가 곧 컬러 시스템입니다.</p>

      <h2>2. 모르면 안 되는 필수 색상 조합 이론</h2>
      <p>복잡한 미학 이론을 몰라도 기본적인 수학적 규칙에 가까운 '색상환(Color Wheel)' 공식을 활용하면 매력적인 선택지를 자동적으로 구축할 수 있습니다.</p>
      <ul>
        <li><strong>보색(Complementary):</strong> 색상환에서 180도 완전 반대편에 있는 색상(예: 파란색과 주황색)입니다. CTA(콜투액션) 버튼이나 경고 등 강한 콘트라스트(대비)로 사용자의 시선을 집중시킬 때 압도적입니다.</li>
        <li><strong>유사색(Analogous):</strong> 색상환에서 바로 양 옆에 나란히 자리한 색상들의 조합입니다. 시각적 긴장감이 전혀 없고 무척 자연스럽고 차분하고 우아한 통일된 느낌을 강조하는 디자인에 무척 적합합니다.</li>
      </ul>

      <h2>3. 인테리어의 명제, 황금 비율 "60-30-10 규칙"</h2>
      <p>팔레트의 컬러 비율을 어떻게 나눌지 고민할 땐 60-30-10 황금 규칙을 적용하세요.</p>
      <ul>
         <li><strong>60% 메인/배경 컬러:</strong> UI의 전체 기조, 뼈대, 바탕을 채우는 중성적인(Neutral) 컬러.</li>
         <li><strong>30% 서브 컬러:</strong> 브랜드만의 개성을 나타나며 사용자의 관심을 자연스럽게 유도하는 중간 컬러.</li>
         <li><strong>10% 강조 컬러 (Accent):</strong> 액션, 구매창, 핵심 버튼을 위한 초강력하고 눈에 띄는 활성 컬러.</li>
      </ul>

      <h2>4. 다크모드 팔레트 설계 시의 원칙과 주의점</h2>
      <p>단순히 배경을 검정색(#000000)으로 처리하고, 전경 텍스트와 보색을 역전시키는 건 매우 성급하고 눈부심(피로)을 유발합니다. 빛 반사가 적은 부드럽고 짙은 회색계열 기조 위에 채도(Saturation)를 적절히 살짝 낮춘 파스텔 혹은 톤다운 엑센트 색을 재배열하여 눈의 자극을 억누르는 조심스러운 설계가 필요합니다.</p>
    `
  },
  {
    slug: 'markdown-master-guide',
    title: '마크다운 마스터 가이드 — GitHub, Notion, 기술 블로그까지 한 번에',
    date: '2025-02-15',
    category: '팁&트릭',
    excerpt: '개발자와 실무 기획자들의 필수 생산성 언어인 마크다운. 제목, 굵게, 링크 처리 등 기본부터 표 생성, 체크리스트, 코드 하이라이트 등 고급 응용까지 완벽 가이드.',
    readTime: 6,
    toolLink: '/tools/text/markdown',
    toolName: '마크다운 미리보기',
    content: `
      <h2>1. 마크다운을 배워야 하는 이유</h2>
      <p>마크다운(Markdown)은 2004년에 존 그루버에 의해 구조 제안된 가벼운 마크업 언어입니다. 마우스나 별도의 에디터 도구 모음(WYSIWYG)이 없어도 오로지 키보드와 기호 텍스트 결합만으로 HTML 구조 렌더링에 준하는 수려한 문서를 순식간에 양산할 수 있는 강력한 무기입니다.</p>
      <p>오늘날 이는 GitHub 저장소의 README 설명서부터 Notion 워크스페이스, Discord의 채팅방 포맷에 이르기까지 개발자 및 IT 종사자의 커뮤니케이션 표준 규격으로 완벽하게 스며들었습니다.</p>

      <h2>2. 핵심 마크다운 기본 문법 치트시트</h2>
      <p>키보드의 특수기호를 사용하여 놀라울 만큼 쉬운 문서를 직조합니다.</p>
      <ul>
        <li><strong>헤딩(제목):</strong> <code># 제일 큰 제목</code>, <code>## 중간 제목</code> ... (총 6단계)</li>
        <li><strong>강조 및 이텔릭체:</strong> <code>**강조(Bold)**</code>, <code>*기울기(Italic)*</code> 혹은 <code>_이탤릭_</code></li>
        <li><strong>목록:</strong> 순서가 없는 목록은 <code>-</code> 또는 <code>*</code> 로 리스팅. 순서가 있다면 <code>1.</code> <code>2.</code> 와 같이 부여합니다.</li>
        <li><strong>링크 및 이미지 처리:</strong> <code>[보여질 링크 이름](http://url)</code>. 이미지의 경우엔 앞에 느낌표를 붙여 직관적으로 처리합니다. <code>![대체이미지텍스트](http://이미지주소)</code></li>
        <li><strong>인용문:</strong> <code>&gt; 텍스트 내용</code></li>
      </ul>

      <h2>3. 진화한 GitHub Flavored Markdown (GFM)과 팁</h2>
      <p>세월이 지나며 기본 마크다운 문법뿐만 아니라 IT 생태계의 다양한 요구사항에 의해 표 생성, 할 일 목록, 취소선 등 풍부한 확장 문법인 GFM이 보급되었습니다.</p>
      <p>특히 코드 블록의 경우, 백틱 3개(<code>\`\`\`</code>)로 섹션을 연 뒤 바로 뒤에 <code>js</code>, <code>python</code> 등 프로그래밍 언어의 명칭을 기재하면 강력한 신택스(문법) 색상 하이라이팅을 손쉽게 부여할 수 있어 압도적으로 유용합니다.</p>
      <p>이곳 Daily Pick Tools의 마크다운 미리보기 에디터를 사용하여 좌우 실시간 렌더링 피드백을 통해 문법을 속성으로 체득해 보세요.</p>
    `
  }
];
