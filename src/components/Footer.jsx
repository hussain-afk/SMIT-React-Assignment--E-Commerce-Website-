import React, { useContext } from 'react';
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
import { ThemeContext } from './themeContext'; // Ensure correct path

function Footer() {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  // Dynamic Theme Variables
  const footerBg = isLight ? "bg-slate-100" : "bg-[#0f172a]";
  const border = isLight ? "border-slate-300" : "border-slate-800/50";
  const textPrimary = isLight ? "text-slate-900" : "text-white";
  const textSecondary = isLight ? "text-slate-600" : "text-slate-400";
  const inputBg = isLight ? "bg-white" : "bg-slate-900";

  return (
    <footer className={`${footerBg} ${textSecondary} border-t ${border} pt-16 pb-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className={`flex items-center gap-2 ${textPrimary} font-black text-2xl tracking-tighter`}>
              <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-600/20">
                <MdOutlinePrecisionManufacturing size={24} className="text-white" />
              </div>
              <span>MHM<span className="text-indigo-600">SHOP</span></span>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Premium hardware for the next generation. Join the elite setup revolution and power your productivity.
            </p>
            <div className="flex gap-4">
              <a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-400' : ''}`}><FaTwitter size={18} /></a>
              <a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-400' : ''}`}><FaInstagram size={18} /></a>
              <a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-400' : ''}`}><FaFacebookF size={18} /></a>
              <a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-400' : ''}`}><FaGithub size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className={`${textPrimary} font-black mb-6 uppercase text-xs tracking-[0.2em]`}>Shop</h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-600' : 'hover:text-white'}`}>Peripherals</a></li>
              <li><a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-600' : 'hover:text-white'}`}>Hardware</a></li>
              <li><a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-600' : 'hover:text-white'}`}>Furniture</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={`${textPrimary} font-black mb-6 uppercase text-xs tracking-[0.2em]`}>Support</h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-600' : 'hover:text-white'}`}>Warranty</a></li>
              <li><a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-600' : 'hover:text-white'}`}>Returns</a></li>
              <li><a href="#" className={`hover:text-indigo-600 transition-colors ${isLight ? 'text-slate-600' : 'hover:text-white'}`}>Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`${textPrimary} font-black mb-6 uppercase text-xs tracking-[0.2em]`}>Newsletter</h3>
            <p className="text-xs mb-4 font-medium italic">Get weekly setup inspiration.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className={`w-full ${inputBg} border ${border} rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-indigo-600 ${textPrimary} placeholder:text-slate-500`}
              />
              <button className="absolute right-2 top-2 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-lg text-white transition-colors shadow-md">
                <FaRegEnvelope />
              </button>
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t ${border} flex flex-col md:flex-row justify-between items-center gap-6`}>
          <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 Muhammad Hussain Memon. Elite Hardware Collective.</p>
          <div className="flex gap-6 opacity-60">
              <span className="flex items-center gap-2 text-[10px] font-black uppercase"><FaShieldAlt className="text-indigo-600" /> Secure</span>
              <span className="flex items-center gap-2 text-[10px] font-black uppercase"><FaRegCreditCard className="text-indigo-600" /> PCI Level 1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;