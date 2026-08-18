import { motion } from "framer-motion";
import { Scale, Repeat, Cpu, ArrowDown } from "lucide-react";
import { SectionHeading } from "./Principles";

const phaseChips = ["Discovery", "Content", "Exploration", "Delivery"];

export function Framework() {
  return (
    <section id="framework" className="scroll-mt-14 border-b border-border bg-secondary/40 px-6 py-28 md:px-12 lg:pl-48 lg:pr-24 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="04"
          eyebrow="The Framework"
          title="Three layers, stacked. Not one clever prompt"
          description="What actually travels to the next project isn't PBI itself. It's knowing where, inside an existing system of governance and rhythm, an AI module can be inserted without the rest of the system losing its rigor."
        />

        <div className="mx-auto mt-16 flex max-w-[880px] flex-col items-center">
          {/* Tier 1 */}
          <TierCard
            icon={Scale}
            tag="Applied across SPV · MWP · C360"
            name="Decision Governance"
            title="UX Principle Framework"
            description="Experience → Principles → Ways of Working → Platform reality. Shared with the whole project team as the standard design decisions are held to, not one project's process, but the layer that sits above every project."
          />

          <Connector label="governs" />

          {/* Tier 2 */}
          <TierCard
            icon={Repeat}
            tag="How a project's stages get communicated"
            name="Delivery Rhythm"
            title="Discovery → Content → Exploration → Delivery"
            description="Where the work stands, phase by phase, on any given engagement."
          >
            <div className="mt-6 flex flex-wrap gap-2">
              {phaseChips.map((p) => (
                <span
                  key={p}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${
                    p === "Discovery"
                      ? "border-signal/30 bg-signal/10 text-signal"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  {p}
                  {p === "Discovery" && (
                    <span className="ml-1.5 text-[10px] text-signal/70">+ AI module</span>
                  )}
                </span>
              ))}
            </div>
          </TierCard>

          <Connector label="the module plugs in at Discovery" />

          {/* Tier 3 */}
          <TierCard
            icon={Cpu}
            tag="Piloted on PBI"
            name="AI Acceleration Module"
            title="Source-of-Truth AI Discovery"
            description="AI runs the first-pass synthesis from a raw source document. The guardrail keeps its output honest about its own certainty, until a human closes the loop."
            accent
          />
        </div>
      </div>
    </section>
  );
}

function TierCard({
  icon: Icon,
  tag,
  name,
  title,
  description,
  accent,
  children,
}: {
  icon: typeof Scale;
  tag: string;
  name: string;
  title: string;
  description: string;
  accent?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full rounded-3xl border p-8 md:p-10 ${
        accent ? "border-signal/30 bg-signal text-white" : "border-border bg-card"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
            accent ? "bg-white/15" : "bg-signal/10"
          }`}
        >
          <Icon className={`h-5 w-5 ${accent ? "text-white" : "text-signal"}`} strokeWidth={1.75} />
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide ${
            accent ? "bg-white/15 text-white/90" : "bg-secondary text-muted-foreground"
          }`}
        >
          {tag}
        </span>
      </div>
      <div
        className={`mt-6 text-xs font-semibold uppercase tracking-wide ${accent ? "text-white/70" : "text-signal"}`}
      >
        {name}
      </div>
      <div
        className={`mt-1.5 font-display text-2xl font-semibold tracking-tight md:text-3xl ${accent ? "text-white" : "text-foreground"}`}
      >
        {title}
      </div>
      <p
        className={`mt-4 max-w-[60ch] text-balance leading-relaxed ${accent ? "text-white/85" : "text-muted-foreground"}`}
      >
        {description}
      </p>
      {children}
    </motion.div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="h-8 w-px bg-border" />
      <div className="my-1.5 flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[11px] text-muted-foreground">
        <ArrowDown className="h-3 w-3" strokeWidth={1.75} />
        {label}
      </div>
      <div className="h-8 w-px bg-border" />
    </div>
  );
}
