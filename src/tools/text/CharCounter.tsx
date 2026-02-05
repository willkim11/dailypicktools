import { useState, useMemo } from 'react';

export default function CharCounterTool() {
  const [text, setText] = useState('');

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
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Word & Character Counter</h1>

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
    </div>
  );
}
