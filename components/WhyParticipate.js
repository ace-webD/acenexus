import { Terminal, Globe, Users, Compass } from 'lucide-react'

export const WhyParticipate = () => {
  return (
    <>
      {/* Mobile */}
      <div className="bg-[#1c160c] flex flex-col mt-10 py-10 items-center gap-y-5 md:hidden">
        <div className="font-mono text-xl py-2 text-center border-b border-[#6b4f1d] text-[#FFD34D] px-4 uppercase tracking-wider">
          Why Participate?
        </div>

        <div className="bg-[#2a2012] border border-[#4d3813] hover:border-[#FFC629] hover:shadow-[0_0_20px_rgba(255,198,41,0.25)] transition-all duration-300 flex flex-row rounded-2xl w-[90%] p-4 items-center">
          <div className="bg-[#1c160c] p-3 rounded-xl">
            <Terminal className="w-8 h-8 text-[#FFC629]" />
          </div>
          <div className="ml-4 text-[#E8DCC5]">
            Take part in practical, guided sessions through hands-on workshops
          </div>
        </div>

        <div className="bg-[#2a2012] border border-[#4d3813] hover:border-[#FFC629] hover:shadow-[0_0_20px_rgba(255,198,41,0.25)] transition-all duration-300 flex flex-row rounded-2xl w-[90%] p-4 items-center">
          <div className="bg-[#1c160c] p-3 rounded-xl">
            <Compass className="w-8 h-8 text-[#FFC629]" />
          </div>
          <div className="ml-4 text-[#E8DCC5]">
            Explore multiple technology domains
          </div>
        </div>

        <div className="bg-[#2a2012] border border-[#4d3813] hover:border-[#FFC629] hover:shadow-[0_0_20px_rgba(255,198,41,0.25)] transition-all duration-300 flex flex-row rounded-2xl w-[90%] p-4 items-center">
          <div className="bg-[#1c160c] p-3 rounded-xl">
            <Users className="w-8 h-8 text-[#FFC629]" />
          </div>
          <div className="ml-4 text-[#E8DCC5]">
            Meet like-minded peers from the domains you're interested in
          </div>
        </div>

        <div className="bg-[#2a2012] border border-[#4d3813] hover:border-[#FFC629] hover:shadow-[0_0_20px_rgba(255,198,41,0.25)] transition-all duration-300 flex flex-row rounded-2xl w-[90%] p-4 items-center">
          <div className="bg-[#1c160c] p-3 rounded-xl">
            <Globe className="w-8 h-8 text-[#FFC629]" />
          </div>
          <div className="ml-4 text-[#E8DCC5]">
            Gain real world technical exposure
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col bg-[#1c160c] py-24 px-10 items-center w-full mt-10">
        <div className="font-mono text-4xl py-4 text-center border-b border-[#6b4f1d] text-[#FFD34D] mb-16 px-12 uppercase tracking-[0.2em]">
          Why Participate?
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">

          <div className="group bg-[#2a2012] border border-[#4d3813] rounded-3xl p-8 flex items-center transition-all duration-500 hover:border-[#FFC629] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,198,41,0.18)]">
            <div className="bg-[#1c160c] p-5 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Terminal className="w-12 h-12 text-[#FFC629]" />
            </div>

            <div className="ml-8 text-xl text-[#E8DCC5] leading-relaxed font-medium">
              Take part in practical, guided sessions through hands-on workshops
            </div>
          </div>

          <div className="group bg-[#2a2012] border border-[#4d3813] rounded-3xl p-8 flex items-center transition-all duration-500 hover:border-[#FFC629] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,198,41,0.18)]">
            <div className="bg-[#1c160c] p-5 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Compass className="w-12 h-12 text-[#FFC629]" />
            </div>

            <div className="ml-8 text-xl text-[#E8DCC5] leading-relaxed font-medium">
              Explore multiple technology domains
            </div>
          </div>

          <div className="group bg-[#2a2012] border border-[#4d3813] rounded-3xl p-8 flex items-center transition-all duration-500 hover:border-[#FFC629] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,198,41,0.18)]">
            <div className="bg-[#1c160c] p-5 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Users className="w-12 h-12 text-[#FFC629]" />
            </div>

            <div className="ml-8 text-xl text-[#E8DCC5] leading-relaxed font-medium">
              Meet like-minded peers from the domains you're interested in
            </div>
          </div>

          <div className="group bg-[#2a2012] border border-[#4d3813] rounded-3xl p-8 flex items-center transition-all duration-500 hover:border-[#FFC629] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,198,41,0.18)]">
            <div className="bg-[#1c160c] p-5 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Globe className="w-12 h-12 text-[#FFC629]" />
            </div>

            <div className="ml-8 text-xl text-[#E8DCC5] leading-relaxed font-medium">
              Gain real world technical exposure
            </div>
          </div>

        </div>
      </div>
    </>
  )
}