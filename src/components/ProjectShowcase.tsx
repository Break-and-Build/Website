"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ThresholdLogo from "@/Assets/Project logo/Threshold.png";
import BoomrngLogo from "@/Assets/Project logo/Boomrng Plugin.png";
import BudgetLogo from "@/Assets/Project logo/Budget Tracker Icon.png";

const projects = [
  {
    id: "threshold",
    title: "Threshold",
    logo: ThresholdLogo.src,
    description: "Permanent site blocker locked behind an accountability partner.\n72-hour wait on every change—no willpower test.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900"
  },
  {
    id: "boomrng",
    title: "Boomrng",
    logo: BoomrngLogo.src,
    description: "Block distracting sites, enforce timed locks,\nand keep tab count under control.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600&h=900"
  },
  {
    id: "budget",
    title: "Budget Planner",
    logo: BudgetLogo.src,
    description: "Set up your savings, spending, and reflect on expenses\nwith our budget tracker to keep you in control.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600&h=900"
  }
];

const AUTO_PLAY_INTERVAL = 5000;

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Handlers
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const selectProject = (index: number) => {
    setActiveIndex(index);
  };

  const activeProject = projects[activeIndex];

  return (
    <section className="w-full relative z-10 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Navigation Bar */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto hide-scrollbar pb-2 md:pb-0">
            {/* Prev Arrow */}
            <button 
              onClick={prevProject}
              className="w-12 h-12 shrink-0 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-white/10 flex items-center justify-center transition-colors shadow-lg"
            >
              <ArrowLeft size={20} />
            </button>
            
            {/* Tabs */}
            <div className="flex items-center bg-[#111] p-1.5 rounded-full border border-white/5 shadow-inner">
              {projects.map((proj, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => selectProject(idx)}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      isActive 
                        ? "bg-[#A1DDFB] text-black shadow-lg" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <img 
                      src={proj.logo} 
                      alt={proj.title} 
                      className={`w-5 h-5 object-contain transition-all ${isActive ? "brightness-0" : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"}`}
                    />
                    {proj.title}
                  </button>
                );
              })}
            </div>

            {/* Next Arrow with Progress */}
            <button 
              onClick={nextProject}
              className="relative w-12 h-12 shrink-0 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-white/10 flex items-center justify-center transition-colors group shadow-lg"
            >
              <ArrowRight size={20} className="text-gray-300 group-hover:text-white relative z-10" />
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
                <motion.circle 
                  key={activeIndex}
                  cx="24" cy="24" r="22" 
                  fill="none" 
                  stroke="#A1DDFB" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="138.23"
                  initial={{ strokeDashoffset: 138.23 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                  onAnimationComplete={nextProject}
                  className="opacity-80"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-6 text-center max-w-3xl mx-auto min-h-[60px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg md:text-xl text-white font-light leading-relaxed whitespace-pre-line"
            >
              {activeProject.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Screenshot Container */}
        <div className="w-full aspect-video bg-[#111] rounded-[2rem] border border-white/10 p-2 md:p-4 overflow-hidden shadow-2xl relative group mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full relative rounded-xl md:rounded-[1.5rem] overflow-hidden bg-black"
            >
              {/* Fallback pattern for when images are loading or missing */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              
              <img 
                src={activeProject.image} 
                alt={`${activeProject.title} Dashboard`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 ease-out opacity-90 hover:opacity-100"
              />
              
              {/* Inner gradient for depth */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl md:rounded-[1.5rem] pointer-events-none"></div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
