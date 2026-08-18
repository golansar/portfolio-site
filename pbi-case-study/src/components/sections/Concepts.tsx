import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid, X } from "lucide-react";

const base = import.meta.env.BASE_URL;

type Screen = { file: string; label: string; highlight?: boolean };

const screens: Screen[] = [
  { file: "onboarding-registry", label: "Onboarding Registry", highlight: true },
  { file: "client-entity", label: "Client & Entity Management", highlight: true },
  { file: "aml-risk", label: "AML & Risk", highlight: true },
  { file: "documents", label: "Document Management", highlight: true },
  { file: "approvals", label: "Approvals", highlight: true },
  { file: "portfolio-setup", label: "Portfolio & Account Setup", highlight: true },
  { file: "new-case-1", label: "New case · 1", highlight: true },
  { file: "new-case-2", label: "New case · 2" },
  { file: "new-case-3", label: "New case · 3" },
  { file: "new-case-4", label: "New case · 4" },
  { file: "ongoing-1", label: "Ongoing case · 1" },
  { file: "ongoing-2", label: "Ongoing case · 2" },
  { file: "ongoing-3", label: "Ongoing case · 3" },
  { file: "ongoing-4", label: "Ongoing case · 4" },
  { file: "ongoing-5", label: "Ongoing case · 5" },
  { file: "ongoing-6", label: "Ongoing case · 6", highlight: true },
  { file: "ongoing-7", label: "Ongoing case · 7" },
  { file: "ongoing-8", label: "Ongoing case · 8" },
];

const highlights = screens.filter((s) => s.highlight);

export function Concepts() {
  const [active, setActive] = useState<number | null>(null);
  const [gridOpen, setGridOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (active !== null) setActive(null);
      else if (gridOpen) setGridOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, gridOpen]);

  const strip = [...highlights, ...highlights];

  return (
    <div className="mt-16">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Concepts
        </div>
        <button
          onClick={() => setGridOpen(true)}
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-signal transition-opacity hover:opacity-80"
        >
          <LayoutGrid className="h-4 w-4" strokeWidth={2} />
          <span>view all</span>
        </button>
      </div>

      <div className="marquee-wrap relative -mx-6 overflow-hidden lg:mx-0">
        <div className="animate-marquee flex w-max">
          {strip.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(screens.indexOf(s))}
              aria-label={`Enlarge ${s.label}`}
              className="group/th relative mr-5 h-[240px] w-[360px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={`${base}concepts/${s.file}.jpg`}
                alt={s.label}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/th:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2.5 text-left text-[11px] font-medium text-white">
                {s.label}
              </span>
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>

      <div className="mt-4 text-[13px] text-muted-foreground">
        AI-generated in Figma Make &middot; synthetic data, illustrative
      </div>

      {/* Show-all grid overlay */}
      <AnimatePresence>
        {gridOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] overflow-y-auto bg-background p-6 md:p-10"
          >
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    All concepts &middot; {screens.length}
                  </div>
                </div>
                <button
                  onClick={() => setGridOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Close
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
                    <X className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {screens.map((s, i) => (
                  <button
                    key={s.file}
                    onClick={() => setActive(i)}
                    aria-label={`Enlarge ${s.label}`}
                    className="group overflow-hidden rounded-xl border border-border bg-card text-left transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={`${base}concepts/${s.file}.jpg`}
                        alt={s.label}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="px-3 py-2.5 text-xs font-medium text-foreground">
                      {s.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged single screen */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <motion.img
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={`${base}concepts/${screens[active].file}.jpg`}
              alt={screens[active].label}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
