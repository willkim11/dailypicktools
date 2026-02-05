import { useState, useMemo } from 'react';

export default function RegexTesterTool() {
  const [regexStr, setRegexStr] = useState('');
  const [flags, setFlags] = useState('gm');
  const [testString, setTestString] = useState('The quick brown fox jumps over the lazy dog.');

  const matches = useMemo(() => {
    if (!regexStr) return [];
    try {
        const re = new RegExp(regexStr, flags);
        const matchesArray = [...testString.matchAll(re)];
        return matchesArray;
    } catch (e) {
        return null; // Invalid regex
    }
  }, [regexStr, flags, testString]);

  // Construct highlighted text
  const highlightedText = useMemo(() => {
    if (!matches || matches.length === 0) return testString;
    
    // Simple logic: highlight matches. 
    // This is tricky with overlapping matches or Global flag, but matchAll helps.
    // For simplicity, we just rebuild the string with spans.  
    // However, React rendering with indices is safer.
    
    let lastIndex = 0;
    const parts = [];
    
    matches.forEach((match, i) => {
        const start = match.index!;
        const end = start + match[0].length;
        
        if (start > lastIndex) {
            parts.push(<span key={`text-${i}`}>{testString.slice(lastIndex, start)}</span>);
        }
        
        parts.push(
            <span key={`match-${i}`} className="bg-yellow-200 dark:bg-yellow-900/50 text-gray-900 dark:text-white rounded px-0.5">
                {match[0]}
            </span>
        );
        
        lastIndex = end;
    });

    if (lastIndex < testString.length) {
        parts.push(<span key="tail">{testString.slice(lastIndex)}</span>);
    }

    return parts;
  }, [matches, testString]);

  return (
    <div className="space-y-6">
       <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Regex Tester</h1>

       <div className="grid gap-4">
           {/* Regex Input */}
           <div className="flex gap-4">
               <div className="flex-1">
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Regular Expression</label>
                   <div className="relative flex items-center">
                        <span className="absolute left-3 text-gray-400 font-mono">/</span>
                        <input 
                            type="text" 
                            value={regexStr}
                            onChange={(e) => setRegexStr(e.target.value)}
                            className="w-full pl-6 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g. [a-z]+"
                        />
                        <span className="absolute right-3 text-gray-400 font-mono">/</span>
                   </div>
               </div>
               <div className="w-32">
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Flags</label>
                   <input 
                        type="text" 
                        value={flags}
                        onChange={(e) => setFlags(e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="gims"
                    />
               </div>
           </div>

            {/* Test String Input */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Test String</label>
                <textarea 
                    value={testString}
                    onChange={(e) => setTestString(e.target.value)}
                    className="w-full h-32 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Results */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Matches: {matches ? matches.length : <span className="text-red-500">Invalid Regex</span>}
                </label>
                <div className="w-full min-h-[100px] p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-300">
                    {highlightedText}
                </div>
            </div>
       </div>
    </div>
  );
}
