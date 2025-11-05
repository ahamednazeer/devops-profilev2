import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-2xl shadow-2xl shadow-black/20 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-2xl pointer-events-none" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
