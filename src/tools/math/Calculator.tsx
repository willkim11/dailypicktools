import { useState } from 'react';
import * as math from 'mathjs';
import { useTranslation } from 'react-i18next';

export default function CalculatorTool() {
  const { t } = useTranslation('translation');
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (val: string) => {
    setDisplay(prev => prev + val);
  };

  const handleClear = () => {
    setDisplay('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Using mathjs evaluate for safer calculation than eval
      const res = math.evaluate(display);
      setResult(res.toString());
      setDisplay(res.toString());
    } catch (e) {
      setResult(t('tools.calculator.error'));
    }
  };

  const buttons = [
    '(', ')', '%', 'C',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="space-y-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('tools.calculator.title')}</h1>
      
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="mb-4">
             <div className="text-right text-gray-500 dark:text-gray-400 text-sm h-6 overflow-hidden">
                {result !== '' && display !== result ? display : ''}
             </div>
             <input 
                type="text" 
                value={display}
                readOnly
                className="w-full text-right text-3xl font-bold bg-transparent border-none focus:ring-0 p-0 text-gray-900 dark:text-white"
                placeholder="0"
             />
        </div>

        <div className="grid grid-cols-4 gap-3">
             {buttons.map((btn) => (
                 <button
                    key={btn}
                    onClick={() => {
                        if(btn === 'C') handleClear();
                        else if(btn === '=') handleCalculate();
                        else handleClick(btn);
                    }}
                    className={`
                        h-14 rounded-xl font-bold text-lg transition-transform active:scale-95
                        ${btn === '=' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 col-span-2' 
                            : btn === 'C'
                                ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
                                : ['/', '*', '-', '+'].includes(btn)
                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50'
                                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }
                    `}
                 >
                    {btn}
                 </button>
             ))}
        </div>
      </div>
    </div>
  );
}
