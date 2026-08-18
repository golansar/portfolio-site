import { motion } from "framer-motion";

export function Close() {
  return (
    <section id="close" className="scroll-mt-14 bg-zinc-950 px-6 py-28 md:px-12 text-white lg:pl-48 lg:pr-24 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            So, what
          </div>
          <h2 className="mt-6 max-w-[20ch] text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tighter md:text-6xl">
            A structural read, held to a structural standard.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-zinc-800 pt-12 md:grid-cols-2">
            <p className="text-balance text-lg leading-relaxed text-zinc-400">
              PBI didn't ship. No screens live, no metric moved.
              What it produced: a decision-governance framework applied across
              three platforms, a delivery rhythm designed for the team to plan
              against, AI-generated concepts to validate the direction, and a
              guardrail that let AI take a genuine first pass at synthesis
              without anyone mistaking that pass for finished.
            </p>
            <p className="text-balance text-lg leading-relaxed text-zinc-400">
              That's the part that travels. Not the CRM, not the prompt, the
              system underneath both, and the discipline to say plainly what
              stage the work actually reached.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
