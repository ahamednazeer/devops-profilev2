import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-5 h-5 text-primary animate-pulse" />
            <p className="font-mono text-base text-foreground">
              <span className="text-primary">portfolio@syed-ahamed</span>:~$ █
            </p>
          </div>
          
          <p className="text-foreground/80 text-sm md:text-base mb-3 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Syed Ahamed. Built with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse inline" /> 
            for DevOps.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
