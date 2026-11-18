import { LuBriefcaseBusiness, LuExternalLink, LuWalletCards } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import SectionHeading from "./SectionHeading.jsx";

const projects = [
  {
    title: "Zipply — URL Shortener & QR Platform",
    stack: ["Node.js", "Express.js", "EJS", "MongoDB", "Redis"],
    description:
      "Full-stack URL shortener with JWT authentication and dynamic QR code generation. Redis-backed caching and IP-based rate limiting cut redirect response time from 450–600ms to 100–150ms.",
    github: "https://github.com/amanshow24/zipply",
    demo: "https://zipply.onrender.com",
  },
  {
    title: "DocuMind — AI PDF Q&A with RAG",
    stack: ["React", "Node.js", "Express.js", "Gemini API", "Pinecone"],
    description:
      "AI-powered document Q&A platform built on Retrieval-Augmented Generation. Chunks and embeds uploaded PDFs with Gemini, stores the vectors in Pinecone, and retrieves the closest matching chunks to ground every answer in the document itself instead of the model's general knowledge.",
    github: "https://github.com/amanshow24/DocuMind",
    demo: "https://documind-wheat.vercel.app/",
  },
  {
    title: "LiveTrack — Real-Time Location Sharing App",
    stack: ["Node.js", "Socket.IO", "React.js", "Vite", "MongoDB"],
    description:
      "Real-time, room-based location-sharing app. Integrated MapLibre GL for interactive maps and a custom DigiPin encoder/decoder for Indian locations.",
    github: "https://github.com/amanshow24/Live-Track",
    demo: "https://live-track-nu.vercel.app/",
  },
  {
    title: "LatencyLens — REST API Performance Testing Tool",
    stack: ["Node.js", "Express.js", "Axios", "Vanilla JS", "Docker"],
    description:
      "Developer tool for load testing any REST endpoint with support for GET, POST, PUT, DELETE, and PATCH across 1–100 requests. Reports P50, P95, P99 latency, success rate, and more.",
    github: "https://github.com/amanshow24/LatencyLens",
    demo: "https://latencylens.onrender.com/",
  },
];

const experience = [
  {
    logo: "veloop",
    title: "Backend Development Intern — VELoop Rewards",
    meta: "Oct 2026 – Nov 2026 · Remote",
    description:
      "Building a demonstration rewards wallet and payout system for a backend assignment using React, Node.js, Express, and MongoDB. Includes wallet ledger and history, configurable payouts, idempotent withdrawals, review flows, and audit records.",
    github: "https://github.com/amanshow24/veloop-wallet-system",
  },
  {
    logo: "freelance",
    title: "Freelance Front-End Developer",
    meta: "May 2026 – July 2026 · Remote",
    description:
      "Developed a responsive business website for a local oil manufacturing brand using React, JavaScript, and CSS. Built a product catalog for 10+ products with pricing and manufacturing details. Deployed on Vercel with WhatsApp, click-to-call, and Google Maps integration.",
  },
];

function ExternalLink({ href, children, Icon, variant }) {
  return (
    <a
      className={`project-action project-action-${variant}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon aria-hidden="true" focusable="false" />
      <span>{children}</span>
    </a>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="section-wrap pt-4 sm:pt-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Projects" />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card ${index === 0 ? "project-card-first" : ""}`}
              >
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-tag">{item}</span>
                  ))}
                </div>
                <div>
                  <h3 className="project-title font-display text-lg font-semibold tracking-tight text-primary sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="project-description mt-3 leading-7 text-secondary">{project.description}</p>
                  <div className="project-links">
                    <ExternalLink href={project.github} Icon={SiGithub} variant="secondary">
                      GitHub
                    </ExternalLink>
                    {project.demo && (
                      <ExternalLink href={project.demo} Icon={LuExternalLink} variant="primary">
                        Live demo
                      </ExternalLink>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-secondary">
            More on{" "}
            <a
              href="https://github.com/amanshow24?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent/40 text-accent hover:border-accent hover:text-primary"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      <section id="work" className="section-wrap">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Work" />
          {experience.map((job, index) => (
            <article
              key={job.title}
              className={`work-card ${index === 0 ? "work-card-first" : ""}`}
            >
              <div className="work-heading">
                <div className={`work-logo work-logo-${job.logo}`} aria-hidden="true">
                  {job.logo === "veloop" ? <LuWalletCards /> : <LuBriefcaseBusiness />}
                </div>
                <div className="flex min-w-0 flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <h3 className="font-display text-lg font-semibold text-primary">{job.title}</h3>
                  <p className="font-mono text-xs text-accent">{job.meta}</p>
                </div>
              </div>
              <p className="max-w-4xl leading-7 text-secondary">{job.description}</p>
              {job.github && (
                <div className="project-links">
                  <ExternalLink href={job.github} Icon={SiGithub} variant="secondary">
                    GitHub
                  </ExternalLink>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
