import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownTool() {
  const [markdown, setMarkdown] = useState('# Hello Markdown\n\n- List item 1\n- List item 2\n\n| Column 1 | Column 2 |\n|---|---|\n| Cell 1 | Cell 2 |');

  return (
    <div className="space-y-6 h-[calc(100vh-200px)]">
      <div className="flex justify-between items-center">
           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Markdown Preview</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex flex-col h-full">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Markdown Input</label>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="flex-1 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none"
                placeholder="Type markdown here..."
            />
        </div>

        <div className="flex flex-col h-full">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview</label>
            <div className="flex-1 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto prose dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
      </div>
    </div>
  );
}
