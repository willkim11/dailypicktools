import { Menu, Moon, Sun, Search, Languages } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { t, i18n } = useTranslation('common');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
        >
          <Menu size={20} />
        </button>
        
        <div className="relative hidden md:block w-64">
           {/* Placeholder for global search */}
           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <Search size={16} className="text-gray-400" />
           </div>
           <input 
             type="text"
             className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 border-none rounded-md focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-colors"
             placeholder={t('searchPlaceholder')}
           />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        >
          <Languages size={18} />
          <span>{i18n.language === 'ko' ? 'KR' : 'EN'}</span>
        </button>
        
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          title={t('themeToggle')}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
