import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGhost } from 'react-icons/fa';
import { MdOutlineExplore, MdSupportAgent } from 'react-icons/md';

const NotFound = () => {
  return (
    <div style={{height:'100vh'}} className='bg-[#020617] w-full'>
        <div className="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Cinematic Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center">
        
        {/* Animated Error Code */}
        <div className="relative mb-8">
          <h1 className="text-[140px] md:text-[220px] font-black leading-none tracking-tighter select-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-700 via-slate-800 to-[#020617]">
              404
            </span>
          </h1>
          <div className="absolute inset-0 flex items-center justify-center translate-y-4">
            <div className="relative">
              <FaGhost className="text-6xl md:text-8xl text-indigo-500 animate-bounce" />
              {/* Shadow underneath ghost */}
              <div className="w-12 h-2 bg-black/40 rounded-full blur-md mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            Lost in the <span className="text-indigo-500">Void</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            The coordinates you provided lead to deep space. Either this page never existed or it has been consumed by a black hole.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-indigo-900/40 hover:-translate-y-1"
          >
            <FaHome size={20} /> INITIATE HOMECOMING
          </Link>
          
          <Link 
            to="/products" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white font-bold py-4 px-10 rounded-2xl transition-all"
          >
            <MdOutlineExplore size={22} /> EXPLORE GEAR
          </Link>
        </div>

        {/* Footer Link */}
        <div className="mt-16 flex items-center justify-center gap-3 text-slate-600 font-bold uppercase text-xs tracking-[0.2em]">
          <MdSupportAgent size={18} className="text-indigo-500" />
          <span>Need assistance? <Link to="/contact" className="text-indigo-500 hover:text-indigo-400 transition-colors">Contact Support</Link></span>
        </div>
      </div>

      {/* Subtle Star Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-[10%] w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-40 right-[15%] w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-[20%] w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-[5%] w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-300"></div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;