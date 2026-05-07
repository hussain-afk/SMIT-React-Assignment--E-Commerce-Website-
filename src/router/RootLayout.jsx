import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // 1. Automatically close sidebar on mobile when navigating to a new page
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [location]);

  // 2. Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col overflow-x-hidden">
      {/* Header stays on top */}
      <Header onMenuClick={() => setIsOpen(!isOpen)} />
      
      <div className="flex flex-1 pt-16 relative">
        
        {/* Mobile Backdrop: Only shows when sidebar is open on small screens */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar: Needs fixed height and z-index */}
        <Sidebar isOpen={isOpen} />
        
        {/* Main Content Area */}
        <main className={`
          flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out
          ${isOpen ? 'md:ml-64' : 'md:ml-20'} 
          ml-0 /* On mobile, margins are 0 because sidebar overlays */
        `}>
          
          <div className="flex-1 p-4 sm:p-6 lg:p-10 w-full max-w-[100vw]">
            <Outlet />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;