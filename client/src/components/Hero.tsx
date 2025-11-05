import GlassCard from "./GlassCard";
import { Terminal, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";
import resumePdf from "@assets/Resume_1762335533633.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home" role="banner">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <GlassCard className="p-6 sm:p-8 md:p-12 hover:shadow-2xl transition-shadow duration-500">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="relative">
                <Terminal className="w-12 h-12 md:w-14 md:h-14 text-primary" />

              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              Syed Ahamed
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="font-mono text-lg sm:text-xl md:text-2xl text-primary">
                DEVOPS ENGINEER
              </span>
              <span className="inline-block w-2 h-5 md:h-6 bg-primary animate-blink" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center gap-2 text-muted-foreground mb-6"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm md:text-base">Chennai, India</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm sm:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed px-2"
            >
              Dynamic DevOps Engineer with over two years of experience in managing and automating 
              large-scale infrastructure across maritime environments. Expertise in containerization, 
              CI/CD pipelines, and cloud services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-8"
            >
              <a 
                href="#contact" 
                className="group relative px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate active-elevate-2 transition-all overflow-hidden"
                data-testid="button-contact"
                aria-label="Navigate to contact section"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 bg-white/5 text-foreground border border-white/10 rounded-lg font-medium hover:bg-white/10 hover-elevate active-elevate-2 transition-all"
                data-testid="button-experience"
                aria-label="Navigate to experience section"
              >
                View Experience
              </a>
              <a 
                href={resumePdf}
                download="Syed_Ahamed_Resume.pdf"
                className="group px-6 py-3 bg-emerald-600 text-white border border-emerald-500 rounded-lg font-medium hover:bg-emerald-700 hover-elevate active-elevate-2 transition-all flex items-center justify-center gap-2"
                data-testid="button-download-resume"
                aria-label="Download resume as PDF"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
