import { useState, useEffect, useRef } from "react";
import { cx } from "./lib/cx.js";

// ui.jsx — shared primitives: icons, scroll-reveal wrapper, tags, section headers.

/* ---------------- Icons (simple, single-path where possible) ---------------- */
export const Icon = {
  github: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}>
      <path d="M12 .5C5.73.5.5 5.74.5 12.04c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.96 10.96 0 0 0 23.5 12.04C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowDown: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  ),
  arrowUp: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  ),
  file: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  sun: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
    </svg>
  ),
  moon: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.3 6.3 0 0 0 10.5 10.5Z" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

/* ---------------- Scroll reveal ---------------- */
// Adds .is-in when the element scrolls into view. `kind` picks the transform.
export function Reveal({ children, kind = "up", delay = 0, className = "", as = "div", style = {}, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setSeen(true);
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
    };
    const check = () => {
      if (done || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.9 && r.bottom > 0) reveal();
    };
    // initial check (timeout so layout is settled; fires even when tab unfocused)
    check();
    const tid = setTimeout(check, 80);
    window.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(tid);
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
    };
  }, []);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={cx("reveal", `reveal--${kind}`, seen && "is-in", className)}
      style={{ transitionDelay: seen ? `${delay}ms` : "0ms", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Tech tag ---------------- */
export function Tag({ children }) {
  return (
    <span className="inline-flex whitespace-nowrap rounded-[7px] border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[12.5px] leading-tight text-[var(--text-2)]">
      {children}
    </span>
  );
}

/* ---------------- Section header (eyebrow + title) ---------------- */
export function SectionHeader({ index, eyebrow, title, kicker }) {
  return (
    <Reveal kind="up" className="mb-14">
      <div className="mb-4 flex items-center gap-3 font-mono text-[13px] text-[var(--accent)]">
        <span className="rounded-md border border-[var(--border)] px-[7px] py-0.5 text-xs text-[var(--text-3)]">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="w-fit bg-gradient-to-br from-[var(--text)] to-[var(--accent)] bg-clip-text text-[clamp(30px,5vw,46px)] text-transparent">
        {title}
      </h2>
      {kicker && <p className="mt-3.5 max-w-[54ch] text-[17px] text-[var(--text-2)]">{kicker}</p>}
    </Reveal>
  );
}
