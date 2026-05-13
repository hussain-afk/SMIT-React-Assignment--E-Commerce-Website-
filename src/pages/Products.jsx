import React, { useState, useContext } from "react";
import Products from "../utils/Products";
import ProductCard from "../components/ProductCard";
import { NavLink } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { ThemeContext } from "../components/themeContext";

const ProductsPage = () => {
  const { theme } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const isLight = theme === "light";

  // Dynamic Theme Palette
  const textPrimary = isLight ? "text-slate-900" : "text-white";
  const textMuted = isLight ? "text-slate-500" : "text-slate-400";
  const filterBarBg = isLight ? "bg-slate-200" : "bg-slate-900/50";
  const border = isLight ? "border-slate-300" : "border-slate-800";
  const secondaryBtn = isLight ? "bg-slate-200 text-slate-800" : "bg-slate-900 text-slate-300";

  const categories = [
    "All",
    "Peripherals",
    "Display",
    "Audio",
    "Hardware",
    "Storage",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? Products
      : Products.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10 transition-colors duration-300">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className={`text-4xl font-black ${textPrimary} tracking-tighter uppercase`}>
            Product{" "}
            <span className="text-indigo-600 underline decoration-indigo-600/20">
              Catalog
            </span>
          </h1>
          <p className={`${textMuted} mt-2 font-medium`}>
            Showing {filteredProducts.length} high-performance items
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className={`flex ${filterBarBg} p-1 rounded-xl border ${border} shadow-sm`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : `${isLight ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-400 hover:text-slate-200'}`
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className={`flex items-center gap-2 px-4 py-2 border ${border} rounded-xl text-sm font-bold hover:border-indigo-500 transition-all ${secondaryBtn}`}>
            <SlidersHorizontal className="w-4 h-4" />
            Sort
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid Area */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <NavLink key={product.id} to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </NavLink>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className={`flex flex-col items-center justify-center py-20 border-2 border-dashed ${border} rounded-[3rem]`}>
          <div className={`w-20 h-20 ${isLight ? 'bg-slate-200' : 'bg-slate-900'} rounded-full flex items-center justify-center mb-4`}>
            <SlidersHorizontal className={`w-8 h-8 ${isLight ? 'text-slate-400' : 'text-slate-700'}`} />
          </div>
          <h3 className={`${textPrimary} font-bold text-xl`}>No products found</h3>
          <p className={textMuted}>Try selecting a different category.</p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-6 text-indigo-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination / Load More */}
      <div className="flex justify-center pt-10">
        <button className={`px-10 py-4 ${secondaryBtn} border ${border} font-bold rounded-2xl transition-all active:scale-95 hover:border-indigo-500`}>
          Load More Results
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;