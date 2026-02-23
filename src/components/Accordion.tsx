import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: FaqItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none"
          >
            <span className="font-semibold text-gray-900 dark:text-gray-100">{item.question}</span>
            <span className="text-gray-500 dark:text-gray-400">
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          
          {openIndex === index && (
             <div className="px-6 pb-4 pt-1">
                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                   {item.answer}
                 </p>
             </div>
          )}
        </div>
      ))}
    </div>
  );
}
