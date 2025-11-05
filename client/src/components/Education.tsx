import GlassCard from "./GlassCard";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const education = {
  degree: "B.E CSE",
  institution: "Sathyabama Institute of Science and Technology",
  location: "Chennai",
};

const certifications = [
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    type: "Certification",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Udemy",
    type: "Course",
  },
  {
    name: "Bash Script",
    issuer: "Udemy",
    type: "Course",
  },
  {
    name: "Linux",
    issuer: "Udemy",
    type: "Course",
  },
  {
    name: "EKS",
    issuer: "Udemy",
    type: "Course",
  },
];

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 relative" id="education" aria-labelledby="education-heading">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          id="education-heading"
        >
          <span className="text-primary font-mono">~/</span>education & certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <GlassCard className="p-6 md:p-10 bg-gradient-to-br from-white/10 to-white/5 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-cyan-500/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{education.degree}</h3>
                <p className="text-lg text-foreground/80 mt-2">{education.institution}</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <p className="text-muted-foreground text-sm">{education.location}</p>
                </div>
              </div>
            </div>
          </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-10 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Certifications & Courses</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * index, type: "spring" }}
                >
                <GlassCard className="p-5 hover-elevate h-full group transition-all duration-300 hover:border-primary/30" data-testid={`card-cert-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow">
                      <Award className="w-5 h-5 text-primary group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">{cert.name}</h4>
                      <p className="text-muted-foreground text-xs md:text-sm mt-1.5">{cert.issuer}</p>
                      <div className="mt-3">
                        <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium ${
                          cert.type === 'Certification' 
                            ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-gradient-to-r from-primary/20 to-cyan-500/20 text-primary border border-primary/30'
                        }`}>
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
