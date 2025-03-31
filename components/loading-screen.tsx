"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [showTip, setShowTip] = useState(false)
  const [tipIndex, setTipIndex] = useState(0)

  const tips = [
    "Mario's original name was 'Jumpman' in Donkey Kong!",
    "Mario's profession is a plumber, but he's rarely seen doing plumbing!",
    "Mario has appeared in over 200 video games since his creation!",
    "Mario was created by legendary game designer Shigeru Miyamoto!",
    "Mario's brother Luigi was named after a pizza place near Nintendo's offices!",
  ]

  useEffect(() => {
    // Show a random tip
    setTipIndex(Math.floor(Math.random() * tips.length))

    // Show tip after 1 second
    const tipTimer = setTimeout(() => {
      setShowTip(true)
    }, 1000)

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearInterval(interval)
      clearTimeout(tipTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-mario-blue flex flex-col items-center justify-center z-50 p-4">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/mario-pattern.png')] bg-repeat opacity-10" />
      </div>

      {/* Enhanced animated clouds with better effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Enhanced floating coins */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="coin coin-1">🪙</div>
        <div className="coin coin-2">🪙</div>
        <div className="coin coin-3">🪙</div>
      </div>

      {/* Enhanced stars */}
      <div className="absolute inset-0 z-0">
        <div className="star star-1">✨</div>
        <div className="star star-2">✨</div>
      </div>

      <div className="w-full max-w-md flex flex-col items-center relative z-10">
        {/* Logo animation with enhanced effects */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="relative w-[150px] h-[150px]">
            {/* Red circle with enhanced 3D effect */}
            <div className="absolute inset-0 bg-mario-red rounded-full border-4 border-black flex items-center justify-center shadow-[inset_0_-8px_15px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.3)]">
              {/* White center with enhanced gradient */}
              <div className="w-[70%] h-[70%] bg-gradient-to-b from-white to-white/95 rounded-full flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                {/* M letter with enhanced styling */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="text-mario-red font-black text-center"
                  style={{
                    fontSize: 75,
                    lineHeight: 1,
                    textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  M
                </motion.div>
              </div>
            </div>

            {/* Dividing lines with subtle glow */}
            <div className="absolute top-[50%] left-0 w-full h-[4px] bg-black transform -translate-y-1/2 shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
            <div className="absolute top-0 left-[50%] h-full w-[4px] bg-black transform -translate-x-1/2 shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </motion.div>

        {/* Loading text with enhanced styling */}
        <motion.h2
          animate={{ scale: [1, 1.05, 1], color: ["#ffcc00", "#ffdd33", "#ffcc00"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="text-mario-yellow text-3xl font-bold mb-6 pulse-effect"
          style={{ WebkitTextStroke: "1.5px black", textShadow: "0 4px 0 rgba(0,0,0,0.5)" }}
        >
          Loading Mario&apos;s World...
        </motion.h2>

        {/* Progress bar with enhanced styling */}
        <div className="w-full h-8 bg-white/20 rounded-full overflow-hidden mb-6 border-2 border-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
          <motion.div
            className="h-full bg-gradient-to-r from-mario-red to-mario-red/90"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />

          {/* Animated progress percentage */}
          <div className="relative">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm"
              animate={{ scale: progress === 100 ? [1, 1.2, 1] : 1 }}
              transition={{ repeat: progress === 100 ? Number.POSITIVE_INFINITY : 0, duration: 0.5 }}
            >
              {progress}%
            </motion.div>
          </div>
        </div>

        {/* Mario running animation with enhanced effects */}
        <div
          className="relative w-full h-16 mb-8"
          style={{
            transform: `translateX(${progress - 10}%)`,
            transition: "transform 100ms ease-out",
          }}
        >
          <motion.div
            className="absolute left-0 top-0 transform -translate-x-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
          >
            <Image
              src="/images/mario-running.png"
              alt="Mario Running"
              width={60}
              height={60}
              className="h-auto drop-shadow-lg"
            />

            {/* Add coin collection effect */}
            {progress > 30 && progress < 90 && progress % 20 < 2 && (
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 text-mario-yellow font-bold"
              >
                +1
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Random tip with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showTip ? 1 : 0,
            y: showTip ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 p-4 rounded-xl max-w-sm text-center shadow-lg border-2 border-mario-red/30"
        >
          <motion.p
            animate={{ color: ["#0066b3", "#0077cc", "#0066b3"] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            className="text-mario-blue font-bold text-lg"
          >
            Did you know?
          </motion.p>
          <p>{tips[tipIndex]}</p>
        </motion.div>
      </div>
    </div>
  )
}

