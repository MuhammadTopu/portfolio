import { version } from '../../package.json';

export function Footer() {
  return (
    <footer className="w-full max-w-[1200px] mx-auto px-4 pb-24 lg:pb-10">
      <div className="border-t-2 border-dashed border-card-border pt-6 grid grid-cols-1 sm:grid-cols-3 items-center gap-3">

        {/* Left — copyright */}
        <p className="text-xs text-muted font-bold tracking-widest uppercase text-center sm:text-left">
          © {new Date().getFullYear()} Kamran Hossain Topu.
        </p>

        {/* Center — version badge */}
        <div className="flex justify-center">
        </div>

        {/* Right — links */}
        <div className="flex items-center justify-center sm:justify-end gap-4 text-xs text-muted font-bold tracking-widest uppercase">
          <a href="https://github.com/MuhammadTopu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">GitHub</a>
          <span className="text-card-border">·</span>
          <a href="https://linkedin.com/in/kamranhossaintopu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">LinkedIn</a>
          <span className="text-card-border">·</span>
        </div>

      </div>
    </footer>
  );
}
