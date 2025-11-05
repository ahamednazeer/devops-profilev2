import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
