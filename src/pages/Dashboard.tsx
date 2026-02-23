import { Link } from 'react-router-dom';
import { tools } from '../tools/toolsConfig';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';

export default function Dashboard() {
  const { t } = useTranslation('translation');

  return (
    <div className="space-y-8">
      <SEO 
        title={t('dashboard.title').replace(/<[^>]*>/g, '')}
        description={t('dashboard.subtitle')}
        keywords={['devtools', 'developer tools', 'utility', 'converter', 'calculator']}
      />
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
          <Trans i18nKey="dashboard.title" components={{ 1: <span className="text-blue-600" /> }} />
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          {t('dashboard.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <Link 
            key={tool.id} 
            to={tool.path}
            className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                <tool.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                {t(`tools.${tool.id}.name`, { defaultValue: tool.name })}
              </h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t(`tools.${tool.id}.desc`, { defaultValue: tool.description })}
            </p>
          </Link>
        ))}
      </div>

      <article className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm space-y-10 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('dashboard.seo.whatIs.title')}
          </h2>
          <p className="leading-relaxed text-lg">
            {t('dashboard.seo.whatIs.content')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('dashboard.seo.why.title')}
          </h2>
          <p className="leading-relaxed text-lg">
            {t('dashboard.seo.why.content')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('dashboard.seo.features.title')}
          </h2>
          <div className="leading-relaxed text-lg whitespace-pre-line">
            {t('dashboard.seo.features.content')}
          </div>
        </section>
      </article>
    </div>
  );
}
