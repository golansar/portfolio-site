import { motion } from "framer-motion";
import { ArrowDown, Circle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center scroll-mt-14 border-b border-border px-6 pt-16 md:px-12 lg:pl-48 lg:pr-24 lg:pt-0"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <Circle className="h-2 w-2 fill-signal text-signal" strokeWidth={0} />
            Private Banking &middot; CRM Discovery
          </div>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-6xl">
            A system built on spreadsheet logic, asked to run a private bank.
          </h1>
          <p className="mt-8 max-w-[52ch] text-balance text-lg leading-relaxed text-muted-foreground">
            Client onboarding with no clear starting point. Approval states
            nobody could see. Before a single screen was drawn, discovery had
            to answer one question: what is actually broken, and why.
          </p>
          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              <ArrowDown className="h-4 w-4 text-signal" strokeWidth={1.75} />
            </motion.span>
            <span>How the system was diagnosed</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <div className="rounded-3xl bg-signal px-7 py-6">
            <div className="text-xs uppercase tracking-wide text-white/70">
              In short
            </div>
            <p className="mt-2.5 text-[15px] font-medium leading-relaxed text-white">
              Discovery work with AI, to frame and align the design team's
              efforts, way of working, and approach.
            </p>
            <p className="mt-4 border-t border-white/20 pt-4 text-[13px] leading-relaxed text-white/75">
              A discovery-stage finding, not a shipped outcome. Held to that
              standard throughout.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
