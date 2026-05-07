import React, { useState } from "react";
import Products from "../utils/Products"; // Importing the data we created
import ProductCard from "../components/ProductCard";
import { NavLink } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Peripherals",
    "Display",
    "Audio",
    "Hardware",
    "Storage",
  ];

  // Filter logic
  const filteredProducts =
    activeCategory === "All"
      ? Products
      : Products.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
            Product{" "}
            <span className="text-indigo-500 underline decoration-indigo-500/20">
              Catalog
            </span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Showing {filteredProducts.length} high-performance items
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm font-bold hover:border-slate-600 transition-all">
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
              <ProductCard key={product.id} product={product} />
            </NavLink>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-800 rounded-[3rem]">
          <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-4">
            <SlidersHorizontal className="w-8 h-8 text-slate-700" />
          </div>
          <h3 className="text-white font-bold text-xl">No products found</h3>
          <p className="text-slate-500">Try selecting a different category.</p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-6 text-indigo-400 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination / Load More */}
      <div className="flex justify-center pt-10">
        <button className="px-10 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold rounded-2xl transition-all active:scale-95">
          Load More Results
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
