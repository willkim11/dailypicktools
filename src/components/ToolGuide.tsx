import Accordion from './Accordion';
import { toolGuides } from '../data/toolGuides';
import { Helmet } from 'react-helmet-async';

interface ToolGuideProps {
  toolId: string;
}

export default function ToolGuide({ toolId }: ToolGuideProps) {
  const data = toolGuides[toolId];

  // If there's no data for the tool, render nothing.
  if (!data) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <article className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8 space-y-12">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      {/* 1. How to Use */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 p-2 rounded-lg text-sm">💡</span>
          이용 방법안내 (How to Use)
        </h2>
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700/50">
          <ul className="space-y-3">
            {data.howTo.map((step, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                {step}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Guide Text (HTML content) */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          도구 개념 가이드
        </h2>
        <div 
          className="prose prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: data.guide }}
        />
      </section>

      {/* 3. FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          자주 묻는 질문 (FAQ)
        </h2>
        <Accordion items={data.faqs} />
      </section>
    </article>
  );
}
