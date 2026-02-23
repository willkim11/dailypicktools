import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <SEO 
        title="개인정보처리방침" 
        description="Daily Pick Tools의 외부 서비스 요건 준수를 위한 명시 사항 및 각종 데이터 보관 방침" 
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">개인정보처리방침 (Privacy Policy)</h1>
      
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <section>
          <p>
            <strong>최종 업데이트 날짜: 2025년 1월 1일</strong>
          </p>
          <p className="mt-2">
            본 개인정보처리방침은 Daily Pick Tools가 웹사이트 접속 시 수집하는 정보의 종류,
            그리고 어떻게 관리하고 처리하는지를 명시합니다. 이 정보들은 사용자의 서비스 품질을
            개선하고 맞춤화된 서비스 및 광고를 제공하는 목적 이외에는 사용되지 않으며, 사용자 입력
            데이터는 서버로 수집되거나 기록되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. 수집하는 정보의 종류</h2>
          <p>
            저희 서비스는 사용자가 로그인하거나 개인식별정보를 직접 입력하지 않도록 설계되었습니다. 다만 웹사이트를 열고 머무는 과정에서 아래와 같은 기본적인 접속 관련 쿠키들이 자동으로 수집될 수 있습니다.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Google Analytics 쿠키:</strong> 사이트 방문자들의 행동 양상, 페이지에 머문 시간, 방문한 링크, 이용한 도구 등의 비식별 정보를 확인하여 더 나은 사용자 경험을 제공하고자 수집됩니다.</li>
            <li><strong>Google AdSense 쿠키:</strong> 구글이 사용자의 관심사에 맞는 광고를 노출하기 위해 수집하는 브라우저 식별 기반의 쿠키입니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. 도구 입력 데이터 처리 원칙 (서버 미저장)</h2>
          <p>
            Daily Pick Tools에서 구동되는 모든 유틸리티 도구들(텍스트 비교, 글자수 세기, 인코딩, 포맷 변환, 이미지 변환 등)에 입력되는 값과 파일들은 어디에도 기록되지 않습니다. 
            모든 처리는 전적으로 <strong>사용자의 웹 브라우저 안에서만 처리(Client-side processing)</strong> 되므로 안심하고 사용하셔도 좋습니다. 어떠한 민감한 텍스트나 파일, 이미지도 이 사이트의 서버로 은밀하게 전송, 복사 혹은 보관되지 않음을 확실히 보장합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. 정보의 사용 목적 및 제3자 공유</h2>
          <p>
            이 사이트를 방문하며 발생한 익명의 분석 데이터 및 쿠키 정보는 다음과 같은 명시적 목적을 위해서만 활용 및 공유됩니다:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>서비스 고도화 및 품질 개선 (Google Analytics 공유):</strong> 에러 페이지가 없는지, 방문자들이 유용하게 활용하는 도구의 빈도를 파악하기 위함입니다.</li>
            <li><strong>광고 제공 (Google AdSense에 공유):</strong> 수익을 창출하여 계속 무료 서비스를 열어두고 운영하기 위함입니다. 구글 파트너는 수집된 쿠키를 활용하여 맞춤형 광고를 제공할 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. 쿠키 비활성화 및 거부권</h2>
          <p>
            자신의 브라우저 활동 내역이 추적되는 것을 원하지 않으시면, 사용하고 계신 주요 브라우저(Chrome, Safari, Firefox 등)의 설정 항목에서 쿠키를 비활성화하실 수 있습니다. 쿠키가 거부되더라도 Daily Pick Tools가 제공하는 모든 텍스트 기반 및 유틸리티 도구들은 동일하게 동작하지만, 구글의 맞춤형 광고의 정확도가 떨어질 수는 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. 문의처</h2>
          <p>
            서비스와 프라이버시, 정보 보안 정책에 관해 추가 질문이 있으신 경우 다음 이메일로 연락 바랍니다.
            <br />
            이메일: <a href="mailto:contact@dailypicktools.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@dailypicktools.com</a>
          </p>
        </section>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            &larr; 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
