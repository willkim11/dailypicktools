import { NavLink } from 'react-router-dom';
import { tools, categories } from '../tools/toolsConfig';
import { X, Command } from 'lucide-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { t } = useTranslation('common');
  const { t: tTools } = useTranslation('translation');

  return (
    <aside 
      className={clsx(
        "fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
          <Command size={24} />
          <span>{t('Daily Pick Tools')}</span>
        </NavLink>
        <button onClick={onClose} className="lg:hidden p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          <X size={20} />
        </button>
      </div>

      <nav className="p-4 space-y-8 overflow-y-auto h-[calc(100vh-4rem)]">
        {categories.map(category => (
          <div key={category.id}>
            <h3 className="mb-2 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t(`categories.${category.id}`)}
            </h3>
            <ul className="space-y-1">
              {tools.filter(t => t.category === category.id).map(tool => (
                <li key={tool.id}>
                  <NavLink
                    to={tool.path}
                    onClick={() => {
                        if (window.innerWidth < 1024) onClose();
                    }}
                    className={({ isActive }) => clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    )}
                  >
                    <tool.icon size={18} />
                    {tTools(`tools.${tool.id}.name`, { defaultValue: tool.name })}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
