import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-auto p-4 md:p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
          
          <footer className="mt-16 pt-12 pb-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-4 uppercase tracking-wider text-xs">도구 (빠른 링크)</h3>
                  <ul className="space-y-3">
                    <li><Link to="/tools/text/diff" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">텍스트 비교</Link></li>
                    <li><Link to="/tools/text/counter" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">글자수 세기</Link></li>
                    <li><Link to="/tools/text/json" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">JSON 포맷터</Link></li>
                    <li><Link to="/tools/text/regex" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">정규식 테스터</Link></li>
                    <li><Link to="/tools/math/unit" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">단위 변환기</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-4 uppercase tracking-wider text-xs">정보</h3>
                  <ul className="space-y-3">
                    <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">소개 (About)</Link></li>
                    <li><Link to="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">블로그</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">문의하기</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-4 uppercase tracking-wider text-xs">법적</h3>
                  <ul className="space-y-3">
                    <li><Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">개인정보처리방침</Link></li>
                    <li><Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">이용약관</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>&copy; 2025 Daily Pick Tools. All rights reserved.</p>
                <div className="flex gap-4">
                  <Link to="/privacy-policy" className="hover:text-gray-900 dark:hover:text-gray-300">개인정보처리방침</Link>
                  <span>|</span>
                  <Link to="/contact" className="hover:text-gray-900 dark:hover:text-gray-300">문의</Link>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
