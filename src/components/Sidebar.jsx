import React from 'react';
import { LayoutDashboard, ShoppingBag, Tag, Users, LogIn, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', path: "/", icon: LayoutDashboard },
    { name: 'Products', path: "/products", icon: ShoppingBag },
    { name: 'About Us', path: "/about", icon: Tag },
    { name: 'Contact Us', path: "/contact", icon: Users },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] bg-[#020617] border-r border-slate-800/60 w-64 hidden md:flex flex-col z-40">
      <div className="flex flex-col h-full p-4">
        
        {/* Navigation Links */}
        <nav className="space-y-1.5 flex-1">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) => `
                group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-indigo-600/10 text-indigo-400 shadow-[inset_0_0_12px_rgba(79,70,229,0.1)]' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <item.icon 
                      className={`w-5 h-5 transition-colors ${
                        isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'
                      }`} 
                    />
                    <span className="text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Subtle Indicator Arrow */}
                  <ChevronRight 
                    className={`w-4 h-4 transition-all duration-300 transform ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} 
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Section: Footer/Profile */}
        <div className="mt-auto pt-4 border-t border-slate-800/60">
          <div className="mb-4 p-3 bg-slate-900/40 rounded-xl border border-slate-800/50">
            {/* <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                JD
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-semibold text-slate-200 truncate">John Doe</span>
                <span className="text-[10px] text-slate-500 truncate">Pro Plan</span>
              </div>
            </div> */}
            
            <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-red-400 hover:bg-red-400/5 rounded-lg transition-all duration-200 group">
              <LogIn className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-semibold">Sign In</span>
            </button>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;