import { useState } from 'react';

export default function XmlValidatorTool() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{valid: boolean, message: string} | null>(null);

  const validateXml = () => {
    if (!input.trim()) {
        setResult(null);
        return;
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, "application/xml");
    const errors = doc.getElementsByTagName("parsererror");
    
    if (errors.length > 0) {
        setResult({ valid: false, message: errors[0].textContent || "Invalid XML" });
    } else {
        setResult({ valid: true, message: "Valid XML" });
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">XML Validator</h1>

      <div className="space-y-4">
        <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-96 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            placeholder="Paste XML here to validate..."
        />

        <div className="flex justify-between items-center">
            <button 
                onClick={validateXml}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
                Validate XML
            </button>
            <button 
                onClick={() => setInput('')}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
            >
                Clear
            </button>
        </div>

        {result && (
            <div className={`p-4 rounded-lg border ${
                result.valid 
                ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300' 
                : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300'
            }`}>
                <div className="flex items-start gap-3">
                     <div className="text-xl">{result.valid ? '✅' : '❌'}</div>
                     <div>
                         <h3 className="font-bold">{result.valid ? 'Valid XML' : 'Invalid XML'}</h3>
                         {!result.valid && <p className="mt-1 text-sm font-mono break-all">{result.message}</p>}
                     </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
