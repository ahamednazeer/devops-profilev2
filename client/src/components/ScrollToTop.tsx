import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 text-white rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group backdrop-blur-xl border border-white/20"
          aria-label="Scroll to top"
          data-testid="button-scroll-to-top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
