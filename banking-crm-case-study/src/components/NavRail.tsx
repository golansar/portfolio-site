import { motion } from "framer-motion";

export interface NavSection {
  id: string;
  label: string;
  index: string;
}

interface NavRailProps {
  sections: NavSection[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export function NavRail({ sections, activeId, onNavigate }: NavRailProps) {
  return (
    <>
      {/* Desktop rail */}
      <nav className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col gap-5">
          {sections.map((s) => {
            const active = s.id === activeId;
            return (
              <li key={s.id} className="group relative flex items-center">
                <button
                  onClick={() => onNavigate(s.id)}
                  className="flex items-center gap-3 py-1 text-left"
                  aria-label={s.label}
                >
                  <span
                    className={`relative flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      active
                        ? "border-signal bg-signal scale-125"
                        : "border-zinc-300 bg-transparent group-hover:border-zinc-500"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-dot-ring"
                        className="absolute -inset-1.5 rounded-full border border-signal/40"
                      />
                    )}
                  </span>
                  <span
                    className={`whitespace-nowrap text-xs font-medium tracking-wide transition-all duration-300 ${
                      active
                        ? "translate-x-0 text-foreground opacity-100"
                        : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  >
                    <span className="num mr-1.5 text-[10px] text-muted-foreground">{s.index}</span>
                    {s.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile top progress */}
      <nav className="fixed inset-x-0 top-0 z-40 flex items-center gap-1 bg-background/80 px-4 py-3 backdrop-blur-sm lg:hidden">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            aria-label={s.label}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              s.id === activeId ? "bg-signal" : "bg-zinc-200"
            }`}
          />
        ))}
      </nav>
    </>
  );
}
