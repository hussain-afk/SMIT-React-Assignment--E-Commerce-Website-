import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form logic here
    alert("Message sent!");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          GET IN <span className="text-indigo-500">TOUCH</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl">
          Have a question about a product or an order? Our elite support team is ready to assist you 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 gap-8">
            {/* Info Card 1 */}
            <div className="flex items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-indigo-500/50 transition-all">
              <div className="bg-indigo-600/10 p-4 rounded-2xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 text-sm font-bold uppercase tracking-widest">Call Us</h4>
                <p className="text-white text-xl font-bold">+92 3368044668</p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="flex items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-cyan-500/50 transition-all">
              <div className="bg-cyan-600/10 p-4 rounded-2xl text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 text-sm font-bold uppercase tracking-widest">Email</h4>
                <p className="text-white text-xl font-bold">hussainkadir245@gmail.com</p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="flex items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-purple-500/50 transition-all">
              <div className="bg-purple-600/10 p-4 rounded-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 text-sm font-bold uppercase tracking-widest">HQ</h4>
                <p className="text-white text-xl font-bold">Karachi, Sindh</p>
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div className="pt-6">
            <h3 className="text-white font-bold mb-6">JOIN THE COMMUNITY</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-2xl font-bold transition-all">
                <FaDiscord size={20} /> Discord
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-2xl transition-all">
                <FaTwitter size={20} />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-2xl transition-all">
                <FaYoutube size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="relative">
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full"></div>
          
          <form 
            onSubmit={handleSubmit}
            className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-[2.5rem] space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-2">Subject</label>
              <select className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-all appearance-none">
                <option>Technical Support</option>
                <option>Order Tracking</option>
                <option>Business Inquiry</option>
                <option>Warranty Claim</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-2">Your Message</label>
              <textarea 
                rows="5"
                placeholder="How can we help you?"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-900/40"
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