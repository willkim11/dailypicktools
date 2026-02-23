import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <SEO 
        title="About" 
        description="Daily Pick Tools 소개 — 개발자와 일반 사용자를 위한 무료 웹 유틸리티 도구 모음 사이트" 
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Daily Pick Tools</h1>
      
      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
        
        <section>
          <p className="text-lg">
            Daily Pick Tools는 개발자와 일반 사용자 모두가 매일 필요로 하는 웹 유틸리티 도구를 한 곳에 모아놓은 무료 온라인 툴킷입니다. 
            다양한 작업을 수행하기 위해 여러 사이트를 전전할 필요 없이, 필요한 도구를 언제든 빠르게 사용할 수 있도록 설계되었습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">현재 제공하는 주요 도구</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">텍스트 및 코드 도구</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>텍스트 비교 (Diff Checker)</li>
                <li>글자수 세기 (Character Counter)</li>
                <li>JSON 포맷터 (JSON Formatter)</li>
                <li>XML 검증기 (XML Validator)</li>
                <li>마크다운 미리보기 (Markdown Preview)</li>
                <li>정규식 테스터 (Regex Tester)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">인코딩 및 변환 도구</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>URL 인코더 / 디코더 (URL Encoder)</li>
                <li>Base64 변환기 (Base64 Converter)</li>
                <li>이미지 변환기 (Image Converter)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">디자인 및 색상 도구</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>RGB 컬러 피커 (RGB Color Picker)</li>
                <li>팔레트 생성기 (Palette Generator)</li>
                <li>QR 코드 생성기 (QR Code Generator)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">계산 및 수학 도구</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>공학용 계산기 (Scientific Calculator)</li>
                <li>단어 변환기 (Unit Converter)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">왜 Daily Pick Tools를 사용하는가?</h2>
          <ul className="space-y-3 list-none">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">1.</span>
              <div>
                <strong className="text-gray-900 dark:text-white">완전 무료</strong> — 회원가입이나 결제 없이 사이트의 모든 기능을 즉시 사용할 수 있습니다.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">2.</span>
              <div>
                <strong className="text-gray-900 dark:text-white">빠른 접근성</strong> — 코딩을 하다가, 혹은 문서를 작성하다가 필요한 기능이 생기면 언제든 한 사이트에서 모든 것을 해결할 수 있습니다.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">3.</span>
              <div>
                <strong className="text-gray-900 dark:text-white">철저한 개인정보 보호</strong> — 이 사이트의 대부분의 도구는 사용자의 브라우저 단에서 클라이언트 사이드 처리로 구동됩니다. 사용자가 입력하는 텍스트나 데이터, 이미지는 서버로 전송되지 않으며 안전하게 보호됩니다.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">4.</span>
              <div>
                <strong className="text-gray-900 dark:text-white">지속적인 업데이트</strong> — 사용자들의 피드백을 바탕으로 새로운 온라인 도구들을 꾸준히 개발하고 추가할 예정입니다.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제작 배경 및 철학</h2>
          <div className="space-y-4">
            <p>
              Daily Pick Tools는 개발 및 일상 업무를 진행하면서 매번 다른 유틸리티 사이트를 찾아다녀야 했던 불편함과 비효율에서 시작되었습니다.
            </p>
            <p>
              단순한 글자수 세기부터 특정 형식의 인코딩, 정규식 테스트 등에 이르기까지, 현대의 디지털 작업 환경에서는 수많은 미니 도구들이 필요합니다. 그러나 그때마다 구글을 검색하고 다른 인터페이스에 적응하는 것은 집중력을 흩트리는 일입니다.
            </p>
            <p>
              우리는 통일되고 깔끔한 인터페이스에서 꼭 필요한 도구들을 빠르게 접근할 수 있다면 수많은 사람들의 작업 능률을 크게 개선할 수 있을 것이라 믿습니다. 또한 보안 문제에 민감한 사용자들을 위해, 데이터가 서버를 거치지 않게 구조를 설계하여 안전하고 쾌적하게 사용할 수 있는 무료 도구 세트를 만들고자 하였습니다.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">개발자 소개</h2>
          <p>
            이 사이트는 평소 웹 기술과 사용자 경험(UX)에 깊은 관심을 가지고 있는 인공지능(AI) 전공 개발자가 직접 기획하고 제작하였습니다.
            앞으로도 개발 과정에서 겪은 수많은 삽질(?)의 경험을 살려, 실무에서 정말로 유용하게 쓰일 수 있는 도구들을 고민하고 추가해 나갈 것입니다. 필요한 기능이 있다면 언제든 편하게 요청해 주세요!
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
