import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
              href="https://www.linkedin.com/in/syed-ahamed-n-a19238172"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/80 hover:text-primary transition-colors hover:scale-110"
              data-testid="link-linkedin"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
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
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            data-testid="button-menu-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed left-0 right-0 top-16 bottom-0 backdrop-blur-xl bg-slate-950/98 border-t border-white/10 overflow-y-auto"
          >
            <div className="py-6 px-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.2 }}
                className="block py-4 px-5 text-lg font-medium text-foreground/90 hover:text-primary hover:bg-white/5 rounded-lg transition-all active:scale-95"
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-4 space-y-3">
              <motion.a
                href="https://www.linkedin.com/in/syed-ahamed-n-a19238172"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block py-3.5 px-5 bg-white/5 border border-white/10 text-foreground rounded-lg font-medium hover:bg-white/10 transition-all text-center active:scale-95"
                data-testid="mobile-link-linkedin"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="w-5 h-5 inline mr-2" />
                LinkedIn
              </motion.a>
              <motion.a
                href={resumePdf}
                download="Syed_Ahamed_Resume.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="block py-3.5 px-5 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate active-elevate-2 transition-all text-center active:scale-95"
                data-testid="mobile-download-resume"
                aria-label="Download resume"
              >
                <Download className="w-5 h-5 inline mr-2" />
                Download Resume
              </motion.a>
            </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
