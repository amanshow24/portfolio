import { FaAws, FaCss3Alt, FaJava } from "react-icons/fa6";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiLanggraph,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedis,
  SiRender,
  SiVercel,
} from "react-icons/si";
import { LuBrainCircuit, LuNetwork, LuServer, LuWandSparkles, LuWorkflow } from "react-icons/lu";
import SectionHeading from "./SectionHeading.jsx";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icons: [FaJava] },
      { name: "JavaScript", icons: [SiJavascript] },
      { name: "HTML", icons: [SiHtml5] },
      { name: "CSS", icons: [FaCss3Alt] },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icons: [SiReact] },
      { name: "Next.js", icons: [SiNextdotjs] },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icons: [SiNodedotjs] },
      { name: "Express.js", icons: [SiExpress] },
      { name: "REST APIs", icons: [LuServer] },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icons: [SiMongodb] },
      { name: "MySQL", icons: [SiMysql] },
      { name: "Redis", icons: [SiRedis] },
    ],
  },
  {
    title: "AI & LLM Engineering",
    wide: true,
    skills: [
      { name: "LLMs & APIs", icons: [LuBrainCircuit] },
      { name: "Prompt Engineering", icons: [LuWandSparkles] },
      { name: "Vector Databases & Embeddings (RAG)", icons: [LuNetwork] },
      { name: "Frameworks (LangChain / LangGraph)", icons: [SiLangchain, SiLanggraph] },
    ],
  },
  {
    title: "Tools & Cloud",
    wide: true,
    skills: [
      { name: "Git", icons: [SiGit] },
      { name: "GitHub", icons: [SiGithub] },
      { name: "CI/CD", icons: [LuWorkflow] },
      { name: "Docker", icons: [SiDocker] },
      { name: "Postman", icons: [SiPostman] },
      { name: "AWS", icons: [FaAws] },
      { name: "Linux", icons: [SiLinux] },
      { name: "Vercel", icons: [SiVercel] },
      { name: "Render", icons: [SiRender] },
    ],
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="section-wrap">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="About" />
          <div className="about-layout">
            <article className="about-copy max-w-3xl">
              <p className="text-base leading-8 text-secondary sm:text-lg">
                I'm Aman, a Computer Science and Engineering student at RCC Institute of Information
                Technology in Kolkata. I build full-stack web applications with React, Node.js, and
                MongoDB, with a particular interest in backend development and creating practical,
                reliable software.
              </p>
              <p className="mt-6 border-t border-line pt-5 text-base leading-8 text-secondary sm:text-lg">
                My work ranges from responsive client websites and backend services to real-time
                applications and AI-powered document search. I'm currently exploring applied AI,
                including LLM integrations and retrieval-augmented generation, while continuing to
                strengthen my problem-solving and software design skills.
              </p>
              <p className="mt-5 text-base leading-8 text-secondary sm:text-lg">
                Open to opportunities in{" "}
                <span className="font-semibold text-accent">Full-Stack Development</span>,{" "}
                <span className="font-semibold text-accent">Software Engineering (SDE)</span>,{" "}
                <span className="font-semibold text-accent">Backend Engineering</span>, and{" "}
                <span className="font-semibold text-accent">Applied AI</span>.
              </p>
            </article>
            <aside className="about-facts">
              <div>
                <p className="info-card-head mb-5">Quick facts</p>
                <div>
                  <div className="fact-row">
                    <p className="text-xs text-muted">Studying at</p>
                    <p className="mt-1 font-medium text-primary">
                      RCC Institute of Information Technology
                    </p>
                  </div>
                  <div className="fact-row">
                    <p className="text-xs text-muted">Based in</p>
                    <p className="mt-1 font-medium text-primary">Kolkata, India</p>
                  </div>
                  <div className="fact-row">
                    <p className="text-xs text-muted">Beyond the screen</p>
                    <p className="mt-1 font-medium leading-6 text-primary">
                      Chess · Running · Reading · Movies &amp; series
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="skills" className="section-wrap pt-4 sm:pt-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Skills" />
          <div className="skill-grid">
            {skillGroups.map(({ title, skills, wide }) => (
              <div
                key={title}
                className={`skill-group ${wide ? "skill-group-wide" : ""}`}
              >
                <div className="skill-group-heading">
                  <h3>{title}</h3>
                </div>
                <ul className="skill-list">
                  {skills.map(({ name, icons }) => (
                    <li className="skill-item" key={name}>
                      <span className="skill-item-icons" aria-hidden="true">
                        {icons.map((Icon, iconIndex) => (
                          <Icon key={`${name}-${iconIndex}`} focusable="false" />
                        ))}
                      </span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
