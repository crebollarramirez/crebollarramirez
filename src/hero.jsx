import React, { useState, useEffect } from "react";
import { Icon, Reveal } from "./ui.jsx";
import { cx } from "./lib/cx.js";

// hero.jsx — three hero directions, switchable via the `variant` prop.
//   "card"      → centered glassy business card
//   "editorial" → oversized left-aligned name, decorative panel right
//   "terminal"  → developer-flavored terminal window

/* Shared social button row */
export function SocialButtons({ links, size = "md", showEmail = true, layout = "default" }) {
  const isLarge = size === "lg";
  const isFooter = layout === "footer";
  const baseButton = cx(
    "inline-flex min-w-0 cursor-pointer items-center justify-center gap-[9px] whitespace-nowrap rounded-xl border border-transparent [font-family:var(--font-display)] font-semibold transition duration-200 ease-[var(--ease)] hover:-translate-y-0.5 [&_svg]:shrink-0 [&_svg]:text-lg",
    isLarge ? "px-6 py-3.5 text-base" : "px-5 py-3 text-[15px]",
    isFooter && "flex-[2_1_0] max-sm:px-3 max-sm:py-3 max-sm:text-sm",
  );

  return (
    <div className={cx("flex gap-2.5", isFooter ? "w-full max-w-xl flex-nowrap max-sm:gap-2" : "flex-wrap")}>
      <a
        className={cx(
          baseButton,
          "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-[var(--accent-ink)] shadow-[0_10px_30px_-10px_var(--glow)] hover:shadow-[0_16px_40px_-12px_var(--glow)]",
        )}
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.linkedin /> <span>LinkedIn</span>
      </a>
      <a
        className={cx(
          baseButton,
          "border-[var(--border-2)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        )}
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.github /> <span>GitHub</span>
      </a>
      {showEmail && (
        <a
          className={cx(
            "inline-flex min-w-0 cursor-pointer items-center justify-center rounded-xl border border-[var(--border-2)] bg-[var(--surface-2)] p-3 text-[var(--text)] transition duration-200 ease-[var(--ease)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] [&_svg]:shrink-0 [&_svg]:text-[19px]",
            isFooter && "flex-[1_1_0]",
          )}
          href={links.email}
          aria-label="Email"
          title="Email"
        >
          <Icon.mail />
        </a>
      )}
    </div>
  );
}

function Monogram({ name, className = "" }) {
  const initial = (name || "?").trim().charAt(0).toUpperCase();
  return (
    <div
      className={cx(
        "grid flex-none place-items-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] [font-family:var(--font-display)] text-[26px] font-bold text-[var(--accent-ink)] shadow-[0_10px_28px_-10px_var(--glow)]",
        className.includes("monogram--xl")
          ? "size-[120px] rounded-[28px] text-[56px]"
          : "size-14",
        className,
      )}
      aria-hidden="true"
    >
      <span>{initial}</span>
    </div>
  );
}

function AvailableChip() {
  return (
    <span className="inline-flex items-center gap-[7px] rounded-full border border-[var(--border-2)] bg-[var(--surface-2)] px-[11px] py-1 font-mono text-[12.5px] text-[var(--text-2)]">
      <span className="size-[7px] animate-pulse rounded-full bg-[oklch(0.72_0.17_150)] shadow-[0_0_0_3px_oklch(0.72_0.17_150_/_0.2)]" />
      Available for work
    </span>
  );
}

/* ----------------------------- Variant: CARD ----------------------------- */
function HeroCard({ p }) {
  const first = (p.name || p.fullName.split(" ")[0]).trim();
  const avRef = React.useRef(null);
  const hcRef = React.useRef(null);
  React.useEffect(() => {
    const av = avRef.current;
    if (!av) return;
    const top = av.closest(".heroc__top");
    const tx = top?.querySelector(".heroc__text");
    if (!tx) return;
    let raf = 0,
      last = 0,
      lit = false;
    const sync = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const isStackedLayout =
          getComputedStyle(top).flexDirection === "column";
        if (isStackedLayout) {
          av.style.removeProperty("width");
          av.style.removeProperty("height");
          top.style.setProperty("--roll-dist", "0px");
          if (!lit) {
            lit = true;
            requestAnimationFrame(
              () => hcRef.current && hcRef.current.classList.add("is-loaded"),
            );
          }
          return;
        }

        const h = tx.offsetHeight;
        if (Math.abs(h - last) >= 1) {
          last = h;
          av.style.width = h + "px";
          av.style.height = h + "px";
        }
        // distance to roll in from: text width + gap (≈ top width − avatar width)
        const dist = Math.max(0, top.offsetWidth - h);
        top.style.setProperty("--roll-dist", dist + "px");
        // trigger the entrance roll once the distance is known
        if (!lit) {
          lit = true;
          requestAnimationFrame(
            () => hcRef.current && hcRef.current.classList.add("is-loaded"),
          );
        }
      });
    };
    sync();
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(sync) : null;
    if (ro) ro.observe(tx);
    window.addEventListener("resize", sync);
    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);
  return (
    <div className="grid w-full max-w-[var(--maxw)] place-items-center">
      <Reveal
        kind="scale"
        className="relative w-[min(960px,100%)] p-[clamp(28px,4vw,48px)] max-md:p-0"
      >
        <div
          className="heroc relative z-[1] w-full text-left md:px-0 px-6"
          ref={hcRef}
        >
          <div className="heroc__top flex w-full items-center gap-[clamp(22px,4vw,40px)] max-md:flex-col max-md:items-center max-md:gap-6">
            {p.photo && (
              <div
                className="heroc__avatar aspect-square w-full max-w-full"
                ref={avRef}
              >
                <img src={p.photo} alt={p.fullName} />
                <span className="heroc__vinyl" aria-hidden="true"></span>
                <span className="heroc__notes" aria-hidden="true">
                  <span className="heroc__note heroc__note--1">♪</span>
                  <span className="heroc__note heroc__note--2">♫</span>
                  <span className="heroc__note heroc__note--3">♩</span>
                  <span className="heroc__note heroc__note--4">♬</span>
                </span>
              </div>
            )}
            <div className="heroc__text flex flex-1 flex-col justify-center gap-5 max-md:w-full">
              <h1 className="heroc__hi whitespace-nowrap text-[clamp(34px,6.4vw,76px)] leading-[1.02] font-bold tracking-[-0.03em]">
                Hello, I&apos;m <span className="accent">{first}.</span>
              </h1>
              <p className="heroc__role m-0 w-full [font-family:var(--font-display)] text-[clamp(20px,3.4vw,38px)] leading-tight font-medium tracking-[-0.02em] text-[var(--text-2)]">
                A <span className="accent">{p.title}.</span>
              </p>
              <div className="flex flex-wrap items-center justify-start gap-[18px]">
                <div className="flex gap-3">
                  <HeroIconButton
                    href={p.links.linkedin}
                    label="LinkedIn"
                    title="LinkedIn"
                    external
                  >
                    <Icon.linkedin />
                  </HeroIconButton>
                  <HeroIconButton
                    href={p.links.github}
                    label="GitHub"
                    title="GitHub"
                    external
                  >
                    <Icon.github />
                  </HeroIconButton>
                  <HeroIconButton
                    href={p.links.cv}
                    label="CV / Resume"
                    title="CV / Resume"
                    external
                  >
                    <Icon.file />
                  </HeroIconButton>
                  <HeroIconButton
                    href={p.links.email}
                    label="Email"
                    title="Email"
                  >
                    <Icon.mail />
                  </HeroIconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function HeroIconButton({ href, label, title, external = false, children }) {
  return (
    <a
      className="grid size-[52px] place-items-center rounded-[14px] border border-[var(--border-2)] bg-[var(--surface-2)] text-[22px] text-[var(--text)] transition duration-200 ease-[var(--ease)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-gradient-to-br hover:from-[var(--accent)] hover:to-[var(--accent-2)] hover:text-[var(--accent-ink)] hover:shadow-[0_12px_28px_-10px_var(--glow)]"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={title}
    >
      {children}
    </a>
  );
}

/* -------------------------- Variant: EDITORIAL --------------------------- */
function HeroEditorial({ p }) {
  return (
    <div className="grid w-full max-w-[var(--maxw)] grid-cols-[1.25fr_0.75fr] items-center gap-12 max-[920px]:grid-cols-1 max-[920px]:gap-8">
      <div>
        <Reveal
          kind="up"
          className="mb-[22px] flex flex-wrap items-center gap-3.5"
        >
          {p.available && <AvailableChip />}
          <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-[var(--text-3)] [&_svg]:text-[15px]">
            <Icon.pin /> {p.location}
          </span>
        </Reveal>
        <Reveal
          kind="up"
          delay={60}
          as="h1"
          className="mb-[22px] text-[clamp(46px,9vw,104px)] leading-[0.92]"
        >
          {p.fullName.split(" ").map((w, i) => (
            <span
              className={cx(
                "block",
                i === p.fullName.split(" ").length - 1 &&
                  "text-[var(--accent)]",
              )}
              key={i}
            >
              {w}
            </span>
          ))}
        </Reveal>
        <Reveal
          kind="up"
          delay={140}
          className="mb-[18px] [font-family:var(--font-display)] text-[clamp(18px,2.4vw,24px)] text-[var(--text-2)]"
        >
          {p.title}
        </Reveal>
        <Reveal
          kind="up"
          delay={200}
          as="p"
          className="mb-7 max-w-[46ch] text-[16.5px] text-[var(--text-2)]"
        >
          {p.blurb}
        </Reveal>
        <Reveal kind="up" delay={260}>
          <SocialButtons links={p.links} size="lg" />
        </Reveal>
      </div>
      <Reveal kind="left" delay={120} className="max-[920px]:max-w-[360px]">
        <div className="relative grid aspect-[3/4] place-items-center overflow-hidden rounded-3xl border border-[var(--border-2)] bg-[var(--surface-2)] shadow-[var(--shadow)]">
          <Monogram name={p.fullName} className="monogram--xl" />
          <div className="ed__panel-grid" aria-hidden="true" />
          <div className="absolute right-0 bottom-4 left-0 text-center font-mono text-xs text-[var(--text-3)]">
            portrait / photo (optional)
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* --------------------------- Variant: TERMINAL --------------------------- */
function HeroTerminal({ p }) {
  const handle = p.links.github.split("/").pop();
  const lines = [
    { prompt: true, cmd: "whoami" },
    { out: p.fullName },
    { prompt: true, cmd: "cat role.txt" },
    { out: p.title },
    { prompt: true, cmd: "cat about.md" },
    { out: p.blurb },
    { prompt: true, cmd: "ls ./links" },
    { links: true },
  ];
  // typewriter reveal of lines
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 350 : 480);
    return () => clearTimeout(t);
  }, [shown, lines.length]);

  return (
    <div className="flex w-full max-w-[var(--maxw)] flex-col items-center gap-7">
      <Reveal
        kind="scale"
        className="w-[min(720px,100%)] overflow-hidden rounded-2xl border border-[var(--border-2)] bg-[oklch(0.16_0.025_var(--h))] shadow-[var(--shadow)] [html[data-theme=light]_&]:bg-[oklch(0.2_0.02_var(--h))]"
      >
        <div className="flex items-center gap-2 border-b border-[oklch(0.3_0.03_var(--h))] bg-[oklch(0.22_0.03_var(--h))] px-4 py-3">
          <span className="size-3 rounded-full bg-[oklch(0.65_0.18_25)]" />
          <span className="size-3 rounded-full bg-[oklch(0.78_0.15_85)]" />
          <span className="size-3 rounded-full bg-[oklch(0.72_0.17_150)]" />
          <span className="ml-2.5 font-mono text-[12.5px] text-[oklch(0.65_0.03_var(--h))]">
            ~/{handle} — zsh
          </span>
        </div>
        <div className="min-h-80 p-[22px] font-mono text-[14.5px] leading-[1.7] text-[oklch(0.92_0.02_var(--h))]">
          {lines.slice(0, shown).map((l, i) => (
            <div className="term__line" key={i}>
              {l.prompt && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[oklch(0.74_0.155_var(--h))]">
                    chris@dev
                  </span>
                  <span className="text-[oklch(0.6_0.03_var(--h))]">:</span>
                  <span className="text-[oklch(0.78_0.13_230)]">~</span>
                  <span className="mr-1 text-[oklch(0.6_0.03_var(--h))]">
                    $
                  </span>
                  <span className="text-[oklch(0.95_0.01_var(--h))]">
                    {l.cmd}
                  </span>
                </div>
              )}
              {l.out && (
                <div className="max-w-[64ch] pt-0.5 pb-2.5 text-[oklch(0.78_0.03_var(--h))]">
                  {l.out}
                </div>
              )}
              {l.links && (
                <div className="flex gap-[18px] pt-0.5 pb-1.5">
                  <a
                    className="text-[oklch(0.74_0.155_var(--h))] underline underline-offset-3 hover:text-[oklch(0.85_0.12_var(--h))]"
                    href={p.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin/
                  </a>
                  <a
                    className="text-[oklch(0.74_0.155_var(--h))] underline underline-offset-3 hover:text-[oklch(0.85_0.12_var(--h))]"
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github/
                  </a>
                  <a
                    className="text-[oklch(0.74_0.155_var(--h))] underline underline-offset-3 hover:text-[oklch(0.85_0.12_var(--h))]"
                    href={p.links.email}
                  >
                    email
                  </a>
                </div>
              )}
            </div>
          ))}
          {shown >= lines.length && (
            <div className="term__line">
              <div className="flex items-center gap-1.5">
                <span className="text-[oklch(0.74_0.155_var(--h))]">
                  chris@dev
                </span>
                <span className="text-[oklch(0.6_0.03_var(--h))]">:</span>
                <span className="text-[oklch(0.78_0.13_230)]">~</span>
                <span className="mr-1 text-[oklch(0.6_0.03_var(--h))]">$</span>
                <span className="term__caret" />
              </div>
            </div>
          )}
        </div>
      </Reveal>
      <Reveal kind="up" delay={200} className="term__cta">
        <SocialButtons links={p.links} size="lg" />
      </Reveal>
    </div>
  );
}

export function Hero({ variant, p }) {
  if (variant === "editorial") return <HeroEditorial p={p} />;
  if (variant === "terminal") return <HeroTerminal p={p} />;
  return <HeroCard p={p} />;
}
