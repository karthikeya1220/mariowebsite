"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import MarioLogo from "./mario-logo"

const navItems = [
  { name: "HOT TITLES", angle: 45, href: "#hot-titles" },
  { name: "MARIO HISTORY", angle: 135, href: "#mario-history" },
  { name: "DOWNLOADS", angle: 225, href: "#downloads" },
  { name: "FORUMS", angle: 315, href: "#forums" },
]

interface NavigationWheelProps {
  activeSection: string | null
  setActiveSection: (section: string | null) => void
}

export default function NavigationWheel({ activeSection, setActiveSection }: NavigationWheelProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [wheelRotation, setWheelRotation] = useState(0)

  // Rotate wheel when active section changes
  useEffect(() => {
    if (activeSection) {
      const item = navItems.find((item) => item.name === activeSection)
      if (item) {
        setWheelRotation(item.angle - 45) // Adjust to align with the active section
      }
    } else {
      setWheelRotation(0)
    }
  }, [activeSection])

  const handleItemClick = (itemName: string) => {
    setActiveSection(activeSection === itemName ? null : itemName)
  }

  return (
    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
      {/* Main wheel with 3D effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-mario-red border-4 border-black transition-transform duration-700 shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_-10px_20px_rgba(0,0,0,0.2)]"
        style={{ transform: `rotate(${wheelRotation}deg)` }}
        animate={{ rotate: wheelRotation }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        {/* Navigation items */}
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleItemClick(item.name)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none"
            style={{
              transformOrigin: "center",
              rotate: `${item.angle}deg`,
            }}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div
              className={`absolute whitespace-nowrap font-bold text-sm md:text-base px-3 py-1.5 rounded-full transition-all duration-300 ${
                activeSection === item.name
                  ? "text-mario-red bg-white scale-110 shadow-md"
                  : hoveredItem === item.name
                    ? "text-white bg-black/30"
                    : "text-white"
              }`}
              style={{
                transformOrigin: "center",
                rotate: `-${item.angle}deg`,
                left: "100%",
              }}
              animate={{
                x: activeSection === item.name ? 20 : hoveredItem === item.name ? 15 : 10,
                y: "-50%",
                scale: activeSection === item.name ? 1.1 : hoveredItem === item.name ? 1.05 : 1,
              }}
              whileHover={{ scale: activeSection === item.name ? 1.1 : 1.05 }}
            >
              {item.name}
            </motion.div>
          </button>
        ))}
      </motion.div>

      {/* Center logo */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <MarioLogo size={180} />
      </motion.div>

      {/* Dividing lines */}
      <div className="absolute top-[50%] left-0 w-full h-[4px] bg-black transform -translate-y-1/2 z-10" />
      <div className="absolute top-0 left-[50%] h-full w-[4px] bg-black transform -translate-x-1/2 z-10" />
    </div>
  )
}

