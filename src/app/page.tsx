"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import StickyScrollSection from "@/components/StickyScrollSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import TeamSection from "@/components/TeamSection";

const ShaderGradientAny = ShaderGradient as any;

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
        <ShaderGradientCanvas>
          <ShaderGradientAny
            animate="on"
            axesHelper="off"
            brightness={1}
            cAzimuthAngle={180}
            cDistance={3.6}
            cPolarAngle={90}
            cameraZoom={1}
            color1="#A1DDFB"
            color2="#405863"
            color3="#405863"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={1}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="plane"
            uAmplitude={1}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.4}
            uStrength={4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
      
      {/* Navbar */}
      <nav className="w-full max-w-[1440px] px-6 lg:px-12 py-6 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Break & Build Logo" width={280} height={64} className="h-16 w-auto object-contain" priority />
        </Link>
        
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
      <section className="flex-1 w-full flex flex-col items-center justify-center text-center z-10 mt-12 pb-[100px]">
        <div className="w-full max-w-4xl px-6 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl font-[800] tracking-tight text-white mb-2 leading-[1.1]"
        >
          Break things. <br />
          <span className="text-gray-300">Build better ones.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-white mb-4 max-w-2xl font-light leading-relaxed"
        >
          We’re a community of builders who believe great products are iterated. Start small, ship fast, improve always.
        </motion.p>
        </div>


        {/* Project Showcase moved inside Hero */}
        <div className="w-full mt-6">
          <ProjectShowcase />
        </div>


      </section>
      
      <StickyScrollSection />

      <TeamSection />

      {/* Footer / Logos section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-[1440px] px-6 lg:px-12 pb-12 z-10"
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
