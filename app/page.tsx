"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-mario-blue relative overflow-hidden flex flex-col items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/mario-pattern.png')] bg-repeat opacity-10" />
      </div>

      {/* Animated clouds */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Floating coins */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="coin coin-1">🪙</div>
        <div className="coin coin-2">🪙</div>
        <div className="coin coin-3">🪙</div>
      </div>

      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        <div className="star star-1">✨</div>
        <div className="star star-2">✨</div>
        <div className="star star-3">✨</div>
        <div className="star star-4">✨</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-6 flex flex-col items-center">
        {/* Header text - styled like the screenshot */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 transform -rotate-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
        >
          <h1
            className="text-mario-yellow text-4xl md:text-6xl font-bold text-center tracking-wide uppercase stroke-black"
            style={{ WebkitTextStroke: "2px black" }}
          >
            {"IT'S MARIO'S WORLD,"}
          </h1>
          <h2
            className="text-mario-yellow text-3xl md:text-5xl font-bold text-center tracking-wide uppercase stroke-black mt-2"
            style={{ WebkitTextStroke: "2px black" }}
          >
            PLAY ALL YOU WANT.
          </h2>
        </motion.div>

        {/* Main layout with Mario and navigation wheel - enhanced interactive version */}
        <div className="relative w-full flex justify-center items-center my-8">
          <div className="relative flex items-center justify-center">
            {/* Navigation wheel with enhanced 3D effect and interactivity */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Red circle with enhanced 3D effect */}
              <motion.div
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-mario-red border-4 border-black shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_-10px_20px_rgba(0,0,0,0.2)]"
                animate={{
                  rotate: activeSection
                    ? activeSection === "HOT TITLES"
                      ? 45
                      : activeSection === "MARIO HISTORY"
                        ? 135
                        : activeSection === "DOWNLOADS"
                          ? 225
                          : activeSection === "FORUMS"
                            ? 315
                            : 0
                    : 0,
                }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              >
                {/* White center with M - enhanced with glow effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-b from-white to-white/95 rounded-full flex items-center justify-center border-2 border-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_0_15px_rgba(255,255,255,0.7)]">
                  <motion.span
                    className="text-mario-red font-black text-8xl md:text-9xl"
                    style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    M
                  </motion.span>
                </div>

                {/* Dividing lines with subtle glow */}
                <div className="absolute top-[50%] left-0 w-full h-[4px] bg-black transform -translate-y-1/2 z-10 shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
                <div className="absolute top-0 left-[50%] h-full w-[4px] bg-black transform -translate-x-1/2 z-10 shadow-[0_0_5px_rgba(0,0,0,0.5)]" />

                {/* Navigation items - enhanced with better positioning and animations */}
                <div className="absolute top-[15%] right-[-20px] transform rotate-[45deg]">
                  <motion.button
                    whileHover={{ scale: 1.15, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSection(activeSection === "HOT TITLES" ? null : "HOT TITLES")}
                    className={`px-3 py-1.5 rounded-full ${
                      activeSection === "HOT TITLES"
                        ? "bg-white text-mario-red font-bold shadow-md"
                        : "text-white hover:text-mario-yellow"
                    } font-bold text-sm whitespace-nowrap transform -rotate-[45deg] transition-all duration-300`}
                  >
                    HOT TITLES
                  </motion.button>
                </div>

                <div className="absolute top-[15%] left-[-20px] transform rotate-[135deg]">
                  <motion.button
                    whileHover={{ scale: 1.15, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSection(activeSection === "MARIO HISTORY" ? null : "MARIO HISTORY")}
                    className={`px-3 py-1.5 rounded-full ${
                      activeSection === "MARIO HISTORY"
                        ? "bg-white text-mario-red font-bold shadow-md"
                        : "text-white hover:text-mario-yellow"
                    } font-bold text-sm whitespace-nowrap transform -rotate-[135deg] transition-all duration-300`}
                  >
                    MARIO HISTORY
                  </motion.button>
                </div>

                <div className="absolute bottom-[15%] left-[-20px] transform rotate-[225deg]">
                  <motion.button
                    whileHover={{ scale: 1.15, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSection(activeSection === "DOWNLOADS" ? null : "DOWNLOADS")}
                    className={`px-3 py-1.5 rounded-full ${
                      activeSection === "DOWNLOADS"
                        ? "bg-white text-mario-red font-bold shadow-md"
                        : "text-white hover:text-mario-yellow"
                    } font-bold text-sm whitespace-nowrap transform -rotate-[225deg] transition-all duration-300`}
                  >
                    DOWNLOADS
                  </motion.button>
                </div>

                <div className="absolute bottom-[15%] right-[-20px] transform rotate-[315deg]">
                  <motion.button
                    whileHover={{ scale: 1.15, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSection(activeSection === "FORUMS" ? null : "FORUMS")}
                    className={`px-3 py-1.5 rounded-full ${
                      activeSection === "FORUMS"
                        ? "bg-white text-mario-red font-bold shadow-md"
                        : "text-white hover:text-mario-yellow"
                    } font-bold text-sm whitespace-nowrap transform -rotate-[315deg] transition-all duration-300`}
                  >
                    FORUMS
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Mario image - enhanced with interactive animations */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-[-120px] md:left-[-180px] bottom-0 z-20"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="cursor-pointer"
                onClick={() => {
                  // Easter egg - clicking Mario cycles through sections
                  const sections = ["HOT TITLES", "MARIO HISTORY", "DOWNLOADS", "FORUMS"]
                  const currentIndex = sections.indexOf(activeSection || "")
                  const nextIndex = (currentIndex + 1) % sections.length
                  setActiveSection(sections[nextIndex])
                }}
              >
                <div className="relative">
                  <Image
                    src="/images/mario-standing.png"
                    alt="Mario"
                    width={180}
                    height={300}
                    className="drop-shadow-xl"
                    priority
                  />
                  {/* Speech bubble that appears when hovering */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute top-[-60px] left-[50%] transform -translate-x-1/2 bg-white rounded-xl px-3 py-2 shadow-lg border-2 border-mario-red pointer-events-none"
                  >
                    <div className="text-mario-red font-bold text-sm whitespace-nowrap">Click me!</div>
                    {/* Triangle pointer */}
                    <div className="absolute bottom-[-8px] left-[50%] transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Content sections with enhanced animations */}
        <motion.div layout className="w-full">
          {activeSection && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full mt-4 bg-white/90 rounded-xl p-6 shadow-[0_10px_25px_rgba(0,0,0,0.25)] backdrop-blur-sm border-2 border-white/50"
            >
              {activeSection === "HOT TITLES" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                  className="space-y-4"
                >
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-3xl font-bold text-mario-red border-b-2 border-mario-red pb-2 inline-block"
                  >
                    Hot Titles
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <GameCard
                      title="Super Mario Sunshine"
                      image="/images/mario-sunshine.jpg"
                      description="Join Mario on his tropical vacation turned cleanup mission!"
                      delay={0.1}
                    />
                    <GameCard
                      title="Mario Kart: Double Dash!!"
                      image="/images/mario-kart.jpg"
                      description="Race with a partner in this exciting Mario Kart adventure!"
                      delay={0.2}
                    />
                    <GameCard
                      title="Paper Mario: The Thousand-Year Door"
                      image="/images/paper-mario.jpg"
                      description="Embark on an epic paper-thin RPG adventure!"
                      delay={0.3}
                    />
                  </div>
                </motion.div>
              )}

              {activeSection === "MARIO HISTORY" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-3xl font-bold text-mario-red border-b-2 border-mario-red pb-2 inline-block"
                  >
                    The Legend of Mario
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg"
                  >
                    Since his debut in 1981's Donkey Kong, Mario has become Nintendo's mascot and one of the most
                    recognizable characters in gaming history. Created by Shigeru Miyamoto, this Italian plumber has
                    starred in over 200 games across various genres.
                  </motion.p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <HistoryCard
                      year="1981"
                      title="Donkey Kong"
                      description="Mario's first appearance (as 'Jumpman')"
                      delay={0.2}
                    />
                    <HistoryCard
                      year="1985"
                      title="Super Mario Bros."
                      description="The NES classic that defined platforming"
                      delay={0.3}
                    />
                    <HistoryCard
                      year="1996"
                      title="Super Mario 64"
                      description="Revolutionary 3D platforming"
                      delay={0.4}
                    />
                    <HistoryCard
                      year="2002"
                      title="Super Mario Sunshine"
                      description="Mario's tropical adventure"
                      delay={0.5}
                    />
                  </div>
                </motion.div>
              )}

              {activeSection === "DOWNLOADS" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-3xl font-bold text-mario-red border-b-2 border-mario-red pb-2 inline-block"
                  >
                    Mario Downloads
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <DownloadCard title="Wallpapers" icon="image" count={12} delay={0.1} />
                    <DownloadCard title="Ringtones" icon="music" count={8} delay={0.2} />
                    <DownloadCard title="Screensavers" icon="monitor" count={4} delay={0.3} />
                    <DownloadCard title="Game Demos" icon="gamepad" count={2} delay={0.4} />
                  </div>
                </motion.div>
              )}

              {activeSection === "FORUMS" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-3xl font-bold text-mario-red border-b-2 border-mario-red pb-2 inline-block"
                  >
                    Mario Community
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg"
                  >
                    Join thousands of Mario fans discussing everything from game strategies to favorite characters!
                  </motion.p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <ForumCard title="Game Strategies" posts={1243} lastPost="2 hours ago" delay={0.2} />
                    <ForumCard title="Fan Art" posts={876} lastPost="5 hours ago" delay={0.3} />
                    <ForumCard title="Character Discussion" posts={2156} lastPost="1 hour ago" delay={0.4} />
                    <ForumCard title="Speedrunning" posts={543} lastPost="3 hours ago" delay={0.5} />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Newsletter and current titles links - enhanced with better animations */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full flex flex-col md:flex-row justify-between items-center mt-12 gap-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <Link href="#" className="flex items-center relative z-10">
              <span className="text-mario-red font-bold text-lg md:text-xl uppercase mr-2 group-hover:underline">
                Sign up for the Mario Newsletter
              </span>
              <motion.span
                className="text-mario-yellow font-bold text-sm uppercase bg-mario-red px-3 py-1.5 rounded-full group-hover:bg-black transition-colors shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Click Here
              </motion.span>
            </Link>
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-mario-red/20 filter blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <Link href="#" className="flex items-center relative z-10">
              <span className="text-mario-yellow font-bold text-lg md:text-xl uppercase mr-2 group-hover:underline">
                See Current Titles
              </span>
              <motion.span
                className="text-mario-yellow font-bold text-sm uppercase bg-mario-red px-3 py-1.5 rounded-full group-hover:bg-black transition-colors shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View All
              </motion.span>
            </Link>
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-mario-yellow/20 filter blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>

        {/* Bottom links - styled like the screenshot */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full flex flex-col md:flex-row justify-between items-center mt-12 pb-8"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
            <Link href="#" className="transition-transform hover:scale-110">
              <Image
                src="/images/mario-pointing.jpg"
                alt="Nintendo GameCube"
                width={100}
                height={40}
                className="h-auto drop-shadow-md"
              />
            </Link>
            <Link href="#" className="transition-transform hover:scale-110">
              <Image
                src="/images/nintendo-ds.jpg"
                alt="Nintendo DS"
                width={100}
                height={40}
                className="h-auto drop-shadow-md"
              />
            </Link>
            <Link href="#" className="transition-transform hover:scale-110">
              <Image
                src="/images/mario-pointing.png"
                alt="Game Boy Advance"
                width={100}
                height={40}
                className="h-auto drop-shadow-md"
              />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="#" className="transition-transform hover:scale-110">
              <Image
                src="/images/e.jpg"
                alt="ESRB Rating"
                width={60}
                height={80}
                className="h-auto drop-shadow-md"
              />
            </Link>
            <Link href="#" className="transition-transform hover:scale-110">
              <Image
                src="/images/mario-pointing.png"
                alt="Privacy Certified"
                width={100}
                height={80}
                className="h-auto drop-shadow-md"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

// Game Card Component
function GameCard({
  title,
  image,
  description,
  delay = 0,
}: { title: string; image: string; description: string; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        y: -5,
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-mario-red/20 transition-all duration-300"
    >
      <div className="h-48 relative overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h4 className="text-xl font-bold text-mario-red">{title}</h4>
        <p className="text-gray-700 mt-1">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#0066b3" }}
          whileTap={{ scale: 0.95 }}
          className="mt-3 bg-mario-red text-white px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-md"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}

// History Card Component
function HistoryCard({
  year,
  title,
  description,
  delay = 0,
}: { year: string; title: string; description: string; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        y: -5,
      }}
      className="bg-white/80 rounded-xl p-4 shadow-md border border-mario-red/10 transition-all duration-300"
    >
      <div className="text-mario-red font-bold text-xl">{year}</div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-gray-700 mt-1">{description}</p>
    </motion.div>
  )
}

// Download Card Component
function DownloadCard({
  title,
  icon,
  count,
  delay = 0,
}: { title: string; icon: string; count: number; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        y: -5,
      }}
      className="bg-white/90 rounded-xl p-5 shadow-md flex items-center space-x-5 border border-mario-red/10 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="bg-mario-red rounded-full w-14 h-14 flex items-center justify-center text-white shadow-md"
      >
        <span className="text-3xl">
          {icon === "image" ? "🖼️" : icon === "music" ? "🎵" : icon === "monitor" ? "🖥️" : "🎮"}
        </span>
      </motion.div>
      <div>
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-gray-700">{count} items available</p>
        <motion.button
          whileHover={{ x: 5 }}
          className="mt-2 text-mario-blue hover:text-mario-red text-sm font-bold flex items-center transition-colors duration-300"
        >
          Download{" "}
          <motion.span whileHover={{ x: 3 }} className="ml-1 transition-transform duration-300">
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  )
}

// Forum Card Component
function ForumCard({
  title,
  posts,
  lastPost,
  delay = 0,
}: { title: string; posts: number; lastPost: string; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        y: -5,
      }}
      className="bg-white/90 rounded-xl p-5 shadow-md border border-mario-red/10 transition-all duration-300"
    >
      <h4 className="font-bold text-xl">{title}</h4>
      <div className="flex justify-between text-gray-700 mt-2">
        <span>{posts.toLocaleString()} posts</span>
        <span>Last post: {lastPost}</span>
      </div>
      <motion.button
        whileHover={{ scale: 1.03, backgroundColor: "#cc0000" }}
        whileTap={{ scale: 0.97 }}
        className="mt-3 bg-mario-blue text-white px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-md w-full"
      >
        Join Discussion
      </motion.button>
    </motion.div>
  )
}

