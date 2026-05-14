import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { ThemeContext } from '../components/themeContext';
const RootLayout = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const isLight = theme === "light";

  // Dynamic Theme Colors
  const bgMain = isLight ? "bg-slate-50" : "bg-[#020617]";
  const textMain = isLight ? "text-slate-900" : "text-slate-100";

  // 1. Close sidebar on mobile navigation
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [location]);

  // 2. Initial check and Resize handling
  useEffect(() => {
    const handleResize = () => {
      // Use 768px as the standard tablet/mobile breakpoint
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${bgMain} ${textMain} min-h-screen flex flex-col transition-colors duration-300 overflow-x-hidden`}>
      
      {/* Header */}
      <Header onMenuClick={() => setIsOpen(!isOpen)} />
      
      <div className="flex flex-1 pt-16 relative">
        
        {/* Mobile Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />
        
        {/* Main Content Area */}
        <main className={`
          flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out
          ${isOpen ? 'md:pl-64' : 'md:pl-0'} 
          /* On mobile, no padding because sidebar overlays */
        `}>
          
          <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full">
            {/* Wrap Outlet in a container to ensure content doesn't overflow */}
            <div className="mx-auto max-w-7xl">
               <Outlet />
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;