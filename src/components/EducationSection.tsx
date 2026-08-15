import FadeIn from "./FadeIn";
import { GraduationCap, CalendarDays } from "lucide-react";

const education = [
    {
        school: "Faculté des Sciences et Techniques Gueliz - Marrakech",
        degree: "Engineering Degree - IT Security (Sécurité d'Information Technologique)",
        period: "2024 - 2027",
        tags: ["Ethical Hacking & Security Testing", "Cryptography & Network Security", "Cloud Security & DevOps", "Cyber Incident Management & Digital Forensics", "Network and system security", "Mobile programming", "Java programming and security", "IT security and cyber law", "Back-end & front-end web development", "Project and Business Management", "Application and service security", "Cloud security and blockchain", "IT project management and agile methodologies", "Systems and Network Administration", "Security of banking payment systems and industrial information systems"],
        logo: "/fst_marrakech_logo.png",
        link: "https://www.fstg-marrakech.ac.ma/",
    },
    {
        school: "FSTE - Errachidia",
        degree: "DEUST - Math, Computer Science & Physics",
        period: "2022 - 2024",
        tags: ["Programming & Databases"],
        logo: "/fst_errachidia_logo.png",
        link: "https://fst-maroc.com/school/6",
    },
    {
        school: "Lycée Abi El Kacem",
        degree: "Baccalauréat - Physical Sciences (Mention Bien)",
        period: "2021 - 2022",
        tags: [],
        logo: "/high_school_logo.png",
        link: "#",
    },
];

const EducationSection = () => {
    return (
        <section id="education" className="py-20 md:py-28 relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <FadeIn className="mb-14 text-center" margin="-80px">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Academic <span className="gradient-text">background</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                        My academic path toward cybersecurity engineering.
                    </p>
                </FadeIn>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-8 top-3 bottom-3 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
                    <div className="space-y-6">
                        {education.map((item, idx) => (
                            <FadeIn
                                key={idx}
                                delay={idx * 0.08}
                                className="relative pl-[76px] sm:pl-24"
                            >
                                {/* Node */}
                                <a
                                    href={item.link}
                                    target={item.link !== "#" ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    title={`Visit ${item.school}`}
                                    className="group/logo absolute left-0 top-0 z-10 grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-sm ring-4 ring-background transition-colors hover:border-primary/40"
                                >
                                    <img
                                        src={`${import.meta.env.BASE_URL}${item.logo.replace(/^\//, "")}`}
                                        alt={`${item.school} logo`}
                                        className="h-full w-full object-contain transition-transform group-hover/logo:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = "none";
                                            target.parentElement?.classList.add("fallback-icon");
                                        }}
                                    />
                                    <GraduationCap className="hidden h-7 w-7 text-primary group-[.fallback-icon]/logo:block" />
                                </a>

                                {/* Card */}
                                <div className="surface card-glow rounded-2xl p-5 sm:p-6 shadow-sm">
                                    <div className="mb-2 flex flex-col gap-1.5 md:flex-row md:items-start md:justify-between">
                                        <a
                                            href={item.link}
                                            target={item.link !== "#" ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="group/title"
                                        >
                                            <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover/title:text-primary">
                                                {item.school}
                                            </h3>
                                        </a>
                                        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-primary">
                                            <CalendarDays className="h-3.5 w-3.5" />
                                            {item.period}
                                        </span>
                                    </div>

                                    <p className="mb-4 text-sm font-medium text-muted-foreground">{item.degree}</p>

                                    {item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-md border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
