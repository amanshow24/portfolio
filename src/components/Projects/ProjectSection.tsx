import ProjectCard from "./ProjectCard";
import FadeIn from "../ui/FadeIn";

const projects = [
    {
        title: "Smart Traffic Management System",
        description: "A SIH 2025 prototype for the Government of Odisha featuring secure authentication, bilingual UI, real-time traffic monitoring, analytics, and smart urban congestion insights.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion", "TanStack Query"],
        image: "/smart_traffic.png",
        githubLink: "https://github.com/amanshow24/smart-traffic",
        liveLink: "https://smart-traffic-ruddy.vercel.app/",
    },
    {
        title: "LiveTrack",
        description: "A real-time location-sharing platform built with Node.js, Socket.IO, and MongoDB. Supports multi-room participation, live participant tracking, and India-specific geolocation mapping with MapLibre GL.",
        technologies: ["React", "Vite", "Node.js", "Express.js", "Socket.IO", "MongoDB", "MapLibre GL"],
        image: "/livetrack.png",
        githubLink: "https://github.com/amanshow24/Live-Track",
        liveLink: "https://live-track-nu.vercel.app/",
    },
    {
        title: "Zipply",
        description: "A full-stack URL shortener and QR platform with JWT authentication, role-based access, subscription enforcement, Razorpay payments, and transactional email delivery through Brevo.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "JWT", "Razorpay", "Brevo API", "bcryptjs", "Helmet"],
        image: "/zipply.png",
        githubLink: "https://github.com/amanshow24/zipply",
        liveLink: "https://zipply.onrender.com/login",
    },
    {
        title: "LatencyLens",
        description: "A REST API performance testing tool for GET, POST, PUT, DELETE, and PATCH requests across configurable load ranges, with latency percentile reporting and JSON/CSV export.",
        technologies: ["Node.js", "Express.js", "Axios", "Vanilla JS", "Docker", "Node perf_hooks"],
        image: "/latencylens.png",
        githubLink: "https://github.com/amanshow24/LatencyLens",
        liveLink: "https://latencylens.onrender.com/",
    },
    {
        title: "Movify",
        description: "A movie discovery web app powered by TMDB that showcases trending, top-rated, upcoming, and popular content with a sleek Netflix-inspired interface.",
        technologies: ["HTML", "CSS", "JavaScript", "TMDB API"],
        image: "/movify.png",
        githubLink: "https://github.com/amanshow24/movify",
        liveLink: "https://amanshow24.github.io/movify/",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="md:py-24 py-12 w-full border-b-4 border-foreground">
             <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
                            My Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-4">Featured Projects</h2>
                        <div className="w-24 h-1.5 bg-foreground mx-auto mb-4" />
                        <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                            A selection of projects where I've turned complex problems into elegant solutions.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.15}>
                            <ProjectCard 
                                {...project}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
