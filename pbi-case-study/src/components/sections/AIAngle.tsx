import { motion } from "framer-motion";
import { Sparkles, CircleAlert } from "lucide-react";
import { SectionHeading } from "./Principles";
import { Concepts } from "./Concepts";

const promptSpec = [
  {
    field: "ROLE",
    value: "Senior service designer & UX strategist, mapping regulated journeys",
  },
  {
    field: "TASK",
    value: "Derive a high-level onboarding journey directly from the raw BRD",
  },
  {
    field: "SOURCE OF TRUTH",
    value:
      "Base everything strictly on the BRD. Treat missing information as unknown, not a gap to fill. Never invent steps, roles, or system behaviour.",
    highlight: true,
  },
  {
    field: "SELF-CHECK",
    value: "Is every stage traceable to the BRD? Have inferred items been flagged as uncertain?",
  },
];

const outputs = [
  "Friction points across identity, documents, status ownership, and system sync",
  "A JTBD canvas for the Front Office role, mental model, job stories, sub-jobs",
  "Stage-progression logic, what should actually gate movement between states",
  "Prioritised opportunity areas, ranked by operational impact",
];

export function AIAngle() {
  return (
    <section id="ai-angle" className="scroll-mt-14 border-b border-border px-6 py-28 md:px-12 lg:pl-48 lg:pr-24 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="03"
          eyebrow="The AI Angle"
          title="AI read the raw BRD. It didn't clean up a synthesis. It produced one."
          description="Not a loose prompt for a first draft. An engineered instruction, with a guardrail built into it before a single output came back."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Prompt spec card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
          >
            <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="ml-2 font-mono text-xs text-zinc-500">source-of-truth.prompt</span>
            </div>
            <div className="divide-y divide-zinc-800">
              {promptSpec.map((row) => (
                <div
                  key={row.field}
                  className={`px-6 py-5 ${row.highlight ? "bg-signal/10" : ""}`}
                >
                  <div
                    className={`font-mono text-[11px] tracking-wide ${row.highlight ? "text-signal" : "text-zinc-500"}`}
                  >
                    {row.field}
                  </div>
                  <p
                    className={`mt-2 font-mono text-[13px] leading-relaxed ${row.highlight ? "text-zinc-100" : "text-zinc-400"}`}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-8 rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-signal">
                <Sparkles className="h-4 w-4" strokeWidth={1.75} />
                What came back
              </div>
              <ul className="mt-5 space-y-4">
                {outputs.map((o) => (
                  <li key={o} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary px-6 py-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Normally the output of a senior researcher spending days with
                a BRD. Here it was a first pass, from the raw document, before
                a human had read a single page.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Honest caveat — kept deliberately small */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground"
        >
          <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400" strokeWidth={1.75} />
          <p className="max-w-[74ch]">
            First-pass synthesis, held deliberately as not-yet-validated. Findings were scoped to
            route back to business and engineering before being treated as confirmed; that loop
            hadn&apos;t closed when the engagement moved on. The guardrail sits inside the prompt, by design.
          </p>
        </motion.div>

        <Concepts />
      </div>
    </section>
  );
}
