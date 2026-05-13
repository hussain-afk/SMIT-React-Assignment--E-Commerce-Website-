import React, { useContext } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import { ThemeContext } from '../components/themeContext';

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  // Dynamic Theme Variables
  const textPrimary = isLight ? "text-slate-900" : "text-white";
  const textSecondary = isLight ? "text-slate-600" : "text-slate-400";
  const cardBg = isLight ? "bg-slate-100" : "bg-slate-900/50";
  const inputBg = isLight ? "bg-white" : "bg-slate-800/50";
  const border = isLight ? "border-slate-300" : "border-slate-800";

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 transition-colors duration-300">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className={`text-4xl md:text-6xl font-black ${textPrimary} mb-4 tracking-tighter uppercase`}>
          GET IN <span className="text-indigo-600">TOUCH</span>
        </h1>
        <p className={`${textSecondary} text-lg max-w-xl font-medium`}>
          Have a question about a product or an order? Our elite support team is ready to assist you 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 gap-8">
            {/* Info Card 1 - Phone */}
            <div className={`flex items-center gap-6 p-6 ${cardBg} border ${border} rounded-3xl group hover:border-indigo-500/50 transition-all shadow-sm`}>
              <div className="bg-indigo-600/10 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest">Call Us</h4>
                <p className={`${textPrimary} text-xl font-bold`}>+92 3368044668</p>
              </div>
            </div>

            {/* Info Card 2 - Email */}
            <div className={`flex items-center gap-6 p-6 ${cardBg} border ${border} rounded-3xl group hover:border-cyan-500/50 transition-all shadow-sm`}>
              <div className="bg-cyan-600/10 p-4 rounded-2xl text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest">Email</h4>
                <p className={`${textPrimary} text-xl font-bold`}>hussainkadir245@gmail.com</p>
              </div>
            </div>

            {/* Info Card 3 - Location */}
            <div className={`flex items-center gap-6 p-6 ${cardBg} border ${border} rounded-3xl group hover:border-purple-500/50 transition-all shadow-sm`}>
              <div className="bg-purple-600/10 p-4 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest">HQ</h4>
                <p className={`${textPrimary} text-xl font-bold`}>Karachi, Sindh</p>
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div className="pt-6">
            <h3 className={`${textPrimary} font-black text-sm tracking-widest mb-6`}>JOIN THE COMMUNITY</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200/50">
                <FaDiscord size={20} /> Discord
              </button>
              <button className={`${isLight ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-slate-800 text-white hover:bg-slate-700'} p-4 rounded-2xl transition-all`}>
                <FaTwitter size={20} />
              </button>
              <button className={`${isLight ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-slate-800 text-white hover:bg-slate-700'} p-4 rounded-2xl transition-all`}>
                <FaYoutube size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="relative">
          {/* Decorative Glow */}
          <div className={`absolute -inset-4 ${isLight ? 'bg-indigo-600/5' : 'bg-indigo-500/10'} blur-3xl rounded-full`}></div>
          
          <form 
            onSubmit={handleSubmit}
            className={`relative ${isLight ? 'bg-white' : 'bg-slate-900/80 backdrop-blur-xl'} border ${border} p-8 md:p-10 rounded-[2.5rem] space-y-6 shadow-2xl transition-all`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className={`w-full ${inputBg} border ${border} rounded-2xl py-4 px-6 ${textPrimary} font-medium focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400`}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className={`w-full ${inputBg} border ${border} rounded-2xl py-4 px-6 ${textPrimary} font-medium focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400`}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Subject</label>
              <select className={`w-full ${inputBg} border ${border} rounded-2xl py-4 px-6 ${textPrimary} font-medium focus:outline-none focus:border-indigo-500 transition-all appearance-none cursor-pointer`}>
                <option>Technical Support</option>
                <option>Order Tracking</option>
                <option>Business Inquiry</option>
                <option>Warranty Claim</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Your Message</label>
              <textarea 
                rows="5"
                placeholder="How can we help you?"
                className={`w-full ${inputBg} border ${border} rounded-2xl py-4 px-6 ${textPrimary} font-medium focus:outline-none focus:border-indigo-500 transition-all resize-none placeholder:text-slate-400`}
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-600/30 active:scale-[0.98]"
            >
              SEND MESSAGE <MdSend size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;