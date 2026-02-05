import { useState, useMemo } from 'react';
import { diffChars, diffWords, diffLines } from 'diff';
import { useTranslation } from 'react-i18next';

export default function TextDiffTool() {
  const { t } = useTranslation('translation');
  const [oldText, setOldText] = useState('');
  const [newText, setNewText] = useState('');
  const [diffType, setDiffType] = useState<'chars' | 'words' | 'lines'>('chars');

  const diffs = useMemo(() => {
    if (!oldText && !newText) return [];
    if (diffType === 'chars') return diffChars(oldText, newText);
    if (diffType === 'words') return diffWords(oldText, newText);
    return diffLines(oldText, newText);
  }, [oldText, newText, diffType]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('tools.textDiff.title')}</h1>
        <div className="flex gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
          {(['chars', 'words', 'lines'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setDiffType(type)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                diffType === type
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {t(`tools.textDiff.${type}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('tools.textDiff.original')}</label>
          <textarea
            value={oldText}
            onChange={(e) => setOldText(e.target.value)}
            className="w-full h-64 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white font-mono text-sm resize-none"
            placeholder={t('tools.textDiff.helper')}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('tools.textDiff.changed')}</label>
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full h-64 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white font-mono text-sm resize-none"
            placeholder={t('tools.textDiff.helper')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('tools.textDiff.difference')}</label>
        <div className="w-full min-h-[100px] p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm whitespace-pre-wrap dark:text-gray-300">
          {diffs.map((part, index) => {
            const color = part.added 
              ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200' 
              : part.removed 
                ? 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 line-through decoration-red-500' 
                : '';
            return (
              <span key={index} className={color}>
                {part.value}
              </span>
            );
          })}
          {(!oldText && !newText) && <span className="text-gray-400 italic">{t('tools.textDiff.resultHelper')}</span>}
        </div>
      </div>
    </div>
  );
}
