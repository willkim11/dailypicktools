import { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';

export default function UrlEncoderTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const handleConvert = () => {
    try {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (e) {
      setOutput('Error: Invalid URL encoding');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">URL Encoder / Decoder</h1>
         <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
             <button
               onClick={() => setMode('encode')}
               className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                 mode === 'encode' 
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400'
               }`}
             >
               Encode
             </button>
             <button
               onClick={() => setMode('decode')}
               className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                 mode === 'decode' 
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400'
               }`}
             >
               Decode
             </button>
         </div>
      </div>

      <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Input</label>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-32 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white font-mono text-sm"
                placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter URL to decode...'}
            />
        </div>

        <div className="flex justify-center">
            <button 
                onClick={handleConvert}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
                <ArrowDownUp size={18} />
                {mode === 'encode' ? 'Encode' : 'Decode'}
            </button>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Output</label>
            <div className="relative">
                <textarea
                    readOnly
                    value={output}
                    className="w-full h-32 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm dark:text-gray-300"
                    placeholder="Result will appear here..."
                />
                 <button 
                    onClick={() => navigator.clipboard.writeText(output)}
                    className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300"
                >
                    Copy
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
