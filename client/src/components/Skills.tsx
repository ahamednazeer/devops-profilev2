import GlassCard from "./GlassCard";
import { Container, GitBranch, Cloud, Box, Code, Database, Activity, Shield, Settings, Network, Terminal, Gauge, Users, Globe } from "lucide-react";
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
  skills: ["Kubernetes", "AWS EKS", "Azure AKS", "OpenShift","Helm Charts"],
},
{
  category: "Scripting",
  icon: Code,
  skills: ["Bash", "Python"],
},
{
  category: "Database Management",
  icon: Database,
  skills: ["PostgreSQL", "MySQL", "CouchDB", "ETL Processes","Data Migration","ETL Pipelines"],
},
{
  category: "Monitoring & Logging",
  icon: Activity,
  skills: ["Prometheus", "Grafana", "InfluxDB", "Telegraf", "API Monitoring", "Self-Healing Systems"],
},
{
  category: "Configuration Management",
  icon: Settings,
  skills: ["Ansible", "Terraform"],
},
{
  category: "Reverse Proxy & Service Mesh",
  icon: Network,
  skills: ["NGINX", "Ingress", "Istio Mesh"],
},
{
  category: "Security",
  icon: Shield,
  skills: ["Teleport", "Self-hosted VPN"],
},
{
  category: "Operating Systems",
  icon: Terminal,
  skills: ["Linux (Ubuntu)"],
},
{
  category: "Optimization & Automation",
  icon: Gauge,
  skills: ["Server Management Platform", "Report Automation"],
},
{
  category: "Development & Collaboration",
  icon: Users,
  skills: ["Admin Tools", "Multi-user Access", "Production Data Access Optimization"],
},
{
  category: "Languages",
  icon: Globe,
  skills: ["Tamil","English", "Hindi", "Urdu"],
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
              <GlassCard className="p-6 hover-elevate h-full group transition-all duration-300" data-testid={`card-skill-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-6 h-6 text-primary group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-lg text-sm text-foreground/90 font-mono hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default shadow-sm"
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
          <GlassCard className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/10">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
              <h3 className="text-xl font-semibold text-foreground">Additional Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Linux (Ubuntu)", "Ansible", "Terraform", "NGINX Ingress", "Istio Mesh", "Configuration Management"].map(
                (skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 rounded-lg text-sm text-foreground/90 font-medium hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
