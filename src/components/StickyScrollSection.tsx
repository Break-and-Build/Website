"use client";

import React from "react";
import { motion } from "framer-motion";
import { Asterisk, Square, Database, AlertCircle, Server, CheckSquare, Sparkles } from "lucide-react";

import ThresholdLogo from "@/Assets/Project logo/Threshold.png";
import BoomrngLogo from "@/Assets/Project logo/Boomrng Plugin.png";
import BudgetLogo from "@/Assets/Project logo/Budget Tracker Icon.png";

const content = [
  {
    title: "Threshold",
    description: "Permanent site blocker locked behind an accountability partner. 72-hour wait on every change—no willpower test.",
    tags: [
      { icon: <Asterisk size={14} />, text: "Blocker" },
      { icon: <Square size={10} className="fill-current" />, text: "Accountability" }
    ],
    visual: <img src={ThresholdLogo.src} alt="Threshold" className="w-full h-full object-contain p-12 drop-shadow-2xl" />
  },
  {
    title: "Boomrng",
    description: "Block distracting sites, enforce timed locks, and keep tab count under control.",
    tags: [
      { icon: <Asterisk size={14} />, text: "Focus" },
      { icon: <Square size={10} className="fill-current" />, text: "Productivity" }
    ],
    visual: <img src={BoomrngLogo.src} alt="Boomrng" className="w-full h-full object-contain p-12 drop-shadow-2xl" />
  },
  {
    title: "Budget Planner",
    description: "Set up your savings, spending, and reflect on expenses with our budget tracker to keep you in control.",
    tags: [
      { icon: <Asterisk size={14} />, text: "Finance" },
      { icon: <Square size={10} className="fill-current" />, text: "Tracker" }
    ],
    visual: <img src={BudgetLogo.src} alt="Budget Planner" className="w-full h-full object-contain p-12 drop-shadow-2xl" />
  }
];

export default function StickyScrollSection() {
  return (
    <section className="w-full relative z-10 py-24 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Sticky Info */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col">
            <div className="flex items-center gap-2 text-sm font-medium tracking-widest text-gray-400 mb-6 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Projects
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight mb-8 leading-none">
              These are our projects.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Discover a selection of our most innovative and impactful projects. We take pride in building robust solutions that push boundaries and deliver real value.
            </p>

          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            {content.map((item, index) => (
              <div 
                key={index}
                className="bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-stretch transition-colors hover:bg-[#151515]"
              >
                {/* Card Visual */}
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 border border-white/5 relative flex items-center justify-center shrink-0">
                  {item.visual}
                </div>
                
                {/* Card Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-2">
                  <div className="flex flex-wrap gap-3 mb-5">
                    {item.tags.map((tag, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gray-400 uppercase"
                      >
                        <span>{tag.icon}</span>
                        <span>{tag.text}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function VisualOne() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
      
      {/* Nodes Container */}
      <motion.div 
        key="v1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        {/* Pink Box */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 flex items-center justify-center shadow-[0_0_40px_rgba(244,63,94,0.3)] z-20 relative">
          <Sparkles className="text-white w-10 h-10" />
        </div>
        
        {/* Connection Line going DOWN */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-px h-24 bg-white/30 z-10"></div>
        
        {/* White Dot at the elbow */}
        <div className="absolute top-[calc(50%+96px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white z-30"></div>
        
        {/* Connection Line going LEFT */}
        <div className="absolute top-[calc(50%+96px)] right-1/2 w-48 h-px bg-white/30 z-10 -translate-y-1/2"></div>
        
        {/* User Card */}
        <div className="absolute top-[calc(50%+96px)] right-[calc(50%+192px)] -translate-y-1/2 bg-black border border-white/20 rounded-lg p-2.5 flex items-center gap-3 z-20 min-w-[210px] shadow-2xl">
          <div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 overflow-hidden relative flex items-center justify-center">
            {/* Generic avatar */}
            <div className="w-3 h-3 bg-white/90 rounded-full mb-3" />
            <div className="absolute bottom-0 w-6 h-3 bg-white/90 rounded-t-full" />
          </div>
          <div className="flex flex-col pr-2">
            <span className="text-[13px] font-medium text-white leading-tight">Salesforce Admin</span>
            <span className="text-[11px] text-gray-400 mt-0.5">San Francisco GMT-7</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function VisualTwo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
      
      <motion.div 
        key="v2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6"
      >
        <div className="flex justify-between items-center w-full">
          <div className="bg-[#1A1A1A] border border-white/10 p-3 rounded-xl shadow-xl z-20">
             <AlertCircle className="text-red-400 w-6 h-6" />
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-red-400/30 via-white/10 to-indigo-400/30 mx-2"></div>
          <div className="bg-[#1A1A1A] border border-white/10 p-4 rounded-xl shadow-xl z-20 relative">
             <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]">
               <Server className="text-white w-8 h-8" />
             </div>
          </div>
        </div>
        
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 flex items-center gap-4 w-full shadow-2xl">
           <div className="flex-1 space-y-2">
             <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
             <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
           </div>
           <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs px-2.5 py-1 rounded-md font-medium">Processed</div>
        </div>
      </motion.div>
    </div>
  );
}

function VisualThree() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
      
      <motion.div 
        key="v3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-xs"
      >
        <div className="w-full bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
          
          <div className="flex items-center gap-4 mb-8 mt-2">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <CheckSquare className="text-emerald-400 w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-semibold text-lg">System Secure</div>
              <div className="text-gray-400 text-sm">All checks passed</div>
            </div>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>
                <div className="h-2 flex-1 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function VisualFour() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
      
      <motion.div 
        key="v4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-sm flex items-center justify-center gap-4"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-xl z-20">
             <Database className="text-blue-400 w-8 h-8" />
          </div>
          <div className="text-xs text-gray-400 font-medium">Node A</div>
        </div>
        
        <div className="flex-1 h-0.5 relative flex items-center">
          <div className="absolute inset-0 bg-white/10"></div>
          <motion.div 
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          ></motion.div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-xl z-20">
             <Database className="text-purple-400 w-8 h-8" />
          </div>
          <div className="text-xs text-gray-400 font-medium">Node B</div>
        </div>
      </motion.div>
    </div>
  );
}
