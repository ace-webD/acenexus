'use client'
import Image from "next/image"
import { useEffect, useRef } from 'react'

const images = [
  "/pic1.jpeg",
  "/pic2.jpeg",
  "/pic3.jpeg",
  "/pic4.jpeg",
  "/pic5.jpeg",
  "/pic6.jpeg",
  "/pic7.jpeg",
  "/pic8.jpeg",
  "/pic9.jpeg",
  "/pic10.jpeg",
  "/pic11.jpeg",
  "/pic12.jpeg",
  "/pic13.jpeg",
  
]

export default function InfiniteSlider() {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    el.style.animation = 'none'
    void el.offsetWidth
    el.style.animation = 'scroll 30s linear infinite'
  }, [])

  return (
    <div className="w-full overflow-hidden mt-8">
      <div
        ref={scrollerRef}
        className="flex gap-6 w-max"
        style={{
          animation: 'scroll 30s linear infinite',
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-[350px] h-auto flex-shrink-0 bg-black/10 rounded-xl flex items-center justify-center"
          >
            <Image
              src={src}
              alt="slide"
              width={280}
              height={180}
              className="object-contain hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
            />
          </div>

        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}