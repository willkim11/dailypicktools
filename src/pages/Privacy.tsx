import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function Privacy() {
  const { t } = useTranslation('translation');
  const { t: tCommon } = useTranslation('common');

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <SEO title={t('legal.privacyTitle')} description={t('legal.sections.infoCollectionText')} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('legal.privacyTitle')}</h1>
      
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <section>
          <p>{t('legal.sections.infoCollectionText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.sections.infoCollection')}</h2>
          <p>{t('legal.sections.infoCollectionText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.sections.logData')}</h2>
          <p>{t('legal.sections.logDataText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.sections.cookies')}</h2>
          <p>{t('legal.sections.cookiesText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.sections.security')}</h2>
          <p>{t('legal.sections.securityText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.sections.links')}</h2>
          <p>{t('legal.sections.linksText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.sections.clientSide')}</h2>
          <p>{t('legal.sections.clientSideText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.sections.changes')}</h2>
          <p>{t('legal.sections.changesText')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('legal.contactUs')}</h2>
          <p>
            {t('legal.sections.contactText')} <a href="mailto:kmh1902@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">kmh1902@gmail.com</a>
          </p>
        </section>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            &larr; {tCommon('backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
