import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import { NavRail, type NavSection } from "./components/NavRail";
import { Hero } from "./components/sections/Hero";
import { Principles } from "./components/sections/Principles";
import { WayOfWorking } from "./components/sections/WayOfWorking";
import { AIAngle } from "./components/sections/AIAngle";
import { Framework } from "./components/sections/Framework";
import { Close } from "./components/sections/Close";
import "./index.css";

const sections: NavSection[] = [
  { id: "hero", label: "Opening", index: "00" },
  { id: "principles", label: "System Principles", index: "01" },
  { id: "way-of-working", label: "Way of Working", index: "02" },
  { id: "ai-angle", label: "The AI Angle", index: "03" },
  { id: "framework", label: "The Framework", index: "04" },
  { id: "close", label: "So, What", index: "05" },
];

function App() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    observerRef.current = observer;

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Custom circle cursor that trails the pointer (fine-pointer devices only).
  useEffect(() => {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const ring = document.createElement("div");
    ring.className = "cursor";
    document.body.appendChild(ring);
    document.documentElement.classList.add("cursor-on");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, raf = 0;
    const sel = "a,button,[role=button],input,textarea,select";
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; ring.classList.add("on"); };
    const onLeave = () => ring.classList.remove("on");
    const onDown = () => ring.classList.add("down");
    const onUp = () => ring.classList.remove("down");
    const onOver = (e: Event) => { if ((e.target as Element).closest?.(sel)) ring.classList.add("hover"); };
    const onOut = (e: Event) => { if ((e.target as Element).closest?.(sel)) ring.classList.remove("hover"); };
    addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    const loop = () => {
      const k = reduce ? 1 : 0.2;
      rx += (mx - rx) * k; ry += (my - ry) * k;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("cursor-on");
      ring.remove();
    };
  }, []);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/85 px-6 py-4 backdrop-blur lg:px-12">
          <a
            href="/index.html"
            aria-label="Golan Sarig, home"
            className="flex items-center"
          >
            <img
              src="/images/gs-logo.webp"
              alt="Golan Sarig"
              width={30}
              height={30}
              className="h-[30px] w-auto"
            />
          </a>
          <a
            href="/index.html"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to work
          </a>
        </header>
        <NavRail sections={sections} activeId={activeId} onNavigate={handleNavigate} />
        <main>
          <Hero />
          <Principles />
          <WayOfWorking />
          <AIAngle />
          <Framework />
          <Close />
        </main>
        <footer className="border-t border-border bg-background px-6 py-24 lg:pl-48 lg:pr-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="font-display text-4xl font-semibold tracking-tighter text-foreground md:text-6xl">
              Get in touch<span className="text-signal">.</span>
            </div>
            <a
              href="mailto:golansarig@gmail.com"
              className="mt-3 inline-block font-display text-xl font-semibold text-signal md:text-2xl"
            >
              golansarig@gmail.com →
            </a>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-muted-foreground">
              <a href="/asap.html" className="transition-colors hover:text-foreground">
                Next: ASAP →
              </a>
              <a href="/index.html" className="transition-colors hover:text-foreground">
                All work
              </a>
              <a
                href="https://www.linkedin.com/in/golansarig"
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/golansarig"
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-foreground"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
