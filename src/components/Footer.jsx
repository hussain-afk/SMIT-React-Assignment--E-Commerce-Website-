import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaGithub, 
  FaRegEnvelope,
  FaShieldAlt,
  FaRegCreditCard
} from 'react-icons/fa';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 border-t border-slate-800/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <MdOutlinePrecisionManufacturing size={24} className="text-white" />
              </div>
              <span>MHM<span className="text-indigo-500">SHOP</span></span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium hardware for the next generation. Join the elite setup revolution.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><FaFacebookF size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><FaGithub size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Shop</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Peripherals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hardware</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Furniture</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Newsletter</h3>
            <div className="relative mt-4">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-indigo-500"
              />
              <button className="absolute right-2 top-2 bg-indigo-600 p-2 rounded-lg text-white">
                <FaRegEnvelope />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© 2026 Muhammad Hussain Memon. All rights reserved.</p>
          <div className="flex gap-6 opacity-50">
             <span className="flex items-center gap-2 text-xs"><FaShieldAlt /> Secure</span>
             <span className="flex items-center gap-2 text-xs"><FaRegCreditCard /> PCI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;