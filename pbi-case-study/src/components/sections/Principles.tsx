import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid, MousePointerClick, Database, BellRing } from "lucide-react";

interface Dimension {
  id: string;
  index: string;
  label: string;
  icon: typeof LayoutGrid;
  finding: string;
  principle: string;
  principleName: string;
}

const dimensions: Dimension[] = [
  {
    id: "ia",
    index: "01",
    label: "Information Architecture",
    icon: LayoutGrid,
    finding:
      "Client types didn't sit as separate silos, they nested. A corporate case needed attached individuals as its signatories; an individual case could need an attached third party, like a power of attorney or a trustee. The IA never reflected that composition. The highest-consequence decision in the whole flow, which client type this even was, sat hidden behind a menu bar.",
    principleName: "Surface the decision that determines everything else",
    principle:
      "Move client-type selection to a full cards layout, upfront. If a choice determines the entire downstream structure of a case, its visibility has to match its consequence, not get buried a click deep.",
  },
  {
    id: "interactions",
    index: "02",
    label: "Interactions",
    icon: MousePointerClick,
    finding:
      "The system was built like a spreadsheet with actions bolted on top, rows, cells, no cues. Nothing tracked what stage a case was in, so it was never clear when a stage ended or what was blocking a case from moving. Role and liability checks weren't validated in real time, so a case could sit blocked with nobody able to see why.",
    principleName: "Status is a state machine, not a label",
    principle:
      "Every status explicitly defines who can edit, who checks, what's read-only, and what unlocks the next step. Don't rely on convention, encode it, so a blocked case always shows the rule that's blocking it.",
  },
  {
    id: "data",
    index: "03",
    label: "Data Input & Display",
    icon: Database,
    finding:
      "Data got retyped by hand even when it already existed somewhere else in the bank's own systems, with no consistent source of truth per field, and no distinction between what genuinely needed judgment and what was just copying.",
    principleName: "Pull, then ask",
    principle:
      "Auto-populate from the system of record wherever the data already exists; only ask the RM for what isn't authoritative anywhere else. Validate hard on regulated fields, but allow an override with a reason rather than a hard block.",
  },
  {
    id: "alerts",
    index: "04",
    label: "Alerts & Notifications",
    icon: BellRing,
    finding:
      "Notifications logged that a status had changed, but didn't route to the person who actually needed to act on it. Approvals could stall quietly, no owner ever surfaced as the one holding it up.",
    principleName: "Notify the owner, not the log",
    principle:
      "Every notification is tied to who owns the next action, not just the event that triggered it. The person who needs to act is the one who gets told, immediately, and specifically.",
  },
];

export function Principles() {
  const [activeId, setActiveId] = useState(dimensions[0].id);
  const active = dimensions.find((d) => d.id === activeId)!;

  return (
    <section id="principles" className="scroll-mt-14 border-b border-border px-6 py-28 md:px-12 lg:pl-48 lg:pr-24 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="01"
          eyebrow="System Principles"
          title="Four dimensions, mapped before anything was drawn"
          description="Every screen decision downstream traced back to one of four structural questions. This is what discovery found in each, and the principle that came out of it."
        />

        <div className="mt-16 grid grid-cols-1 gap-3 lg:grid-cols-[340px_1fr] lg:gap-6">
          {/* Selector */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-2">
            {dimensions.map((d) => {
              const Icon = d.icon;
              const isActive = d.id === activeId;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  className={`group relative overflow-hidden rounded-2xl border px-5 py-5 text-left transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? "border-signal/30 bg-signal text-white shadow-[0_20px_40px_-15px_rgba(29,78,216,0.35)]"
                      : "border-border bg-card hover:border-zinc-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <Icon
                      className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-signal"}`}
                      strokeWidth={1.75}
                    />
                    <span
                      className={`num text-xs ${isActive ? "text-white/60" : "text-muted-foreground"}`}
                    >
                      {d.index}
                    </span>
                  </div>
                  <div
                    className={`mt-4 text-sm font-medium leading-snug ${isActive ? "text-white" : "text-foreground"}`}
                  >
                    {d.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      What discovery found
                    </div>
                    <p className="mt-4 text-balance leading-relaxed text-foreground">
                      {active.finding}
                    </p>
                  </div>
                  <div className="border-t border-border pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-signal">
                      The principle
                    </div>
                    <div className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">
                      {active.principleName}
                    </div>
                    <p className="mt-3 text-balance leading-relaxed text-muted-foreground">
                      {active.principle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr]">
      <div className="flex items-start gap-4">
        <span className="num text-sm text-signal">{index}</span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <div>
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-[62ch] text-balance leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
