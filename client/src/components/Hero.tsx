import GlassCard from "./GlassCard";
import { Terminal, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Terminal className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
              Syed Ahamed
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="font-mono text-xl md:text-2xl text-primary">
                DEVOPS ENGINEER
              </span>
              <span className="inline-block w-2 h-6 bg-primary animate-blink" />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Chennai, India</span>
            </div>

            <p className="text-foreground/80 mt-6 max-w-2xl mx-auto leading-relaxed">
              Dynamic DevOps Engineer with over two years of experience in managing and automating 
              large-scale infrastructure across maritime environments. Expertise in containerization, 
              CI/CD pipelines, and cloud services.
            </p>

            <div className="flex gap-4 justify-center mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate active-elevate-2"
                data-testid="button-contact"
              >
                Get In Touch
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 bg-white/5 text-foreground border border-white/10 rounded-lg font-medium hover-elevate active-elevate-2"
                data-testid="button-experience"
              >
                View Experience
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
