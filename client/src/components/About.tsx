import { useState, useEffect } from "react";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const profileText = `Dynamic DevOps Engineer with over two years of experience in managing and 
automating large-scale infrastructure across maritime environments. Expertise in 
containerization technologies such as Docker and Kubernetes, alongside strong 
capabilities in implementing CI/CD pipelines using GitLab and GoCD.

Proficient in leveraging AWS cloud services to enhance system reliability and 
performance while driving automation and monitoring initiatives. Committed to 
building resilient and scalable systems that optimize operational efficiency and 
minimize manual intervention.

A proven track record of developing comprehensive monitoring solutions that 
empower teams to proactively address system challenges.`;

export default function About() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (currentIndex < profileText.length && isVisible) {
      const timeout = setTimeout(() => {
        setDisplayedText(profileText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isVisible]);

  return (
    <section className="py-16 md:py-24 relative" id="about" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          id="about-heading"
        >
          <span className="text-primary font-mono">~/</span>about
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 px-6 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-sm text-muted-foreground ml-4">
                portfolio@syed-ahamed:~/profile
              </span>
            </div>

            <div className="p-6 md:p-8 font-mono text-sm">
              <div className="text-primary mb-2">$ cat profile.txt</div>
              <div className="text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {displayedText}
                <span className="inline-block w-2 h-4 bg-primary animate-blink ml-1" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
