import GlassCard from "../GlassCard";

export default function GlassCardExample() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8">
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-foreground">Glass Card</h3>
        <p className="text-muted-foreground mt-2">
          This is a glassmorphism card with backdrop blur effect
        </p>
      </GlassCard>
    </div>
  );
}
