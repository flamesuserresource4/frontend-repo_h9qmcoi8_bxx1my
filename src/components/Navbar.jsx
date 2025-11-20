import { Plane, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white">
            <Plane className="h-5 w-5" />
          </div>
          <div className="text-white">
            <p className="text-lg font-semibold tracking-tight">SkyRoute</p>
            <p className="text-xs text-white/60 -mt-1">Dhaka to Dubai</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#search" className="hover:text-white transition">Search</a>
          <a href="#deals" className="hover:text-white transition">Deals</a>
          <a href="#why" className="hover:text-white transition">Why us</a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
