import React, { useContext } from 'react';
import { LayoutDashboard, ShoppingBag, Tag, Users, LogIn, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from './themeContext';

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  // Dynamic Theme Palette
  const sidebarBg = isLight ? "bg-slate-100" : "bg-[#020617]";
  const border = isLight ? "border-slate-300" : "border-slate-800/60";
  const textPrimary = isLight ? "text-slate-800" : "text-slate-100";
  const textMuted = isLight ? "text-slate-500" : "text-slate-400";
  const cardBg = isLight ? "bg-slate-200/60" : "bg-slate-900/40";
  const hoverBg = isLight ? "hover:bg-slate-200" : "hover:bg-slate-800/50";

  const menuItems = [
    { name: 'Home', path: "/", icon: LayoutDashboard },
    { name: 'Products', path: "/products", icon: ShoppingBag },
    { name: 'About Us', path: "/about", icon: Tag },
    { name: 'Contact Us', path: "/contact", icon: Users },
  ];

  return (
    <aside className={`${sidebarBg} fixed left-0 top-16 h-[calc(100vh-64px)] border-r ${border} w-64 hidden md:flex flex-col z-40 transition-colors duration-300`}>
      <div className="flex flex-col h-full p-4">
        
        {/* Navigation Links */}
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) => `
                group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-indigo-600/10 text-indigo-600 shadow-[inset_0_0_12px_rgba(79,70,229,0.05)]' 
                  : `${textMuted} ${hoverBg} hover:${textPrimary}`}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <item.icon 
                      className={`w-5 h-5 transition-colors ${
                        isActive ? 'text-indigo-600' : `${textMuted} group-hover:text-indigo-500`
                      }`} 
                    />
                    <span className={`text-sm font-semibold tracking-wide ${isActive ? 'text-indigo-600' : textPrimary}`}>
                      {item.name}
                    </span>
                  </div>
                  
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

        {/* Bottom Section */}
        <div className={`mt-auto pt-4 border-t ${border}`}>
          <div className={`${cardBg} p-3 rounded-xl border ${border}`}>
            <button className={`w-full flex items-center gap-3 px-3 py-2.5 ${textMuted} hover:text-rose-500 hover:bg-rose-500/5 rounded-lg transition-all duration-200 group`}>
              <LogIn className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span className={`text-xs font-bold uppercase tracking-wider`}>
                Sign In
              </span>
            </button>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;