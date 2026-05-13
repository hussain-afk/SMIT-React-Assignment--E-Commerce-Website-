import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../utils/Products';
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react';
import { ThemeContext } from '../components/themeContext';

function ProductDetail() {
    const { id } = useParams();
    const { theme } = useContext(ThemeContext);
    const [quantity, setQuantity] = useState(1);
    
    const isLight = theme === "light";
    const product = products.find((p) => p.id === Number(id));

    // Theme Variables
    const textPrimary = isLight ? "text-slate-900" : "text-white";
    const textSecondary = isLight ? "text-slate-600" : "text-slate-400";
    const cardBg = isLight ? "bg-slate-200" : "bg-slate-900";
    const border = isLight ? "border-slate-300" : "border-slate-800";
    const panelBg = isLight ? "bg-slate-200/50" : "bg-slate-800/30";

    // Guard clause
    if (!product) {
        return (
            <div className={`min-h-screen flex flex-col items-center justify-center ${textPrimary}`}>
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <Link to="/" className="text-indigo-600 hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
            {/* Back Button */}
            <div className="max-w-7xl mx-auto mb-8">
                <Link to="/products" className={`inline-flex items-center ${isLight ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-400 hover:text-white'} transition-colors`}>
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Collection
                </Link>
            </div>

            <main className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left: Image Section */}
                    <div className="relative group">
                        <div className={`absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur ${isLight ? 'opacity-10' : 'opacity-25'} group-hover:opacity-50 transition duration-1000`}></div>
                        <div className={`relative ${cardBg} rounded-3xl overflow-hidden border ${border}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                            />
                            {product.isNew && (
                                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                    New Arrival
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right: Info Section */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">{product.category}</span>
                            <h1 className={`text-4xl sm:text-5xl font-black ${textPrimary} mt-2 mb-4 leading-tight tracking-tighter`}>
                                {product.name}
                            </h1>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`flex items-center ${isLight ? 'bg-slate-200' : 'bg-slate-800/50'} px-3 py-1 rounded-lg border ${border}`}>
                                    <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                                    <span className={`${isLight ? 'text-slate-800' : 'text-white'} font-bold`}>{product.rating}</span>
                                </div>
                                <span className={textSecondary + " text-sm font-medium"}>Verified Purchase Reviews</span>
                            </div>

                            <p className={`text-lg ${textSecondary} leading-relaxed mb-8`}>
                                {product.description || "Experience the next level of performance with this professionally engineered gear, designed to provide comfort and efficiency for any digital workspace."}
                            </p>
                        </div>

                        {/* Price Section */}
                        <div className={`${panelBg} p-6 rounded-2xl border ${border} mb-8`}>
                            <div className="flex items-baseline gap-3">
                                <span className={`text-4xl font-black ${textPrimary}`}>${product.price}</span>
                                <span className={`${isLight ? 'text-slate-400' : 'text-slate-500'} line-through text-lg font-bold`}>${(product.price * 1.2).toFixed(2)}</span>
                            </div>
                            <p className="text-emerald-500 text-sm mt-1 font-bold tracking-wide">In stock and ready to ship</p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 items-center">
                            {/* Quantity Selector */}
                            <div className={`flex items-center border ${border} rounded-xl ${isLight ? 'bg-slate-100' : 'bg-slate-900'} overflow-hidden`}>
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className={`px-5 py-3 ${isLight ? 'hover:bg-slate-200' : 'hover:bg-slate-800'} transition-colors text-xl font-black ${textPrimary}`}
                                >
                                    -
                                </button>
                                <span className={`px-6 py-3 font-bold ${textPrimary} border-x ${border}`}>
                                    {quantity}
                                </span>
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className={`px-5 py-3 ${isLight ? 'hover:bg-slate-200' : 'hover:bg-slate-800'} transition-colors text-xl font-black ${textPrimary}`}
                                >
                                    +
                                </button>
                            </div>

                            <button className="flex-1 min-w-[240px] relative group active:scale-95 transition-transform">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-xl shadow-indigo-600/20">
                                    <ShoppingCart size={20} />
                                    <span>Add to Cart — ${(product.price * quantity).toFixed(2)}</span>
                                </div>
                            </button>
                        </div>

                        {/* Features/Trust Badges */}
                        <div className={`mt-10 pt-8 border-t ${border} grid grid-cols-1 sm:grid-cols-2 gap-6`}>
                            <div className={`flex items-center gap-3 text-sm font-semibold ${textSecondary}`}>
                                <div className={`p-2 rounded-lg ${isLight ? 'bg-indigo-100' : 'bg-indigo-500/10'}`}>
                                    <Truck size={20} className="text-indigo-600" />
                                </div>
                                <span>Free Express Delivery</span>
                            </div>
                            <div className={`flex items-center gap-3 text-sm font-semibold ${textSecondary}`}>
                                <div className={`p-2 rounded-lg ${isLight ? 'bg-indigo-100' : 'bg-indigo-500/10'}`}>
                                    <ShieldCheck size={20} className="text-indigo-600" />
                                </div>
                                <span>2 Year Global Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductDetail;