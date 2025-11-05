import GlassCard from "./GlassCard";
import { GraduationCap, Award } from "lucide-react";

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
  return (
    <section className="py-16 md:py-24 relative" id="education">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          <span className="text-primary font-mono">~/</span>education & certifications
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <GlassCard className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">{education.degree}</h3>
                <p className="text-muted-foreground mt-1">{education.institution}</p>
                <p className="text-muted-foreground text-sm">{education.location}</p>
              </div>
            </div>
          </GlassCard>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 ml-2">Certifications & Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <GlassCard key={index} className="p-4 hover-elevate" data-testid={`card-cert-${index}`}>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded font-mono">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
