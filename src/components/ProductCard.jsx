import React from 'react';
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { name, image, price, category, rating, isNew } = product;

  return (
    <div className="group relative bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)]">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {isNew && (
            <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg shadow-indigo-600/20">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/40 border border-white/5 text-slate-400 hover:text-red-400 hover:bg-slate-950 transition-all backdrop-blur-md">
          <Heart className="w-4 h-4" />
        </button>

        {/* Image - FIXED WITH OBJECT-COVER */}
        <div className="w-full h-full relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle Navy Gradient Overlay to blend the image bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
        </div>

        {/* Quick Action Overlay */}
        <div className="absolute inset-x-4 bottom-4 translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30 flex gap-2">
          <button className="flex-1 bg-white text-slate-950 font-black py-3 rounded-xl text-[11px] uppercase tracking-tighter flex items-center justify-center gap-2 hover:bg-indigo-50 active:scale-95 transition-all">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button className="p-3 bg-slate-950/90 backdrop-blur-md border border-white/10 text-white rounded-xl hover:bg-indigo-600 transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
            {category}
          </span>
          <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="text-[10px] font-bold text-slate-300">{rating}</span>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-indigo-300 transition-colors line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white tracking-tighter">${price}</span>
            <span className="text-[10px] text-slate-500 line-through font-bold leading-none">$1200.00</span>
          </div>
          
          <div className="h-8 w-[1px] bg-slate-800" />
          
          <p className="text-[10px] text-slate-400 font-medium max-w-[80px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Free Shipping Included
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;