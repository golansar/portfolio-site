import { motion } from "framer-motion";
import { Search, PenLine, Compass, PackageCheck } from "lucide-react";
import { SectionHeading } from "./Principles";

const phases = [
  {
    index: "01",
    name: "Discovery",
    icon: Search,
    points: [
      "End-to-end BRD extraction, no product owner available to interpret it",
      "Roles and permissions mapped per screen: editable vs. read-only, by role",
      "UX risks flagged early: no self-service, no PO, waterfall timelines",
    ],
  },
  {
    index: "02",
    name: "Content",
    icon: PenLine,
    points: [
      "Every status and term harmonised across onboarding, maintenance, offboarding",
      "A naming convention built for roles, business units, relationship types",
      "Compliance-aligned copy checked with the KYC and AML teams",
    ],
  },
  {
    index: "03",
    name: "Exploration",
    icon: Compass,
    points: [
      "Reusable IA patterns for forms, multi-step flows, document upload, audit logs",
      "Low-fidelity flows for the hardest journeys: the client relationship tree, suitability, and investor classification",
      "Early stakeholder reviews on the genuinely complex parts, before any polish",
    ],
  },
  {
    index: "04",
    name: "Delivery",
    icon: PackageCheck,
    points: [
      "~85 high-fidelity screens with specs, built for a waterfall handoff",
      "Step-by-step design QA carried through UAT, not a handoff and a wait",
      "A full content dictionary and navigation model, the BRD alone couldn't carry it",
    ],
  },
];

export function WayOfWorking() {
  return (
    <section id="way-of-working" className="scroll-mt-14 border-b border-border bg-secondary/40 px-6 py-28 md:px-12 lg:pl-48 lg:pr-24 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="02"
          eyebrow="Way of Working"
          title="How the work actually moved, week to week"
          description="A repeatable rhythm the whole project team could see: Discovery, Content, Exploration, Delivery. Not a waterfall gate, a shared vocabulary for where the work stood."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-border lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative z-10 mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-border bg-card">
                    <Icon className="h-5 w-5 text-signal" strokeWidth={1.75} />
                  </div>
                  <div className="num text-xs text-muted-foreground">{p.index}</div>
                  <div className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
                    {p.name}
                  </div>
                  <ul className="mt-4 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 gap-6 rounded-3xl border border-border bg-card p-8 md:grid-cols-[minmax(0,auto)_1fr] md:items-start md:gap-12 md:p-10"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Planned scope, not a result
            </div>
            <div className="mt-1 whitespace-nowrap font-display text-5xl font-semibold tracking-tighter text-signal md:text-6xl">
              80&ndash;90%
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">
              Research ownership was scoped to shift from discovery to design
            </div>
            <p className="mt-2 max-w-[62ch] text-balance leading-relaxed text-muted-foreground">
              Discussion guides, facilitation, synthesis, normally the
              discovery team's job. The roadmap called for that ownership to
              shift: design scoped to run roughly 80&ndash;90% of research end
              to end, with discovery reviewing rather than leading. A planned
              model for embedded practitioner-style ownership, drawn from how
              the work was scoped, not a measurement of how it landed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
