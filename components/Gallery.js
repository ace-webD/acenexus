import React from 'react'
import InfiniteSlider from './InfiniteSlider'

export const Gallery = () => {
  return (
    <>
      {/* Mobile */}
      <div
        className="flex flex-col items-center bg-[#1c160c] py-8 md:hidden"
        id="gallery-sm"
      >
        <div className="text-[#FFD34D] border-b border-[#4A3200] text-xl py-2 mb-8">
          <code>Previous NEXUS Gallery</code>
        </div>

        <InfiniteSlider />
      </div>

      {/* Desktop */}
      <div
        className="hidden md:flex flex-col items-center bg-[#1c160c] py-20 w-full"
        id="gallery-md"
      >
        <div className="text-[#FFD34D] border-b border-[#4A3200] text-3xl py-4 px-10 mb-8">
          <code>Previous NEXUS Gallery</code>
        </div>

        <InfiniteSlider />
      </div>
    </>
  )
}