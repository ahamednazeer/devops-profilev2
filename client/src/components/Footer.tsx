export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10">
      <div className="absolute inset-0 bg-slate-950" />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            <span className="text-primary">portfolio@syed-ahamed</span>:~$ █
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Syed Ahamed. Built with passion for DevOps.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
