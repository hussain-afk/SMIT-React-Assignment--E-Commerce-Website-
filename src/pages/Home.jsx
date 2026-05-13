import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Products from "../utils/Products";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../components/themeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  // Dynamic Theme Palette
  const textPrimary = isLight ? "text-slate-900" : "text-white";
  const textMuted = isLight ? "text-slate-500" : "text-slate-400";

  return (
    <div className="space-y-16 pb-12 transition-colors duration-300">
      <Hero />

      <div>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h1 className={`text-4xl font-black ${textPrimary} tracking-tighter uppercase`}>
              LATEST <span className="text-indigo-600">PRODUCTS</span>
            </h1>
            <p className={`${textMuted} text-base font-medium mt-1`}>
              Handpicked tech for your digital arena.
            </p>
          </div>
          
          <NavLink to="/products">
            <button className="text-indigo-600 font-bold cursor-pointer hover:text-indigo-500 transition-colors flex items-center gap-2 group text-sm uppercase tracking-wider">
              View All Collection
              <span className="group-hover:translate-x-1 transition-transform text-xl">
                →
              </span>
            </button>
          </NavLink>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Products.slice(0, 4).map((product) => (
            <NavLink key={product.id} to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </NavLink>
          ))}
        </div>

        {/* Bottom Call to Action (Optional extra touch) */}
        <div className={`mt-16 p-8 rounded-[2rem] ${isLight ? 'bg-indigo-50 border border-indigo-100' : 'bg-indigo-900/10 border border-indigo-500/10'} text-center`}>
          <h2 className={`text-2xl font-bold ${textPrimary} mb-2`}>Didn't find what you were looking for?</h2>
          <p className={`${textMuted} mb-6`}>Our full catalog features over 50+ professional gaming and productivity tools.</p>
          <NavLink 
            to="/products" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
          >
            Browse Full Catalog
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;