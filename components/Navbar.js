'use client'

import Image from "next/image"
import { Link } from "react-scroll"

export const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="bg-[#1A1205] md:hidden flex flex-col w-full border-b border-[#4A3200] sticky top-0 z-50 backdrop-blur-md">
        <div className="flex flex-row py-5 px-6 justify-center items-center w-full">
          <a href="/">
            <Image
              src="/nexus_new.png"
              alt="Nexus Logo"
              width={200}
              height={200}
            />
          </a>
        </div>

        <div className="flex flex-row justify-around pb-4 px-2 overflow-x-auto no-scrollbar">
          {/* About */}
          <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
            <div className="text-xs font-semibold text-[#D6C4A5] uppercase cursor-pointer hover:text-[#FFC629] transition-colors">
              <Link to="about-sm" smooth={true} duration={500}>
                About
              </Link>
            </div>
          </div>

          {/* Events */}
          <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
            <div className="text-xs font-semibold text-[#FFC629] uppercase cursor-pointer">
              <Link to="events-sm" smooth={true} duration={500}>
                Events
              </Link>
            </div>
            <div className="h-[2px] w-4 bg-[#FFC629] mt-1"></div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
            <div className="text-xs font-semibold text-[#D6C4A5] uppercase cursor-pointer hover:text-[#FFC629] transition-colors">
              <Link to="timeline-sm" smooth={true} duration={500}>
                Timeline
              </Link>
            </div>
          </div>

          {/* Gallery */}
          <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
            <div className="text-xs font-semibold text-[#D6C4A5] uppercase cursor-pointer hover:text-[#FFC629] transition-colors">
              <Link to="gallery-sm" smooth={true} duration={500}>
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-row py-8 px-12 justify-between items-center w-full border-b border-[#4A3200] bg-[#1A1205] sticky top-0 z-50 backdrop-blur-md">
        <div>
          <a href="/">
            <Image
              src="/nexus_new.png"
              alt="Nexus Logo"
              width={240}
              height={240}
            />
          </a>
        </div>

        <div className="flex flex-row gap-x-10 font-mono text-sm uppercase tracking-widest">
          {/* About */}
          <div className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300">
            <Link to="about-md" smooth={true} duration={500}>
              About
            </Link>
          </div>

          {/* Events */}
          <div className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300">
            <Link to="events-md" smooth={true} duration={500}>
              Events
            </Link>
          </div>

          {/* Timeline */}
          <div className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300">
            <Link to="timeline-md" smooth={true} duration={500}>
              Timeline
            </Link>
          </div>

          {/* Gallery */}
          <div className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300">
            <Link to="gallery-md" smooth={true} duration={500}>
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}