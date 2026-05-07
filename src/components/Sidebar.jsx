import React from 'react';
import { LayoutDashboard, ShoppingBag, Tag, Users, Settings, LogOut, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  const menuItems = [
    { name: 'Home', path:"/", icon: LayoutDashboard, active: true },
    { name: 'Products', path:"/products", icon: ShoppingBag },
    { name: 'About US', path:"/about",icon: Tag },
    { name: 'Contact Us', path:"/contact",icon: Users },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] bg-[#020617] border-r border-slate-800 w-64 hidden md:flex flex-col z-40">
      <div className="flex flex-col h-full p-4">
        
        {/* Navigation Links */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink to={item.path}
              key={item.name}
              className={`flex items-center justify-between px-3 py-3 rounded-lg transition-all group ${
                item.active 
                  ? 'bg-indigo-600/10 text-indigo-400' 
                  : 'text-slate-500 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? 'drop-shadow-[0_0_8px_rgba(79,70,229,0.4)]' : ''}`} />
                <span className="text-sm font-semibold whitespace-nowrap">
                  {item.name}
                </span>
              </div>
              {item.active && <ChevronRight className="w-4 h-4" />}
            </NavLink>
          ))}
        </div>

        {/* Pro Account Widget - Always visible on Desktop */}
        <div className="mt-auto mb-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
           <button className="flex items-center gap-3 px-3 py-3 text-slate-500 hover:text-red-400 transition-colors border-t border-slate-800 mt-2 pt-4">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-semibold">Sign Out</span>
        </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;