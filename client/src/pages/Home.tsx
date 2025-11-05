import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-slate-950 min-h-screen">
      {/* Animated background lights covering entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 400, 800, 200, 0],
            y: [0, 300, -200, 400, 0],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -600, -200, -800, 0],
            y: [0, 400, 200, -100, 0],
            scale: [1, 0.9, 1.4, 0.85, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, -300, 500, -400, 0],
            y: [0, -500, -300, -600, 0],
            scale: [1, 1.2, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 300, -400, 600, 0],
            y: [0, -400, -100, -500, 0],
            scale: [1, 1.1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
