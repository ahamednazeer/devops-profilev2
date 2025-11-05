import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumePdf from "@assets/Resume_1762335533633.pdf";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-slate-950/80 border-b border-white/10" : ""
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-cyan-500 to-primary"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-mono text-xl font-bold text-primary hover:scale-110 transition-transform" data-testid="link-home">
            &lt;SA/&gt;
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-foreground/80 hover:text-primary transition-colors font-medium group"
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href={resumePdf}
              download="Syed_Ahamed_Resume.pdf"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover-elevate active-elevate-2 transition-all flex items-center gap-2"
              data-testid="nav-download-resume"
              aria-label="Download resume"
            >
              <Download className="w-4 h-4" />
              <span className="hidden lg:inline">Resume</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-xl bg-slate-950/95 border-t border-white/10 overflow-hidden"
          >
            <div className="py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-white/5 transition-colors"
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2 pb-1">
              <a
                href={resumePdf}
                download="Syed_Ahamed_Resume.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover-elevate active-elevate-2 transition-all text-center"
                data-testid="mobile-download-resume"
                aria-label="Download resume"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download Resume
              </a>
            </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
