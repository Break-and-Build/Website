"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
        <ShaderGradientCanvas>
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={0.8}
            cAzimuthAngle={270}
            cDistance={0.5}
            cPolarAngle={180}
            cameraZoom={15.1}
            color1="#73bfc4"
            color2="#ff810a"
            color3="#8da0ce"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="env"
            pixelDensity={1}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.4}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            shader="defaults"
            type="sphere"
            uAmplitude={3.2}
            uDensity={0.8}
            uFrequency={5.5}
            uSpeed={0.3}
            uStrength={0.3}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
      
      {/* Navbar */}
      <nav className="w-full max-w-7xl px-6 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="text-orange-500">
            <ArrowUpRight strokeWidth={3} size={24} />
          </div>
          <span className="text-xl font-medium tracking-tight">Break & Build</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">
          <span>Community</span>
          <ChevronDown size={14} className="opacity-70" />
        </div>

        <div>
          <button className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center z-10 mt-20 mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Build small, <br />
          <span className="text-gray-300">solve real problems.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-white mb-10 max-w-2xl font-light leading-relaxed"
        >
          We’re a community of builders who believe great products are iterated. Start small, ship fast, improve always.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex w-full max-w-md mx-auto relative"
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-[#1A1A1A] border border-gray-800 text-white pl-4 pr-36 py-4 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
          />
          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#FF4500] hover:bg-[#FF5722] text-white px-6 rounded-lg font-medium text-sm transition-colors shadow-[0_0_15px_rgba(255,69,0,0.3)]">
            Join Now
          </button>
        </motion.div>
      </section>

      {/* Footer / Logos section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-5xl px-6 pb-12 z-10"
      >
        <p className="text-center text-sm text-gray-500 mb-8 font-medium uppercase tracking-widest">What We Build</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
          <div className="text-xl font-bold font-sans tracking-tighter">PLUGINS</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-blue-600" />
            <span className="font-semibold tracking-tight">Extensions</span>
          </div>
          <div className="flex items-center gap-2 border border-gray-600 px-3 py-1 rounded">
            <span className="font-medium">Web Apps</span>
          </div>
          <div className="text-lg font-mono tracking-tight font-bold">Micro_Utilities</div>
          <div className="flex items-center gap-1">
            <span className="font-serif italic text-xl">Productivity</span>
            <span className="font-bold">Tools</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
