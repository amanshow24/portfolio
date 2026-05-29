import EducationCard from "../About/EducationCard";
import FadeIn from "../ui/FadeIn";

const educationJourney = [
    {
        year: "2023 — 2027",
        title: "B.Tech in Computer Science and Engineering",
        institution: {
            name: "RCC Institute of Information Technology",
            link: "https://rcciit.org.in/",
            tooltipDescription: "A leading engineering institute in Kolkata affiliated with MAKAUT, focused on computer science, software engineering, and applied technology."
        },
        degree: "MAKAUT • CGPA: 7.96/10",
        description: "Building a strong foundation in software development, problem-solving, and production-focused engineering while preparing for full-stack and backend roles."
    },
    {
        year: "2023",
        title: "Higher Secondary Education",
        degree: "Baradongal Ramanath Institution",
        description: "Completed higher secondary education with 84% marks."
    },
    {
        year: "2021",
        title: "Secondary Education",
        degree: "Baradongal Ramanath Institution",
        description: "Completed secondary education with 88.42% marks."
    }
];

const quickStats = [
  { value: "12+", label: "Projects Built", accent: "text-foreground" },
    { value: "4+", label: "Achievements", accent: "text-foreground" },
    { value: "2+", label: "Years Building", accent: "text-foreground" },
];

export default function About() {
  return (
    <section id="about" className="md:py-24 py-12 w-full border-b-4 border-foreground">
      {/* About Me Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              About Me
            </h2>
            <div className="w-16 h-2 bg-foreground mx-auto mt-3" />
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-6 text-left text-foreground bg-card border-4 border-foreground p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <p className="text-lg leading-relaxed font-medium">
                Full-Stack Developer passionate about building production-ready software and solving real-world problems through clean, scalable engineering.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                I enjoy shipping end-to-end web products, combining frontend polish, backend reliability, real-time features, and cloud deployment with strong product execution.
              </p>

              {/* Quick Stats - Updated with Neubrutalist boxes */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-6 border-t-4 border-foreground">
                {quickStats.map((stat, i) => (
                  <div key={i} className="text-center bg-background border-2 border-foreground p-3 shadow-[3px_3px_0px_0px_var(--foreground)]">
                    <div className={`text-xl sm:text-2xl font-black ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-tight text-muted-foreground mt-1.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              {/* Picture Frame Wrapper */}
              <div className="relative w-80 h-96 bg-card border-4 border-foreground shadow-[10px_10px_0px_0px_var(--foreground)] p-3 select-none">
                <div className="w-full h-full border-2 border-foreground overflow-hidden bg-foreground/5">
                  <img
                    src="/profile.jpeg"
                    alt="Aman Kumar Show"
                      className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Education Journey Section */}
      <div className="max-w-4xl mx-auto mt-28 px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              My Journey
            </span>
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase">Education & Growth</h2>
            <div className="w-24 h-1.5 bg-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-md sm:text-lg max-w-2xl mx-auto font-medium">
              A deliberate move into software, shaped by continuous learning and problem‑solving.
            </p>
          </div>
        </FadeIn>
        
        {/* Timeline (Refactored to be thick, solid, and left-aligned for maximum card width) */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground" />
          
          <div className="space-y-10 md:space-y-14">
            {educationJourney.map((edu, index) => (
              <FadeIn 
                key={index} 
                delay={index * 0.2}
                direction="right"
              >
                <div className="relative flex items-start">
                  {/* Robust Black Circle Marker */}
                  <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 mt-8 z-10 shadow-[2px_2px_0px_var(--foreground)]" />
                  
                  <div className="w-full ml-10 sm:ml-14">
                    <EducationCard {...edu} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
