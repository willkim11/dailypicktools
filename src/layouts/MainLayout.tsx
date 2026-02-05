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
          
          <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
            <div className="flex justify-center gap-6 mb-2">
              <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</Link>
            </div>
            © {new Date().getFullYear()} Daily Pick Tools. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
