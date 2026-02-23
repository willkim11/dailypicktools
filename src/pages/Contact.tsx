import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <SEO 
        title="Contact" 
        description="Daily Pick Tools에 문의하거나 추가하고 싶은 유틸리티 도구를 제안하세요." 
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">문의하기 (Contact Us)</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        버그 제보나 필요한 추가 도구가 있으시다면 아래 폼을 통해 편하게 알려주세요.<br/>
        보내주신 의견은 서비스 고도화에 적극 참고하겠습니다! (영업일 기준 1~2일 내 회신)
      </p>
      
      <div className="mb-8 p-6 bg-blue-50 dark:bg-gray-700/50 rounded-lg">
        <h3 className="font-medium text-gray-900 dark:text-white mb-1">직접 이메일 문의</h3>
        <p className="text-gray-700 dark:text-gray-300">
          <a href="mailto:contact@dailypicktools.com" className="text-blue-600 dark:text-blue-400 hover:underline">
            contact@dailypicktools.com
          </a>
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              이름 (혹은 닉네임)
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="홍길동"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              회신받을 이메일 주소
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="example@gmail.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            문의 유형
          </label>
          <select
            id="type"
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          >
            <option value="bug">버그 제보</option>
            <option value="feature">도구 추가 요청</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            문의 내용
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-y"
            placeholder="상세한 내용을 남겨주세요."
          />
        </div>

        <button
          type="button"
          onClick={() => alert("실제 전송은 데모 환경에서 비활성화되어 있습니다. contact@dailypicktools.com 으로 직접 보내주세요.")}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          문의 보내기
        </button>
      </form>

      <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          &larr; 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
