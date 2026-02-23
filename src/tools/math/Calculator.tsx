import { useState, useEffect, useCallback } from 'react';
import * as math from 'mathjs';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import ToolGuide from '../../components/ToolGuide';

export default function CalculatorTool() {
  const { t } = useTranslation('translation');
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const appendToDisplay = useCallback((val: string) => {
    setDisplay(prev => prev + val);
  }, []);

  const handleClear = useCallback(() => {
    setDisplay('');
    setResult('');
  }, []);

  const handleDelete = useCallback(() => {
    setDisplay(prev => prev.slice(0, -1));
  }, []);

  const handleCalculate = useCallback(() => {
    if (!display.trim()) return;
    try {
      let expression = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'pi')
        .replace(/√\(/g, 'sqrt(')
        .replace(/log\(/g, 'log10(')
        .replace(/ln\(/g, 'log(');

      const res = math.evaluate(expression);
      if (res === undefined) return;
      
      const formattedRes = math.format(res, { precision: 14 });
      setResult(formattedRes);
      setDisplay(formattedRes);
    } catch (e) {
      setResult(t('tools.calculator.error', { defaultValue: 'Error' }));
    }
  }, [display, t]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in another input (like search box)
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const validChars = '0123456789.+-*/^%()e!';
      if (validChars.includes(e.key)) {
        e.preventDefault();
        if (e.key === '*') appendToDisplay('×');
        else if (e.key === '/') appendToDisplay('÷');
        else appendToDisplay(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleCalculate();
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleDelete();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClear();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [appendToDisplay, handleCalculate, handleClear, handleDelete]);

  const buttons = [
    { label: 'sin', action: 'sin(', type: 'sci' },
    { label: 'cos', action: 'cos(', type: 'sci' },
    { label: 'tan', action: 'tan(', type: 'sci' },
    { label: 'C', action: 'C', type: 'danger' },
    { label: '⌫', action: 'DEL', type: 'danger' },
    
    { label: 'log', action: 'log(', type: 'sci' },
    { label: 'ln', action: 'ln(', type: 'sci' },
    { label: '√', action: '√(', type: 'sci' },
    { label: '(', action: '(', type: 'op' },
    { label: ')', action: ')', type: 'op' },
    
    { label: 'π', action: 'π', type: 'sci' },
    { label: '7', action: '7', type: 'num' },
    { label: '8', action: '8', type: 'num' },
    { label: '9', action: '9', type: 'num' },
    { label: '÷', action: '÷', type: 'op' },
    
    { label: 'e', action: 'e', type: 'sci' },
    { label: '4', action: '4', type: 'num' },
    { label: '5', action: '5', type: 'num' },
    { label: '6', action: '6', type: 'num' },
    { label: '×', action: '×', type: 'op' },
    
    { label: 'x^y', action: '^', type: 'sci' },
    { label: '1', action: '1', type: 'num' },
    { label: '2', action: '2', type: 'num' },
    { label: '3', action: '3', type: 'num' },
    { label: '-', action: '-', type: 'op' },
    
    { label: 'x!', action: '!', type: 'sci' },
    { label: '0', action: '0', type: 'num' },
    { label: '.', action: '.', type: 'num' },
    { label: '=', action: '=', type: 'eq' },
    { label: '+', action: '+', type: 'op' },
  ];

  const getButtonStyles = (type: string) => {
    switch(type) {
      case 'danger':
        return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50';
      case 'eq':
        return 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/30';
      case 'op':
        return 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60';
      case 'sci':
        return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-base';
      case 'num':
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600';
    }
  };

  return (
    <div className="space-y-6 flex flex-col items-center">
      <SEO 
        title={t('tools.calculator.name')}
        description={t('tools.calculator.desc')}
        keywords={['calculator', 'scientific calculator', 'math', '공학용 계산기', '계산기']}
        url="/tools/math/calculator"
      />
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('tools.calculator.title', { defaultValue: 'Scientific Calculator' })}</h1>
      
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="mb-6 bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-inner">
             <div className="text-right text-gray-500 dark:text-gray-400 text-sm h-6 overflow-hidden tracking-wider font-mono">
                {result !== '' && display !== result && display}
             </div>
             <input 
                type="text" 
                value={display || '0'}
                readOnly
                className="w-full text-right text-4xl sm:text-5xl font-bold bg-transparent border-none focus:ring-0 p-0 text-gray-900 dark:text-white font-mono tracking-tight"
             />
        </div>

        <div className="grid grid-cols-5 gap-2 sm:gap-3">
             {buttons.map((btn, i) => (
                 <button
                    key={`${btn.label}-${i}`}
                    onClick={() => {
                        if(btn.action === 'C') handleClear();
                        else if(btn.action === 'DEL') handleDelete();
                        else if(btn.action === '=') handleCalculate();
                        else appendToDisplay(btn.action);
                    }}
                    className={`
                        h-12 sm:h-14 rounded-xl font-bold text-lg sm:text-xl transition-all active:scale-95 flex items-center justify-center
                        ${getButtonStyles(btn.type)}
                    `}
                 >
                    {btn.label}
                 </button>
             ))}
        </div>
      </div>
      
      <div className="w-full max-w-4xl pt-8">
        <ToolGuide toolId="scientificCalculator" />
      </div>
    </div>
  );
}
