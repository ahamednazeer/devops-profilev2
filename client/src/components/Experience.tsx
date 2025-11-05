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

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-10 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-cyan-500 to-primary opacity-30" />
          
          <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1), type: "spring" }}
              className="relative"
            >
            <div className="absolute left-6 md:left-8 top-8 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50 border-4 border-slate-950 z-10" />
            
            <GlassCard className="overflow-hidden ml-16 md:ml-20 hover:shadow-2xl transition-all duration-300 hover:border-primary/30">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-start justify-between text-left hover-elevate group"
                data-testid={`button-experience-${index}`}
              >
                <div className="flex gap-4 flex-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Building2 className="w-7 h-7 text-primary group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                    <p className="text-primary font-mono text-sm md:text-base mt-1.5">{exp.role}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-medium">{exp.location}</span>
                      <span className="text-white/30">•</span>
                      <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded font-medium text-primary">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary group-hover:text-cyan-400 transition-colors" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </button>

              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
                    <ul className="mt-6 space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex gap-3 text-foreground/90 text-sm leading-relaxed hover:text-foreground transition-colors group/item"
                        >
                          <span className="text-primary flex-shrink-0 font-mono text-base group-hover/item:text-cyan-400 transition-colors">▸</span>
                          <span>{achievement}</span>
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
