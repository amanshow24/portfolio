import { Webhook } from "lucide-react"
import { FaJava, FaLayerGroup } from "react-icons/fa6"
import { Expressjs, TypeScript, JavaScript, Docker, Git, MongoDB, Postman, MySQL, TailwindCSS, React, Nodejs, Firebase, GitHub, CSS, AmazonWebServices } from "../ui/DevIcons"
import { SiBootstrap, SiChakraui, SiCloudinary, SiEjs, SiGooglecloud, SiJsonwebtokens, SiLinux, SiRazorpay, SiRender, SiVercel, SiZod } from "react-icons/si"
import SkillCard from "./SkillCard"
import FadeIn from "../ui/FadeIn"

const categories = [
    { 
        title: "Languages", 
        skills: [
            { name: "JavaScript", Icon: JavaScript },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Java", Icon: FaJava }
        ] 
    },
    { 
        title: "Frontend", 
        skills: [
            { name: "CSS", Icon: CSS },
            { name: "React", Icon: React },
            { name: "Tailwind CSS", Icon: TailwindCSS },
            { name: "Bootstrap", Icon: SiBootstrap },
            { name: "Zustand", Icon: FaLayerGroup },
            { name: "Chakra UI", Icon: SiChakraui }
        ]  
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", Icon: Nodejs },
            { name: "Express.js", Icon: Expressjs },
            { name: "REST APIs", Icon: Webhook },
            { name: "JWT Authentication", Icon: SiJsonwebtokens },
            { name: "EJS", Icon: SiEjs }
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", Icon: MongoDB },
            { name: "MySQL", Icon: MySQL },
            { name: "Firebase", Icon: Firebase },
        ]
    },
    {
        title: "CS Fundamentals",
        skills: [
            { name: "Data Structures & Algorithms" },
            { name: "OOP" },
            { name: "DBMS" },
            { name: "OS Concepts" },
            { name: "SDLC" },
            { name: "Agile Methodologies" }
        ]
    },
    {
        title: "Tools & Cloud",
        skills: [
            { name: "Git", Icon: Git },
            { name: "GitHub", Icon: GitHub },
            { name: "Docker", Icon: Docker },
            { name: "Postman", Icon: Postman },
            { name: "Razorpay", Icon: SiRazorpay },
            { name: "Zod", Icon: SiZod },
            { name: "Vercel", Icon: SiVercel },
            { name: "Render", Icon: SiRender },
            { name: "Linux", Icon: SiLinux },
            { name: "Cloudinary", Icon: SiCloudinary },
            { name: "AWS", Icon: AmazonWebServices },
            { name: "Google Cloud Platform", Icon: SiGooglecloud }
        ]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="md:py-24 py-12 w-full border-b-4 border-foreground">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <FadeIn>
                    <div className="text-center mb-20"> 
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">My Tech Stack</h2>
                        <div className="w-20 h-2 bg-foreground mx-auto mt-3" />
                        <p className="text-muted-foreground text-md sm:text-lg mt-4 font-medium">Technical tools which bring my ideas to life.</p>
                    </div>
                </FadeIn>

                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mb-12 border-b-2 border-dashed border-foreground/15 pb-8 last:border-b-0 last:pb-0">
                        {/* Category Left Header Block */}
                        <div className="w-full md:w-1/4 shrink-0 flex items-center md:items-start">
                            <FadeIn delay={index * 0.1}>
                                <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 border-3 border-foreground shadow-[3px_3px_0px_var(--foreground)] font-mono text-sm sm:text-base font-black uppercase tracking-wider select-none">
                                    {category.title}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Category Skills Grid Box */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap gap-4 w-full justify-start items-center">
                            {category.skills.map((skill, idx) => (
                                <FadeIn key={idx} delay={(index * 0.1) + (idx * 0.05)} className="w-full xl:w-auto">
                                    <SkillCard {...skill} />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
