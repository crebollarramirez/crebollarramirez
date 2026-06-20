import React from "react";
import { Icon, Reveal, SectionHeader, Tag } from "./ui.jsx";
import { cx } from "./lib/cx.js";
import tritonLogo from "./assets/uc-san-diego-tritons.svg";

// sections.jsx — About/Education, Experience timeline, Projects grid.

const hasLink = (href) =>
  typeof href === "string" && href.trim() !== "" && href.trim() !== "#";

/* ------------------------------- ABOUT ---------------------------------- */
export function About({ profile, skills, education }) {
  return (
    <section
      id="about"
      className="relative z-[1] mx-auto max-w-[var(--maxw)] px-6 py-[100px] max-sm:px-5 max-sm:py-20"
      data-screen-label="About"
    >
      <SectionHeader index="01" eyebrow="About" title="A bit about me" />
      <div className="grid grid-cols-[1.3fr_1fr] gap-14 max-[920px]:grid-cols-1 max-[920px]:gap-10">
        <Reveal kind="up">
          <p className="mb-5 [font-family:var(--font-display)] text-[21px] leading-normal font-medium text-[var(--text)]">
            {profile.blurb}
          </p>
          <p className="mb-7 text-[var(--text-2)]">{profile.interests}</p>
          <div>
            <h3 className="mb-[18px] font-mono text-[13px] font-medium tracking-[0.08em] text-[var(--text-3)] uppercase">
              Education
            </h3>
            {education.map((e) => (
              <div className="flex flex-col items-start gap-2" key={e.school}>
                <div className="flex items-center">
                  <div className="grid size-28 flex-none place-items-center max-sm:size-20">
                    <img
                      className="size-full object-contain"
                      src={tritonLogo}
                      alt="UC San Diego Tritons logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2.5">
                      <span
                        className="mt-[0.62em] h-px w-5 flex-none bg-[var(--border-2)]"
                        aria-hidden="true"
                      />
                      <div className="animated-accent-text [font-family:var(--font-display)] text-[17px] leading-tight font-semibold">
                        {e.degree1}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span
                        className="mt-[0.62em] h-px w-5 flex-none bg-[var(--border-2)]"
                        aria-hidden="true"
                      />
                      <div className="animated-accent-text [font-family:var(--font-display)] text-[17px] leading-tight font-semibold">
                        {e.degree2}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="my-1 text-[14.5px] text-[var(--text-2)]">
                    <span className="animated-accent-text font-semibold">
                      {e.school}
                    </span>
                    <span className="text-[var(--text-3)]"> · {e.period}</span>
                  </div>
                  <div className="text-sm text-[var(--text-3)]">{e.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal kind="left" delay={80}>
          <h3 className="mb-[18px] font-mono text-[13px] font-medium tracking-[0.08em] text-[var(--text-3)] uppercase">
            Toolbox
          </h3>
          <div className="flex flex-col gap-[22px]">
            {skills.map((s) => (
              <div key={s.group}>
                <div className="mb-2.5 [font-family:var(--font-display)] text-[15px] font-semibold text-[var(--text)]">
                  {s.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <Tag key={it}>{it}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- EXPERIENCE ------------------------------- */
// Per-role image carousel built from image URLs in data.jsx.
// Renders nothing when there are no images so image-less roles stay clean.
function Carousel({ images = [], label }) {
  const [i, setI] = React.useState(0);
  if (!images.length) return null;
  const go = (n) => setI((c) => (c + n + images.length) % images.length);
  const navClass =
    "absolute top-1/2 z-[2] grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[var(--border-2)] bg-[var(--surface)] text-lg text-[var(--text)] backdrop-blur-[10px] transition duration-200 ease-[var(--ease)] hover:border-transparent hover:bg-gradient-to-br hover:from-[var(--accent)] hover:to-[var(--accent-2)] hover:text-[var(--accent-ink)]";

  return (
    <div className="relative -mx-7 -mt-[26px] mb-6 h-[clamp(200px,30vw,340px)] overflow-hidden border-b border-[var(--border)] bg-[var(--bg-2)]">
      <div
        className="flex h-full transition-transform duration-500 ease-[var(--ease)]"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {images.map((src, k) => (
          <div className="h-full flex-[0_0_100%]" key={k}>
            <img
              className="size-full object-cover"
              src={src}
              alt={`${label} screenshot ${k + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <React.Fragment>
          <button
            className={cx(navClass, "left-3 hover:-translate-x-0.5")}
            onClick={() => go(-1)}
            aria-label="Previous image"
          >
            <Icon.arrow style={{ transform: "rotate(180deg)" }} />
          </button>
          <button
            className={cx(navClass, "right-3 hover:translate-x-0.5")}
            onClick={() => go(1)}
            aria-label="Next image"
          >
            <Icon.arrow />
          </button>
          <div className="absolute top-3 right-3 z-[2] rounded-[7px] border border-[var(--border-2)] bg-[var(--surface)] px-2.5 py-1 font-mono text-xs whitespace-nowrap text-[var(--text)] backdrop-blur-[10px]">
            {i + 1} / {images.length}
          </div>
          <div className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 gap-[7px]">
            {images.map((_, k) => (
              <button
                key={k}
                className={cx(
                  "h-2 rounded-full bg-[oklch(0.8_0.02_var(--h)_/_0.55)] transition-all duration-300",
                  k === i ? "w-[22px] bg-[var(--accent)]" : "w-2",
                )}
                onClick={() => setI(k)}
                aria-label={`Go to image ${k + 1}`}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

function ExperienceItem({ job, delay }) {
  const link = hasLink(job.link) ? job.link : null;

  return (
    <Reveal kind="up" delay={delay} className="relative pb-11 last:pb-0">
      <div
        className="absolute top-1.5 -left-8 size-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_0_0_4px_var(--accent-soft)]"
        aria-hidden="true"
      />
      <div className="mb-3 font-mono text-[13px] text-[var(--accent)]">
        {job.period}
      </div>
      <div className="relative overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)] px-7 py-[26px] backdrop-blur-md transition duration-300 ease-[var(--ease)] hover:translate-x-1.5 hover:border-[var(--accent)] hover:shadow-[var(--shadow)]">
        <Carousel images={job.images} label={job.company} />
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-[21px]">{job.role}</h3>
            <span className="[font-family:var(--font-display)] text-[17px] font-semibold text-[var(--accent)] before:text-[var(--text-3)] before:content-['·_']">
              {job.company}
            </span>
          </div>
          {link && (
            <a
              className="grid size-9 flex-none place-items-center rounded-[10px] border border-[var(--border)] text-[var(--text-2)] transition duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] [&_svg]:text-lg"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${job.company}`}
            >
              <Icon.arrowUpRight />
            </a>
          )}
        </div>
        <div className="my-3.5 flex gap-3.5 font-mono text-[13px] text-[var(--text-3)]">
          <span className="inline-flex items-center gap-1.5">
            <Icon.pin /> {job.location}
          </span>
        </div>
        <p className="mb-3.5 text-[var(--text-2)]">{job.summary}</p>
        <ul className="mb-[18px] flex flex-col gap-2">
          {job.highlights.map((h, j) => (
            <li
              className="relative pl-[22px] text-[15px] text-[var(--text-2)] before:absolute before:left-0 before:font-mono before:text-[var(--accent)] before:content-['→']"
              key={j}
            >
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {job.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Experience({ items }) {
  return (
    <section
      id="experience"
      className="relative z-[1] mx-auto max-w-[var(--maxw)] px-6 py-[100px] max-sm:px-5 max-sm:py-20"
      data-screen-label="Experience"
    >
      <SectionHeader
        index="02"
        eyebrow="Experience"
        title="Where I've worked"
        kicker="A timeline of roles, teams, and the things I shipped."
      />
      <div className="timeline relative pl-8">
        <div
          className="absolute top-1.5 bottom-1.5 left-[5px] w-0.5 overflow-hidden rounded-sm bg-[var(--border)]"
          aria-hidden="true"
        >
          <div className="timeline__spine-fill absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_10px_var(--glow)] transition-transform duration-150" />
        </div>
        {items.map((job, i) => (
          <ExperienceItem job={job} delay={i * 60} key={job.company} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ PROJECTS -------------------------------- */
function ProjectCard({ project, delay }) {
  const image = project.images?.[0];
  const github = hasLink(project.github) ? project.github : null;
  const link = hasLink(project.link) ? project.link : null;

  return (
    <Reveal kind="up" delay={delay} className="project-card-hit">
      <div className="project-card flex flex-row overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] backdrop-blur-md max-[920px]:flex-col">
        {image && (
          <div className="relative min-h-[300px] flex-[0_0_44%] overflow-hidden bg-[var(--bg-2)] max-[920px]:min-h-[200px] max-[920px]:flex-none max-[920px]:aspect-[16/10]">
            <img
              className="size-full object-cover"
              src={image}
              alt={`${project.name} screenshot`}
              loading="lazy"
            />
          </div>
        )}
        <div
          className={cx(
            "flex flex-1 flex-col justify-center px-[34px] py-[30px]",
            !image && "px-[38px] py-[34px]",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl">{project.name}</h3>
            {(github || link) && (
              <div className="flex flex-none gap-2">
                {github && (
                  <a
                    className="grid size-9 flex-none place-items-center rounded-[10px] border border-[var(--border)] text-[var(--text-2)] transition duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] [&_svg]:text-lg"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    title="View source on GitHub"
                  >
                    <Icon.github />
                  </a>
                )}
                {link && (
                  <a
                    className="grid size-9 flex-none place-items-center rounded-[10px] border border-[var(--border)] text-[var(--text-2)] transition duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] [&_svg]:text-lg"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name}`}
                    title="Open live site"
                  >
                    <Icon.arrowUpRight />
                  </a>
                )}
              </div>
            )}
          </div>
          <p className="my-3.5 text-[15px] text-[var(--text-2)]">
            {project.blurb}
          </p>
          <ul className="mb-[18px] flex flex-col gap-[7px]">
            {project.bullets.map((b, i) => (
              <li
                className="relative pl-5 text-[14.5px] text-[var(--text-2)] before:absolute before:top-[9px] before:left-0.5 before:size-1.5 before:rounded-full before:bg-[var(--accent)]"
                key={i}
              >
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-[7px]">
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects({ items }) {
  return (
    <section
      id="projects"
      className="relative z-[1] mx-auto max-w-[var(--maxw)] px-6 pt-[100px] pb-[120px] max-sm:px-5 max-sm:py-20"
      data-screen-label="Projects"
    >
      <SectionHeader
        index="03"
        eyebrow="Projects"
        title="Things I've built"
        kicker="A selection of work — open-source, side projects, and experiments."
      />
      <div className="flex flex-col gap-6 max-[920px]:gap-5">
        {items.map((pr, i) => (
          <ProjectCard key={pr.name} project={pr} delay={(i % 2) * 70} />
        ))}
      </div>
    </section>
  );
}
