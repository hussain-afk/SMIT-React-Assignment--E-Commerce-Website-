import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../utils/Products';
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react'; // Optional: npm i lucide-react

function ProductDetail() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    
    const product = products.find((p) => p.id === Number(id));

    // Guard clause if product is not found
    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <Link to="/" className="text-indigo-400 hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen  text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto mb-8">
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Collection
                </Link>
            </div>

            <main className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left: Image Section */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                            />
                            {product.isNew && (
                                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                    New Arrival
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right: Info Section */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <span className="text-indigo-400 font-medium tracking-widest uppercase text-sm">{product.category}</span>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4 leading-tight">
                                {product.name}
                            </h1>
                            
                            {/* Rating & Reviews */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700">
                                    <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                                    <span className="text-white font-bold">{product.rating}</span>
                                </div>
                                <span className="text-slate-500 text-sm">Verified Purchase Reviews</span>
                            </div>

                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                {product.description}
                            </p>
                        </div>

                        {/* Price Section */}
                        <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-white">${product.price}</span>
                                <span className="text-slate-500 line-through text-lg">${(product.price * 1.2).toFixed(2)}</span>
                            </div>
                            <p className="text-green-400 text-sm mt-1 font-medium">In stock and ready to ship</p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 items-center">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-slate-700 rounded-xl bg-slate-900 overflow-hidden">
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-3 hover:bg-slate-800 transition-colors text-xl font-bold"
                                >
                                    -
                                </button>
                                <span className="px-6 py-3 font-medium text-white border-x border-slate-700">
                                    {quantity}
                                </span>
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-3 hover:bg-slate-800 transition-colors text-xl font-bold"
                                >
                                    +
                                </button>
                            </div>

                            <button className="flex-1 min-w-[200px] relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                                <div className="relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all">
                                    <ShoppingCart size={20} />
                                    Add to Cart — ${(product.price * quantity).toFixed(2)}
                                </div>
                            </button>
                        </div>

                        {/* Features/Trust Badges */}
                        <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-sm text-slate-400">
                                <Truck size={18} className="text-indigo-400" />
                                <span>Free Express Delivery</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-400">
                                <ShieldCheck size={18} className="text-indigo-400" />
                                <span>2 Year Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductDetail;