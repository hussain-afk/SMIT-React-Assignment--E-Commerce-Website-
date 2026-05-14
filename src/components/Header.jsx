import React, { useContext, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { ShoppingCart, User, Search, Menu, Bell, Moon, Sun } from 'lucide-react';
import { ThemeContext } from './themeContext';
import { AuthContext } from './AuthContext';

const Header = ({ onMenuClick }) => {
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { userImg } = useContext(AuthContext);
   
  const isLight = theme === "light";
  
  // Custom "Soft" Theme Palette (Removing all pure whites)
  const navBg = isLight ? "bg-slate-100/95" : "bg-[#020617]/95";
  const border = isLight ? "border-slate-300" : "border-slate-800";
  const textPrimary = isLight ? "text-slate-800" : "text-slate-100";
  const textSecondary = isLight ? "text-slate-500" : "text-slate-400";
  const searchBg = isLight ? "bg-slate-200/70" : "bg-slate-900/50";
  const iconHover = isLight ? "hover:text-indigo-600" : "hover:text-indigo-400";

  return (
    <nav className={`fixed top-0 w-full h-16 ${navBg} backdrop-blur-md border-b ${border} z-50 flex items-center justify-between px-6 transition-all duration-300`}>
      
      {/* Brand */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick} 
          className={`${textSecondary} ${iconHover} md:hidden`}
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="text-white font-bold">M</span>
          </div>
          <span className={`${textPrimary} font-black tracking-tight text-lg hidden sm:block`}>
            MHM<span className="text-indigo-600">SHOP</span>
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`hidden md:flex items-center ${searchBg} border ${isLight ? 'border-slate-300' : 'border-slate-800'} rounded-xl px-4 py-2 w-1/3 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20`}>
        <Search className={`w-4 h-4 ${textSecondary} mr-2`} />
        <input 
          type="text" 
          placeholder="Search products..." 
          className={`bg-transparent border-none focus:ring-0 text-sm ${textPrimary} w-full placeholder:text-slate-500`}
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme} 
          className={`p-2 rounded-xl ${isLight ? 'hover:bg-slate-200' : 'hover:bg-slate-800'} ${textSecondary} ${iconHover} transition-colors`}
        >
          {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <button className={`${textSecondary} ${iconHover} p-2 relative`}>
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <button className={`${textSecondary} ${iconHover} p-2 relative`}>
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute top-1 right-0 bg-indigo-600 text-[10px] text-white px-1.5 rounded-full font-bold">
            3
          </span>
        </button>

        <div className={`ml-2 w-9 h-9 rounded-xl ${isLight ? "bg-slate-200" : "bg-slate-800"} border ${border} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform`}>
          { userImg ? (
            <img src={userImg} alt="User" className="w-full h-full rounded-xl object-cover" />
          ) : (
            <User className={`w-5 h-5 ${textSecondary}`} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;