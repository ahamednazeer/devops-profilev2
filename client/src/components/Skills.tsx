import GlassCard from "./GlassCard";
import { Container, GitBranch, Cloud, Box, Code, Database, Activity, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    category: "Containerization",
    icon: Container,
    skills: ["Docker"],
  },
  {
    category: "CI/CD Tools",
    icon: GitBranch,
    skills: ["GitLab CI/CD", "GoCD", "Jenkins"],
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    skills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud"],
  },
  {
    category: "Orchestration",
    icon: Box,
    skills: ["Kubernetes", "AWS EKS"],
  },
  {
    category: "Scripting",
    icon: Code,
    skills: ["Bash", "Python"],
  },
  {
    category: "Database Management",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "CouchDB"],
  },
  {
    category: "Monitoring & Logging",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "InfluxDB", "Telegraf", "API Monitoring"],
  },
  {
    category: "Security",
    icon: Shield,
    skills: ["Teleport", "Self-hosted VPN"],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 relative" id="skills" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          id="skills-heading"
        >
          <span className="text-primary font-mono">~/</span>skills
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
              <GlassCard className="p-6 hover-elevate h-full" data-testid={`card-skill-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-foreground/90 font-mono"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Additional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Linux (Ubuntu)", "Ansible", "Terraform", "NGINX Ingress", "Istio Mesh", "Configuration Management"].map(
                (skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-sm text-foreground/90"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
