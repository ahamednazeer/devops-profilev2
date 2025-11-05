import { useState } from "react";
import GlassCard from "./GlassCard";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";

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

  return (
    <section className="py-16 md:py-24 relative" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          <span className="text-primary font-mono">~/</span>experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-start justify-between text-left hover-elevate"
                data-testid={`button-experience-${index}`}
              >
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-primary font-mono text-sm mt-1">{exp.role}</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {exp.location} • {exp.period}
                    </p>
                  </div>
                </div>

                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t border-white/10">
                  <ul className="mt-4 space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-foreground/80 text-sm leading-relaxed">
                        <span className="text-primary flex-shrink-0 font-mono">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
