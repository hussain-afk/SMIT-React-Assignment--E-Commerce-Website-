import React from 'react';
import { FaRocket, FaUsers, FaMicrochip, FaGlobe } from 'react-icons/fa';
import { MdOutlineVerifiedUser, MdSupportAgent } from 'react-icons/md';

const AboutPage = () => {
  const stats = [
    { id: 1, label: 'Active Users', value: '500K+', icon: <FaUsers className="text-indigo-500" /> },
    { id: 2, label: 'Countries', value: '45+', icon: <FaGlobe className="text-cyan-500" /> },
    { id: 3, label: 'Tech Awards', value: '12', icon: <FaRocket className="text-purple-500" /> },
    { id: 4, label: 'Hardware Partners', value: '100+', icon: <FaMicrochip className="text-blue-500" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-20 pb-20">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-10">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          WE BUILD THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">FUTURE</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          NebulaTech started in a small garage in 2021 with one goal: to bridge the gap between pro-level performance and everyday setup aesthetics.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25"></div>
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" 
            alt="Our Workshop" 
            className="relative rounded-3xl border border-slate-800 object-cover h-[400px] w-full"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            We believe that your workspace is an extension of your mind. Whether you are coding the next big app, streaming to thousands, or competing at the highest level, our gear is designed to never let you down.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-indigo-500/10 p-2 rounded-lg text-indigo-500">
                <MdOutlineVerifiedUser size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Quality Without Compromise</h4>
                <p className="text-slate-400 text-sm">Every switch, sensor, and frame is tested for 10M+ cycles.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-cyan-500/10 p-2 rounded-lg text-cyan-500">
                <MdSupportAgent size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Elite Support</h4>
                <p className="text-slate-400 text-sm">Real humans, real tech experts, available 24/7 for our community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl text-center group hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-3xl mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-3xl font-black text-white">{stat.value}</div>
            <div className="text-slate-500 text-sm uppercase tracking-widest mt-1 font-bold">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Values / CTA */}
      <section className="relative overflow-hidden rounded-3xl bg-indigo-600 p-12 text-center text-white">
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-black">Ready to Upgrade?</h2>
          <p className="text-indigo-100 max-w-xl mx-auto text-lg font-medium">
            Join the 500,000+ creators who have already switched to NebulaTech hardware.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black hover:bg-slate-100 transition-colors uppercase tracking-tight shadow-xl shadow-indigo-900/20">
            Explore Collection
          </button>
        </div>
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-purple-400 rounded-full blur-[120px] opacity-20"></div>
      </section>

    </div>
  );
};

export default AboutPage;