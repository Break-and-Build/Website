"use client";

import React from "react";

const team = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    bio: "Alice has over 15 years of experience in strategic leadership and business development.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Carter Botosh",
    role: "Chief Financial Officer",
    bio: "Carter is an expert in financial planning, risk management, and corporate strategy.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Phillip Ekstrom",
    role: "Head of Technology",
    bio: "Phillip drives our technical vision with a focus on scalable and secure architecture.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Abram Culhane",
    role: "Head of Operations",
    bio: "Abram ensures smooth daily operations and continuous process improvements.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Designer",
    bio: "Sarah creates stunning, user-centric designs that elevate our brand identity.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "David Chen",
    role: "Senior Engineer",
    bio: "David specializes in full-stack development and cloud infrastructure optimization.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    bio: "Elena crafts compelling marketing campaigns that resonate with our target audience.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Michael Chang",
    role: "Product Manager",
    bio: "Michael bridges the gap between engineering and user needs to deliver great products.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&h=1000",
    linkedin: "https://linkedin.com"
  }
];

export default function TeamSection() {
  return (
    <section className="w-full relative z-10 py-24 bg-black text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-white/20 rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase mb-6">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none max-w-2xl">
            Explore our comprehensive<br className="hidden md:block" /> team expertise
          </h2>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[3/4] rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#111] cursor-pointer"
            >
              {/* Default Background Image */}
              {member.image && (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              {/* Default Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>
              
              {/* Default State Text (hidden on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center pb-8 transition-opacity duration-300 group-hover:opacity-0 z-10">
                <h3 className="text-xl font-bold mb-1.5">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>

              {/* Hover Overlay - Custom Teal/Blue */}
              <div className="absolute inset-0 bg-[#A1DDFB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8 z-20">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-black">{member.name}</h3>
                  <p className="text-gray-800 text-sm mb-6 font-medium">{member.role}</p>
                  <p className="text-black/90 text-sm md:text-[15px] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="mt-auto">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#A1DDFB] hover:bg-gray-800 transition-colors shadow-lg" aria-label="LinkedIn Profile">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
