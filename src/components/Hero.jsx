import React from 'react';
import { ArrowRight, ShoppingBag, Star, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden rounded-3xl bg-[#020617]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <Zap className="w-4 h-4 text-indigo-400 fill-indigo-400" />
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">New Season Drop</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            UPGRADE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              DIGITAL ARENA
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Experience peak performance with our latest collection of high-end tech gear. 
            Engineered for professionals, designed for the elite.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-indigo-600/20">
              Shop Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 transition-all">
              View Catalog
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-slate-500 font-medium">Trusted by 10k+ users</p>
            </div>
          </div>
        </div>

        {/* Right Content: Product Showcase / Abstract Shape */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-md">
            {/* Main Image Container (Glass Card) */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-[3rem] rotate-6 border border-white/10 blur-sm"></div>
            <div className="relative w-full h-full bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden group">
               {/* Placeholder for Product Image */}
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <ShoppingBag className="w-32 h-32 text-indigo-500/20 group-hover:scale-110 transition-transform duration-500" />
               </div>
               
               {/* Floating Info Tag */}
               <div className="absolute bottom-8 left-8 right-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-bold">Quantum Headset X</p>
                      <p className="text-indigo-400 text-sm">$299.00</p>
                    </div>
                    <div className="bg-indigo-600 p-2 rounded-lg">
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