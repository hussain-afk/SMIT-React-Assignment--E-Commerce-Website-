import React, { useContext } from 'react';
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';
import { ThemeContext } from './themeContext';

const ProductCard = ({ product }) => {
  const { name, image, price, category, rating, isNew } = product;
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  // Dynamic Theme Palette
  const cardBg = isLight ? "bg-slate-200" : "bg-[#0f172a]";
  const imgBg = isLight ? "bg-slate-300" : "bg-slate-900";
  const border = isLight ? "border-slate-300" : "border-slate-800";
  const textPrimary = isLight ? "text-slate-900" : "text-white";
  const textMuted = isLight ? "text-slate-500" : "text-slate-400";
  const badgeBg = isLight ? "bg-slate-300" : "bg-slate-900";
  
  // This blends the image into the card background
  const gradientOverlay = isLight 
    ? "from-slate-200 via-transparent to-transparent" 
    : "from-[#0f172a] via-transparent to-transparent";

  return (
    <div className={`group relative ${cardBg} border ${border} rounded-3xl overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)]`}>
      
      {/* Image Container */}
      <div className={`relative aspect-square overflow-hidden ${imgBg}`}>
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {isNew && (
            <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg shadow-indigo-600/20">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className={`absolute top-4 right-4 z-20 p-2.5 rounded-full ${isLight ? 'bg-slate-100/60' : 'bg-slate-950/40'} border border-white/5 text-slate-400 hover:text-red-500 hover:bg-white transition-all backdrop-blur-md`}>
          <Heart className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="w-full h-full relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} opacity-60`} />
        </div>

        {/* Quick Action Overlay */}
        <div className="absolute inset-x-4 bottom-4 translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30 flex gap-2">
          <button className={`flex-1 ${isLight ? 'bg-slate-900 text-white' : 'bg-white text-slate-950'} font-black py-3 rounded-xl text-[11px] uppercase tracking-tighter flex items-center justify-center gap-2 hover:bg-indigo-600 hover:text-white active:scale-95 transition-all shadow-xl`}>
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button className={`p-3 ${isLight ? 'bg-slate-100 text-slate-900' : 'bg-slate-950/90'} backdrop-blur-md border ${border} rounded-xl hover:bg-indigo-600 hover:text-white transition-colors shadow-xl`}>
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">
            {category}
          </span>
          <div className={`flex items-center gap-1 ${badgeBg} px-2 py-1 rounded-md border ${border}`}>
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className={`text-[10px] font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{rating}</span>
          </div>
        </div>

        <h3 className={`${textPrimary} font-bold text-lg leading-tight group-hover:text-indigo-600 transition-colors line-clamp-1`}>
          {name}
        </h3>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className={`text-2xl font-black ${textPrimary} tracking-tighter`}>${price}</span>
            <span className={`text-[10px] ${textMuted} line-through font-bold leading-none`}>$1200.00</span>
          </div>
          
          <div className={`h-8 w-[1px] ${border}`} />
          
          <p className={`text-[10px] ${textMuted} font-medium max-w-[80px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
            Free Shipping Included
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;