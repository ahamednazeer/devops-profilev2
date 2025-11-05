import { useState } from "react";
import GlassCard from "./GlassCard";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    company: "MISC Marine",
    location: "Chennai",
    role: "DevOps Engineer",
    period: "Current",
    achievements: [
      "Managed and automated infrastructure across 100+ edge servers deployed on maritime vessels, ensuring high availability and optimal performance",
      "Orchestrated containerized applications using Docker and Kubernetes on AWS EKS, enabling scalable and resilient deployments",
      "Designed and developed EKS-based application infrastructure, incorporating best practices for scalability, security, and maintainability",
      "Designed and developed AWS lower environments (Dev, QA, Staging), enabling safe and consistent application testing",
      "Designed and built ETL infrastructure to handle large-scale production data with high reliability",
      "Implemented CI/CD pipelines using GitLab and GoCD, streamlining development-to-production workflows",
      "Deployed centralized logging and monitoring solutions with Prometheus, Grafana, InfluxDB, and Telegraf",
      "Built custom Grafana dashboards for real-time visibility into Docker container metrics, system health, and API usage",
      "Engineered a peer-to-peer VPN solution across 60+ vessels, allowing secure, scalable remote access",
      "Developed an Ansible-based continuous deployment system for automated backup and restore",
      "Built a server management web application optimized for maritime operations to streamline data transfer and report automation",
      "Deployed and managed Istio service mesh and NGINX Ingress for secure traffic management and TLS termination",
    ],
  },
  {
    company: "MagellanX",
    location: "Chennai",
    role: "DevOps",
    period: "Previous",
    achievements: [
      "Solid foundational understanding of Docker; experienced in creating, running, and managing containers",
      "Familiar with deploying and managing small-scale containerized applications with Kubernetes",
      "Practical experience with Prometheus and Grafana for basic monitoring setups and system metric visualizations",
      "Hands-on experience building simple CI/CD pipelines using GitLab to automate code integration",
      "Beginner-level proficiency in CouchDB, PostgreSQL, and MySQL with hands-on experience in basic queries",
      "Capable of writing Bash and Python scripts to automate routine tasks and improve operational efficiency",
      "Experience creating dashboard visualizations for CPU, memory, disk, and network metrics",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 relative" id="experience" aria-labelledby="experience-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          id="experience-heading"
        >
          <span className="text-primary font-mono">~/</span>experience
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index, type: "spring", stiffness: 100 }}
              className="relative"
            >
            <GlassCard className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02]">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-start justify-between text-left group"
                data-testid={`button-experience-${index}`}
              >
                <div className="flex gap-5 md:gap-6 flex-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-xl border border-primary/20">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{exp.company}</h3>
                    <p className="text-primary font-mono text-base md:text-lg font-semibold mb-3">{exp.role}</p>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
                      <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg font-medium backdrop-blur-sm">{exp.location}</span>
                      <span className="text-white/30 hidden sm:inline">•</span>
                      <span className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg font-medium text-primary backdrop-blur-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 ml-4">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary group-hover:text-cyan-400 transition-colors" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </button>

              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                    <ul className="mt-4 space-y-3.5">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          className="flex gap-3.5 text-foreground/90 text-sm md:text-base leading-relaxed hover:text-foreground transition-colors group/item pl-2"
                        >
                          <span className="text-primary flex-shrink-0 font-bold text-lg mt-0.5 group-hover/item:text-cyan-400 transition-colors">•</span>
                          <span className="flex-1">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </GlassCard>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
