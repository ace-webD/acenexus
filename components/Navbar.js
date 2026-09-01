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
          <Link
            to="about-sm"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="text-xs font-semibold text-[#D6C4A5] uppercase cursor-pointer hover:text-[#FFC629] transition-colors"
          >
            About
          </Link>

          {/* Events */}
          <Link
            to="events-sm"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="text-xs font-semibold text-[#D6C4A5] uppercase cursor-pointer hover:text-[#FFC629] transition-colors"
          >
            Events
          </Link>

          {/* Timeline */}
          <Link
            to="timeline-sm"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="text-xs font-semibold text-[#D6C4A5] uppercase cursor-pointer hover:text-[#FFC629] transition-colors"
          >
            Timeline
          </Link>

          {/* Gallery */}
          <Link
            to="gallery-sm"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="text-xs font-semibold text-[#D6C4A5] uppercase cursor-pointer hover:text-[#FFC629] transition-colors"
          >
            Gallery
          </Link>
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
          <Link
            to="about-md"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300"
          >
            About
          </Link>

          <Link
            to="events-md"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300"
          >
            Events
          </Link>

          <Link
            to="timeline-md"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300"
          >
            Timeline
          </Link>

          <Link
            to="gallery-md"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="cursor-pointer text-[#D6C4A5] hover:text-[#FFC629] transition-colors duration-300"
          >
            Gallery
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .active {
          color: #ffc629 !important;
          position: relative;
        }

        .active::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -6px;
          width: 18px;
          height: 2px;
          background: #ffc629;
          border-radius: 999px;
        }
      `}</style>
    </>
  )
}