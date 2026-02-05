import { useState } from 'react';

export default function JsonFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  const minifyJson = () => {
    try {
        const parsed = JSON.parse(input);
        setOutput(JSON.stringify(parsed));
        setError(null);
    } catch (e) {
        setError((e as Error).message);
        setOutput('');
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">JSON Formatter & Validator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
        <div className="flex flex-col h-full">
            <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Input JSON</label>
                <div className="flex gap-2">
                     <button  
                        onClick={minifyJson}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:text-gray-300"
                     >
                        Minify
                     </button>
                    <button  
                        onClick={formatJson}
                        className="text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded hover:bg-blue-200"
                     >
                        Format
                     </button>
                </div>
            </div>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-xs resize-none"
                placeholder="Paste JSON here..."
            />
        </div>

        <div className="flex flex-col h-full">
            <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Formatted Output</label>
            </div>
            <div className="flex-1 relative">
                <textarea
                    readOnly
                    value={error ? error : output}
                    className={`w-full h-full p-3 bg-gray-50 dark:bg-gray-900 border rounded-lg font-mono text-xs resize-none ${
                        error 
                        ? 'border-red-300 text-red-600 dark:border-red-800 dark:text-red-400' 
                        : 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300'
                    }`}
                    placeholder="Formatted JSON will appear here..."
                />
                 {!error && output && (
                    <button 
                        onClick={() => navigator.clipboard.writeText(output)}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300"
                    >
                        Copy
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
