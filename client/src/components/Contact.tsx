import GlassCard from "./GlassCard";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ahamednazeer202@gmail.com",
    href: "mailto:ahamednazeer202@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8220669990",
    href: "tel:+918220669990",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 relative" id="contact" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          id="contact-heading"
        >
          <span className="text-primary font-mono">~/</span>contact
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground text-sm">{contact.value}</p>
                </>
              );

              const card = contact.href ? (
                <a
                  href={contact.href}
                  className="block"
                  data-testid={`link-contact-${contact.label.toLowerCase()}`}
                >
                  <GlassCard className="p-6 text-center hover-elevate active-elevate-2 h-full">
                    {content}
                  </GlassCard>
                </a>
              ) : (
                <GlassCard className="p-6 text-center h-full">
                  {content}
                </GlassCard>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                >
                  {card}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
          <GlassCard className="p-6 md:p-8">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 px-6 py-3 flex items-center gap-2 border border-white/10 rounded-lg mb-6">
              <Send className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                Let's connect and build something amazing together
              </span>
            </div>

            <div className="text-center">
              <p className="text-foreground/80 mb-6">
                I'm always interested in hearing about new opportunities, projects, 
                or just having a chat about DevOps and cloud infrastructure.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:ahamednazeer202@gmail.com"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate active-elevate-2"
                  data-testid="button-email"
                >
                  Send Email
                </a>
                <a
                  href="tel:+918220669990"
                  className="px-6 py-3 bg-white/5 text-foreground border border-white/10 rounded-lg font-medium hover-elevate active-elevate-2"
                  data-testid="button-call"
                >
                  Call Me
                </a>
              </div>
            </div>
          </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
