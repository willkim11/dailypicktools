import { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';

export default function Base64ConverterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');


  
  // Safe UTF-8 Base64
  const utf8_to_b64 = (str: string) => {
      try {
        return window.btoa(unescape(encodeURIComponent(str)));
      } catch(e) { return "Error converting"; }
  }
  const b64_to_utf8 = (str: string) => {
      try {
        return decodeURIComponent(escape(window.atob(str)));
      } catch(e) { return "Error converting"; }
  }

  const enhancedConvert = () => {
       if (mode === 'encode') setOutput(utf8_to_b64(input));
       else setOutput(b64_to_utf8(input));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Base64 Converter</h1>
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
                placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 string...'}
            />
        </div>

        <div className="flex justify-center">
            <button 
                onClick={enhancedConvert}
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
