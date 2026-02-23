import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';

export default function CharCounterTool() {
  const [text, setText] = useState('');
  const { t } = useTranslation();

  const stats = useMemo(() => {
    return {
      chars: text.length,
      charsNoSpace: text.replace(/\s/g, '').length,
      words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
      lines: text.length === 0 ? 0 : text.split(/\n/).length,
      paragraphs: text.trim() === '' ? 0 : text.split(/\n\n+/).length,
    };
  }, [text]);

  return (
    <div className="space-y-6">
      <SEO 
        title={t('tools.char-counter.name')}
        description={t('tools.char-counter.desc')}
        keywords={['word counter', 'character counter', '글자수 세기', '단어수 계산']}
        url="/tools/text/counter"
      />
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {t('tools.char-counter.name', { defaultValue: 'Word & Character Counter' })}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
            { label: 'Characters', value: stats.chars },
            { label: 'Words', value: stats.words },
            { label: 'Lines', value: stats.lines },
            { label: 'No Spaces', value: stats.charsNoSpace },
            { label: 'Paragraphs', value: stats.paragraphs },
        ].map((stat) => (
            <div key={stat.label} className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-80 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-base resize-y"
        placeholder="Type or paste your text here to count..."
      />
      
      <div className="flex justify-end gap-2">
        <button 
            onClick={() => setText('')}
            className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
        >
            Clear Text
        </button>
        <button 
            onClick={() => navigator.clipboard.writeText(text)}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
            Copy Text
        </button>
      </div>

      {/* SEO & Information Section */}
      <section className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-10 text-gray-700 dark:text-gray-300">
        <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Word Counter(글자수 계산기)란 무엇이며, 왜 중요한가요?</h2>
            <p className="leading-relaxed text-lg text-gray-600 dark:text-gray-400">
                Word Counter는 텍스트 내의 정확한 <strong>글자 수, 단어 수, 줄 수 및 공백 제외 글자 수</strong>를 실시간으로 세어주는 필수 유틸리티입니다. 이력서, 자기소개서, SEO 최적화 블로그 포스팅, SNS 업로드 등 모든 형태의 글쓰기에서 제한된 분량을 엄격히 맞추는 것은 콘텐츠의 품질과 통과 여부를 결정짓는 매우 중요한 요소입니다. 저희 도구는 브라우저 내에서 즉각적으로 연산되어 오차가 없는 완벽한 글쓰기를 돕습니다.
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">주요 활용 사례 (3 Use Cases)</h2>
            <ul className="list-disc pl-6 space-y-3 leading-relaxed text-lg text-gray-600 dark:text-gray-400">
                <li>
                    <strong>취업 이력서 및 자기소개서 작성:</strong> 지원하려는 기업의 채용 시스템에서 요구하는 특정 글자 수 제한(예: 500자 이내, 1000자 이상)을 정확하게 맞추어 불이익을 방지합니다.
                </li>
                <li>
                    <strong>SEO 웹사이트 및 블로그 포스팅:</strong> 검색 엔진 최적화(SEO)를 달성하기 위해 이상적인 문서 길이와 메타 태그, 제목(Title)의 글자 수를 조절하여 검색 결과 상위 노출을 유도합니다.
                </li>
                <li>
                    <strong>SNS 콘텐츠 및 마케팅 카피:</strong> 트위터(X), 인스타그램, 페이스북, 스레드(Threads) 등 각 온라인 플랫폼별로 엄격하게 제한되어 있는 글자 수 및 해시태그 길이를 사전에 점검할 수 있습니다.
                </li>
            </ul>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">자주 묻는 질문 (FAQ)</h2>
            <div className="space-y-4">
                <details className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900/50 cursor-pointer transition-all duration-200">
                    <summary className="font-semibold text-lg text-gray-900 dark:text-white px-6 py-5 flex justify-between items-center list-none outline-none">
                        입력한 텍스트 데이터는 안전하게 보호되나요? 서버에 저장되나요?
                        <span className="transition duration-300 group-open:rotate-180 text-blue-500">
                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        네, <strong>완벽하게 안전합니다!</strong> Daily Pick Tools의 Word Counter 도구는 온전히 <strong>클라이언트 사이드(Client-Side)</strong> 자바스크립트를 사용해 작동합니다. 사용자가 브라우저에 입력하는 모든 텍스트 데이터는 외부 서버나 데이터베이스로 절대 전송되지 않습니다. 오직 귀하의 PC 및 스마트폰 내에서만 처리된 후 즉시 폐기되므로 민감한 문서도 안심하고 검사할 수 있습니다.
                    </div>
                </details>
                <details className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900/50 cursor-pointer transition-all duration-200">
                    <summary className="font-semibold text-lg text-gray-900 dark:text-white px-6 py-5 flex justify-between items-center list-none outline-none">
                        공백을 제외한 순수 글자 수도 알 수 있나요?
                        <span className="transition duration-300 group-open:rotate-180 text-blue-500">
                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        네! 위 대시보드의 <strong>'No Spaces'</strong> 지표를 확인하시면 됩니다. 입력란에서 띄어쓰기 및 줄바꿈 문자를 완벽히 제외한 순수한 글자 수만을 실시간으로 계산하여 제공합니다.
                    </div>
                </details>
            </div>
        </div>
      </section>
    </div>
  );
}
