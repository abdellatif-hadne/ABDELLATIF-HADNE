import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  stars?: number;
}

const projects: Project[] = [
  {
    title: "PentAI",
    description:
      "AI-powered security automation platform for reconnaissance, vulnerability discovery, pentesting operations, and offensive security workflows.",
    tags: ["AI", "Red Teaming", "Offensive Security", "Python", "JavaScript", "HTML", "CSS", "Shell", "ollama"],
    github: "https://github.com/Rizki033/PentAI",
    live: "https://pent-ai-rizki.lovable.app/",
  },
  {
    title: "oneSec",
    description:
      "All-in-one bash-based security tools installer and manager with 19+ pre-configured penetration testing tools and interactive terminal UI.",
    tags: ["Bash", "Security", "CLI"],
    github: "https://github.com/Rizki033/oneSec",
    stars: 3,
  },
  {
    title: "NeuroScan AI",
    description:
      "AI-powered web app for automatic brain tumor detection from MRI images. Secure authentication, encrypted data, and real-time AI analysis.",
    tags: ["React.js", "Python", "FastAPI", "PyTorch/ONNX", "PostgreSQL", "HTML", "CSS"],
    github: "https://github.com/Rizki033/Brain-Tumor-WebApp",
    stars: 2,
  },
  {
    title: "VigilantScan",
    description:
      "A sleek React security dashboard that simulates website vulnerability scanning and presents findings, reports, and scan activity in a modern SOC-style interface.",
    tags: ["JavaScript", "React.js", "HTML", "CSS"],
    github: "https://github.com/Rizki033/VIGILANTSCAN",
    stars: 2,
  },
  {
    title: "NetSentry AI",
    description:
      "AI-based DDoS attack detection system using machine learning to classify network traffic and identify malicious patterns in real-time.",
    tags: ["Python", "Machine Learning", "Network Security", "Pandas", "Scikit-learn"],
    github: "https://github.com/Rizki033/NetSentry-AI",
    stars: 2,
  },
  {
    title: "ARP Spoofing & DNS Sniffing",
    description:
      "Python script using Scapy for ARP spoofing attacks and DNS request interception on local networks for security research and education.",
    tags: ["Python", "Scapy", "Networking"],
    github: "https://github.com/Rizki033/ARP-Spoofing-DNS-Sniffing-Script",
    stars: 1,
  },
  {
    title: "Deep Learning Medical Imaging",
    description:
      "CNN model for brain tumor classification from MRI images with feature visualization, achieving high accuracy through 600 epochs of training.",
    tags: ["PyTorch", "Deep Learning", "Medical AI", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "Scikit-learn"],
    github: "https://github.com/Rizki033/Deep-Learning-Model",
  },
  {
    title: "Ifrane CleanTech",
    description:
      "Smart waste management platform that lets citizens report waste issues in real time using GPS and photos, helping municipalities optimize collection.",
    tags: ["PHP", "JavaScript", "MySQL", "Laravel"],
    github: "https://github.com/Rizki033/Ifrane-CleanTech",
  },
  {
    title: "AI-Service",
    description:
      "FastAPI-based facial recognition API for smart student attendance — capture and send photos for real-time identity verification and attendance tracking.",
    tags: ["Python", "SQLite", "FastAPI", "OpenCV", "Face Recognition"],
    github: "https://github.com/FSTG-Tracker/ai-service",
  },
  {
    title: "CTF-Challenges-Solutions",
    description:
      "A collection of Capture The Flag challenges I've solved — cryptography, web exploitation, reverse engineering and more, with detailed write-ups.",
    tags: ["Python", "Cryptography", "Web Exploitation", "OSINT", "Reverse Engineering", "Forensics", "Ruby", "Steganography"],
    github: "https://github.com/Rizki033/CTF-Challenges-Solutions",
  },
];

const MAX_TAGS = 5;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const extra = project.tags.length - MAX_TAGS;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  return (
    <FadeIn delay={(index % 3) * 0.08} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group card-spotlight card-accent relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_30px_-16px_hsl(var(--primary)/0.4)]"
      >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live website`}
              className="transition-colors hover:text-primary"
            >
              <ArrowUpRight className="h-[18px] w-[18px]" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="transition-colors hover:text-primary"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-1.5">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {extra > 0 && (
          <span className="px-1 text-[10px] text-primary/80">+{extra}</span>
        )}
      </div>
      </div>
    </FadeIn>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center" margin="-80px">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            A selection of security tools, AI systems, and full-stack apps I&apos;ve shipped.
          </p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
