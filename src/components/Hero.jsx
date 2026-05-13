import React, { useContext } from 'react';
import { ArrowRight, ShoppingBag, Star, Zap } from 'lucide-react';
import { ThemeContext } from './themeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  // Theme Variables
  const sectionBg = isLight ? "bg-slate-100" : "bg-[#020617]";
  const textPrimary = isLight ? "text-slate-900" : "text-white";
  const textMuted = isLight ? "text-slate-500" : "text-slate-400";
  const cardBg = isLight ? "bg-slate-200" : "bg-slate-900";
  const cardBorder = isLight ? "border-slate-300" : "border-slate-800";
  const secondaryBtn = isLight ? "bg-slate-200 text-slate-800 hover:bg-slate-300 border-slate-300" : "bg-slate-900 text-white hover:bg-slate-800 border-slate-800";

  return (
    <section className={`p-8 relative min-h-[80vh] flex items-center overflow-hidden rounded-3xl ${sectionBg} transition-colors duration-300`}>
      
      {/* Background Decorative Elements */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${isLight ? 'bg-indigo-400/10' : 'bg-indigo-600/20'} rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2`}></div>
      <div className={`absolute bottom-0 left-0 w-[300px] h-[300px] ${isLight ? 'bg-blue-400/10' : 'bg-blue-600/10'} rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2`}></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${isLight ? 'bg-indigo-100 border-indigo-200' : 'bg-indigo-500/10 border-indigo-500/20'} border`}>
            <Zap className={`w-4 h-4 ${isLight ? 'text-indigo-600 fill-indigo-600' : 'text-indigo-400 fill-indigo-400'}`} />
            <span className={`${isLight ? 'text-indigo-700' : 'text-white'} text-xs font-bold uppercase tracking-wider`}>New Season Drop</span>
          </div>

          <h1 className={`${textPrimary} text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter`}>
            UPGRADE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
              DIGITAL ARENA
            </span>
          </h1>

          <p className={`${textMuted} text-lg max-w-lg leading-relaxed`}>
            Experience peak performance with our latest collection of high-end tech gear. 
            Engineered for professionals, designed for the elite.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-indigo-600/20">
              Shop Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`px-8 py-4 font-bold rounded-xl border transition-all ${secondaryBtn}`}>
              View Catalog
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 ${isLight ? 'border-slate-100' : 'border-[#020617]'} bg-slate-400 flex items-center justify-center overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
              </div>
              <p className={`${textMuted} font-medium`}>Trusted by 10k+ users</p>
            </div>
          </div>
        </div>

        {/* Right Content: Product Showcase */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-md">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-transparent rounded-[3rem] rotate-6 blur-xl"></div>
            
            <div className={`relative w-full h-full ${cardBg} border ${cardBorder} rounded-[3rem] overflow-hidden group shadow-2xl transition-colors duration-300`}>
               {/* Product Image */}
               <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src="https://www.gamingislife.sg/cdn/shop/files/QUANTUM_100M2_PURPLE.jpg?v=1729234434&width=1214" 
                    alt="Product" 
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl" 
                  />
               </div>
               
               {/* Floating Info Tag */}
               <div className={`absolute bottom-6 left-6 right-6 p-4 ${isLight ? 'bg-white/80' : 'bg-slate-900/60'} backdrop-blur-xl border ${isLight ? 'border-white' : 'border-white/10'} rounded-2xl shadow-xl`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`${isLight ? 'text-slate-900' : 'text-white'} font-bold`}>Quantum Headset X</p>
                      <p className="text-indigo-500 font-semibold text-sm">$299.00</p>
                    </div>
                    <div className="bg-indigo-600 p-2.5 rounded-lg shadow-lg shadow-indigo-500/40">
                      <ShoppingBag className="w-5 h-5 text-white" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;