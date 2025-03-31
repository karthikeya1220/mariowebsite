"use client"

import { motion } from "framer-motion"
import type { CSSProperties } from "react"

interface MarioLogoProps {
  size?: number
  style?: CSSProperties
  className?: string
}

export default function MarioLogo({ size = 100, style, className }: MarioLogoProps) {
  return (
    <motion.div
      className={`relative ${className || ""}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Outer red circle with enhanced 3D effect */}
      <div className="absolute inset-0 bg-mario-red rounded-full border-4 border-black flex items-center justify-center shadow-[inset_0_-8px_15px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.3)]">
        {/* Inner white circle with subtle gradient */}
        <div className="w-[70%] h-[70%] bg-gradient-to-b from-white to-white/90 rounded-full flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
          {/* M letter with enhanced styling */}
          <div
            className="text-mario-red font-black text-center"
            style={{
              fontSize: size * 0.5,
              lineHeight: 1,
              textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
            }}
          >
            M
          </div>
        </div>
      </div>

      {/* Dividing lines */}
      <div className="absolute top-[50%] left-0 w-full h-[4px] bg-black transform -translate-y-1/2" />
      <div className="absolute top-0 left-[50%] h-full w-[4px] bg-black transform -translate-x-1/2" />
    </motion.div>
  )
}

