import { useState, useEffect, useCallback } from "react";
import { PROFILE, SKILLS, EDUCATION, EXPERIENCE, PROJECTS } from "./data.jsx";
import { Hero, SocialButtons } from "./hero.jsx";
import { About, Experience, Projects } from "./sections.jsx";
import { Icon, Reveal } from "./ui.jsx";
import { cx } from "./lib/cx.js";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakSelect,
  TweakRadio,
  TweakToggle,
} from "./tweaks-panel.jsx";

// app.jsx — shell: nav + theme toggle + section dots + tweaks.

const HUES = { Lavender: 295, Violet: 282, Orchid: 318, Indigo: 268 };

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "card",
  "accent": "Lavender",
  "headlineFont": "Space Grotesk",
  "glow": true,
  "reduceMotion": false
}/*EDITMODE-END*/;

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

/* --------------------------- BOTTOM NAV --------------------------------- */
// Floating glass nav bar: a single "next section" button + theme switch.
function BottomNav({ active, theme, onToggleTheme, isVisible }) {
  const idx = SECTIONS.findIndex((s) => s.id === active);
  const next = SECTIONS[idx + 1] || SECTIONS[0]; // wrap back to top on last section
  const wraps = idx === SECTIONS.length - 1;
  return (
    <nav
      className={cx(
        "navbar-shell",
        !isVisible && "navbar-shell--hidden",
      )}
      aria-label="Section navigation"
    >
      <div className="navbar">
        <a
          className="flex items-center gap-2.5 rounded-full py-2 pr-2.5 pl-[18px] text-[var(--text)] transition-colors duration-200 hover:bg-[var(--accent-soft)]"
          href={`#${next.id}`}
          aria-label={`Go to ${next.label}`}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-3)] uppercase">{wraps ? "Back to" : "Next"}</span>
          <span className="[font-family:var(--font-display)] text-[15px] font-semibold text-[var(--text)]">{next.label}</span>
          <span className="navbar__chev mr-1 grid place-items-center text-base text-[var(--accent)]" aria-hidden="true">
            {wraps ? <Icon.arrowUp /> : <Icon.arrowDown />}
          </span>
        </a>
        <span className="mx-0.5 h-6 w-px bg-[var(--border-2)]" aria-hidden="true"></span>
        <button className="cursor-pointer border-0 bg-transparent p-0" onClick={onToggleTheme} aria-label="Toggle theme" title="Toggle light / dark">
          <span
            className={cx(
              "flex h-[26px] w-[46px] rounded-full border border-[var(--border)] bg-[var(--bg-2)] p-[3px] transition-colors duration-300",
              theme === "dark" ? "justify-end" : "justify-start",
            )}
          >
            <span className="grid size-5 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-xs text-[var(--accent-ink)] transition-transform duration-300">
              {theme === "dark" ? <Icon.moon /> : <Icon.sun />}
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}

/* --------------------------- SECTION DOTS ------------------------------- */
function SectionDots({ active }) {
  return (
    <div className="fixed top-1/2 right-5 z-40 flex -translate-y-1/2 flex-col items-end gap-3.5 max-[920px]:hidden" aria-hidden="true">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cx(
            "group relative size-[9px] rounded-full bg-[var(--border-2)] transition-all duration-300 hover:bg-[var(--accent)]",
            active === s.id && "scale-110 bg-[var(--accent)] shadow-[0_0_0_4px_var(--accent-soft)]",
          )}
        >
          <span className="pointer-events-none absolute top-1/2 right-[18px] -translate-y-1/2 translate-x-1.5 whitespace-nowrap rounded-[7px] border border-[var(--border)] bg-[var(--surface-2)] px-2 py-[3px] font-mono text-[11px] text-[var(--text-2)] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            {s.label}
          </span>
        </a>
      ))}
    </div>
  );
}

