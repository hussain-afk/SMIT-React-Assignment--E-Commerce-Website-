import React from 'react';
import { ShoppingCart, User, Search, Menu, Bell } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-[#020617] border-b border-slate-800 z-50 flex items-center justify-between px-6">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="text-slate-400 hover:text-white md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-white font-bold tracking-tight text-lg hidden sm:block">MHM<span className="text-indigo-400">SHOP</span></span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-slate-900/50 border border-slate-800 rounded-lg px-3 py-1.5 w-1/3 focus-within:border-indigo-500/50 transition-all">
        <Search className="w-4 h-4 text-slate-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search for products..." 
          className="bg-transparent border-none focus:ring-0 text-sm text-slate-200 w-full placeholder:text-slate-600"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        <button className="text-slate-400 hover:text-white relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
        </button>
        <button className="text-slate-400 hover:text-white relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-indigo-600 text-[10px] text-white px-1.5 py-0.5 rounded-full font-bold">3</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center cursor-pointer">
          <User className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </nav>
  );
};

export default Header;