/**
 * FooterSignature Component
 * Professional developer attribution displayed across all pages
 */

export function FooterSignature() {
  return (
    <div className="w-full bg-gradient-to-t from-neutral-950/90 to-transparent">
      <div className="container-custom">
        <div className="flex items-center justify-center py-6 md:py-8">
          <div className="group flex items-center gap-2 rounded-full bg-neutral-900/50 px-4 py-2 backdrop-blur-sm border border-neutral-800/50 transition-all duration-300 hover:bg-neutral-800/60 hover:border-neutral-700/60">
            <div className="h-2 w-2 rounded-full bg-white/80 animate-pulse-glow"></div>
            <p className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
              Crafted with <span className="text-red-400">♥</span> by{" "}
              <span className="text-white font-semibold">
                Wanda Solange Hernandez
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
