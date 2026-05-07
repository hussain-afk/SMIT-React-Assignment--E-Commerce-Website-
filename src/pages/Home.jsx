import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Products from "../utils/Products";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        {/* Header Section: Outside the grid */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tighter">
              LATEST <span className="text-indigo-500">PRODUCTS</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium mt-1">
              Handpicked tech for your arena.
            </p>
          </div>
          <NavLink to="/products">
            <button className="text-indigo-500 font-bold cursor-pointer hover:text-indigo-400 transition-colors flex items-center gap-2 group">
              View All
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </NavLink>
        </div>

        {/* Grid Container: Only contains ProductCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Products.slice(0, 4).map((product) => (
            <NavLink key={product.id} to={`/products/${product.id}`}>
              <ProductCard key={product.id} product={product} />
            </NavLink>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
