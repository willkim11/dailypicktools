import { useTranslation } from 'react-i18next';

interface ToolInfoProps {
  toolId: string;
}

export default function ToolInfo({ toolId }: ToolInfoProps) {
  const { t, i18n } = useTranslation();

  // Check if SEO data exists for this tool
  const hasSeo = i18n.exists(`tools.${toolId}.seo.whatIs.title`);

  if (!hasSeo) return null;

  return (
    <article className="mt-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 space-y-8 text-gray-700 dark:text-gray-300">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t(`tools.${toolId}.seo.whatIs.title`)}
        </h2>
        <p className="leading-relaxed">
          {t(`tools.${toolId}.seo.whatIs.content`)}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t(`tools.${toolId}.seo.howTo.title`)}
        </h2>
        <div className="leading-relaxed whitespace-pre-line">
          {t(`tools.${toolId}.seo.howTo.content`)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t(`tools.${toolId}.seo.why.title`)}
        </h2>
        <p className="leading-relaxed">
          {t(`tools.${toolId}.seo.why.content`)}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t(`tools.${toolId}.seo.useCases.title`)}
        </h2>
        <div className="leading-relaxed whitespace-pre-line">
          {t(`tools.${toolId}.seo.useCases.content`)}
        </div>
      </section>
    </article>
  );
}