/* ------------------------------- APP ------------------------------------ */
export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // theme (persisted) — separate from tweaks; it's a real product feature
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("port-theme") || "dark";
    } catch {
      return "dark";
    }
  });
  const toggleTheme = useCallback(() => {
    setTheme((cur) => {
      const next = cur === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("port-theme", next);
      } catch {
        // Private browsing or locked storage should not block the theme toggle.
      }
      return next;
    });
  }, []);

  const [active, setActive] = useState("home");
  const [showBottomNav, setShowBottomNav] = useState(true);

  // apply theme + accent hue + fonts + flags to <html>
  useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-theme", theme);
    r.style.setProperty("--h", HUES[t.accent] ?? 295);
    r.style.setProperty("--font-display", `"${t.headlineFont}", system-ui, sans-serif`);
    r.classList.toggle("no-glow", !t.glow);
    r.classList.toggle("reduce-motion", !!t.reduceMotion);
  }, [theme, t.accent, t.headlineFont, t.glow, t.reduceMotion]);

  // timeline fill + active section
  useEffect(() => {
    let raf = 0;
    let hideTimer = 0;

    const scheduleHide = () => {
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setShowBottomNav(false), 3000);
    };

    const onScroll = () => {
      setShowBottomNav(true);
      scheduleHide();

      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const h = document.documentElement;
        // timeline spine fill
        const tl = document.querySelector(".timeline");
        const fill = document.querySelector(".timeline__spine-fill");
        if (tl && fill) {
          const center = h.scrollTop + h.clientHeight * 0.55;
          let f = (center - tl.offsetTop) / tl.offsetHeight;
          f = Math.max(0, Math.min(1, f));
          fill.style.transform = `scaleY(${f})`;
        }
        // active section
        const mid = h.scrollTop + h.clientHeight * 0.35;
        let cur = "home";
        for (const s of SECTIONS) {
          const el = document.getElementById(s.id);
          if (el && el.offsetTop <= mid) cur = s.id;
        }
        setActive(cur);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.clearTimeout(hideTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-aura" aria-hidden="true" />

      <BottomNav active={active} theme={theme} onToggleTheme={toggleTheme} isVisible={showBottomNav} />
      <SectionDots active={active} />

      <main>
        <section
          id="home"
          className="relative z-[1] mx-auto flex min-h-screen max-w-[var(--maxw)] flex-col items-center justify-center overflow-x-clip"
          data-screen-label="Hero"
        >
          <Hero variant={t.heroVariant} p={PROFILE} />
        </section>

        <About profile={PROFILE} skills={SKILLS} education={EDUCATION} />
        <Experience items={EXPERIENCE} />
        <Projects items={PROJECTS} />
      </main>

      <footer className="relative z-[1] border-t border-[var(--border)] md:px-0 px-6 py-12 text-center">
        <Reveal kind="up" className="mx-auto flex max-w-[var(--maxw)] flex-col items-center gap-7">
          <div className="bg-gradient-to-br from-[var(--text)] to-[var(--accent)] bg-clip-text [font-family:var(--font-display)] text-[clamp(34px,6vw,64px)] font-semibold text-transparent">
            Let&apos;s build something.
          </div>
          <SocialButtons links={PROFILE.links} size="lg" layout="footer" />
          <div className="flex flex-wrap justify-center gap-6 font-mono text-[13px] text-[var(--text-3)]">
            <span>© {new Date().getFullYear()} {PROFILE.fullName}</span>
          </div>
        </Reveal>
      </footer>

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakSelect label="Layout" value={t.heroVariant}
          options={[
            { value: "card", label: "Business card" },
            { value: "editorial", label: "Editorial split" },
            { value: "terminal", label: "Terminal" },
          ]}
          onChange={(v) => setTweak("heroVariant", v)} />

        <TweakSection label="Theme" />
        <TweakRadio label="Accent" value={t.accent}
          options={["Lavender", "Violet", "Orchid", "Indigo"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSelect label="Headline font" value={t.headlineFont}
          options={["Space Grotesk", "Sora", "Outfit", "Manrope"]}
          onChange={(v) => setTweak("headlineFont", v)} />
        <TweakToggle label="Accent glow" value={t.glow} onChange={(v) => setTweak("glow", v)} />
        <TweakToggle label="Reduce motion" value={t.reduceMotion} onChange={(v) => setTweak("reduceMotion", v)} />
      </TweaksPanel>
    </>
  );
}
