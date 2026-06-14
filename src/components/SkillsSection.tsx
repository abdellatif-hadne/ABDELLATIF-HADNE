import { motion } from "framer-motion";

interface Skill {
  label: string;
  docUrl: string;
  iconUrl: string;
}

interface Category {
  name: string;
  prefix: string;
  direction?: "left" | "right";
  skills: Skill[];
}


const skillCategories: Category[] = [
  {
    name: "Offensive Security",
    prefix: "$ ls ./cyber-operations/",
    direction: "left",
    skills: [
      { label: "Ghidra", docUrl: "https://ghidra-sre.org/", iconUrl: "https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/master/Ghidra/Framework/Gui/src/main/resources/images/GhidraIcon64.png" },
      { label: "CyberChef", docUrl: "https://gchq.github.io/CyberChef/", iconUrl: "https://raw.githubusercontent.com/gchq/CyberChef/master/src/web/static/images/cyberchef-128x128.png" },
      { label: "Penetration Testing", docUrl: "https://www.google.com/search?q=penetration+testing+documentation", iconUrl: "https://cdn.simpleicons.org/kalilinux/00ff88" },
      { label: "Wireshark", docUrl: "https://www.wireshark.org/docs/", iconUrl: "https://cdn.simpleicons.org/wireshark/ffffff" },
      { label: "Snort", docUrl: "https://www.snort.org/documents", iconUrl: "https://cdn.simpleicons.org/snort/ffffff" },
      { label: "Splunk", docUrl: "https://docs.splunk.com/", iconUrl: "https://cdn.simpleicons.org/splunk/ffffff" },
      { label: "Nessus", docUrl: "https://docs.tenable.com/nessus/", iconUrl: "https://cdn.simpleicons.org/tenable/ffffff" },
      { label: "Hashcat", docUrl: "https://hashcat.net/wiki/", iconUrl: "https://cdn.simpleicons.org/hashcat/ffffff" },
      { label: "OWASP Top 10", docUrl: "https://owasp.org/www-project-top-ten/", iconUrl: "https://cdn.simpleicons.org/owasp/ff4d6d" },
      { label: "Burp Suite", docUrl: "https://portswigger.net/burp/documentation", iconUrl: "https://cdn.simpleicons.org/burpsuite/f4a261" },
      { label: "Metasploit", docUrl: "https://docs.metasploit.com/", iconUrl: "https://img.icons8.com/?size=100&id=PW0ChfedZvTh&format=png&color=000000" },
      { label: "Nmap", docUrl: "https://nmap.org/docs.html", iconUrl: "https://img.icons8.com/?size=100&id=9b5wowKIlo9d&format=png&color=000000" },
      { label: "OSINT", docUrl: "https://www.google.com/search?q=OSINT+framework+documentation", iconUrl: "https://cdn.simpleicons.org/duckduckgo/a78bfa" },
      { label: "XSS", docUrl: "https://owasp.org/www-community/attacks/xss/", iconUrl: "https://img.icons8.com/?size=100&id=6iFGzIfewTcR&format=png&color=000000" },
      { label: "SQL Injection", docUrl: "https://owasp.org/www-community/attacks/SQL_Injection", iconUrl: "https://img.icons8.com/?size=100&id=tR8ereAVKwsT&format=png&color=000000" },
      { label: "Privilege Escalation", docUrl: "https://www.google.com/search?q=privilege+escalation+techniques+guide", iconUrl: "https://cdn.simpleicons.org/linux/00ff88" },
      { label: "SSRF", docUrl: "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery", iconUrl: "https://cdn.simpleicons.org/nginx/f4a261" },
      { label: "IDOR", docUrl: "https://owasp.org/www-project-web-security-testing-guide/", iconUrl: "https://cdn.simpleicons.org/owasp/a78bfa" },
      { label: "Race Conditions", docUrl: "https://www.google.com/search?q=race+condition+vulnerability+guide", iconUrl: "https://cdn.simpleicons.org/clockify/4cc9f0" },
      { label: "File Inclusion", docUrl: "https://www.google.com/search?q=LFI+RFI+file+inclusion+vulnerability", iconUrl: "https://cdn.simpleicons.org/files/f4a261" },
      { label: "Command Injection", docUrl: "https://owasp.org/www-community/attacks/Command_Injection", iconUrl: "https://cdn.simpleicons.org/gnubash/00ff88" },
      { label: "Auth Bypass", docUrl: "https://owasp.org/www-project-web-security-testing-guide/", iconUrl: "https://cdn.simpleicons.org/auth0/ff4d6d" },
      { label: "Bug Bounty", docUrl: "https://www.hackerone.com/resources", iconUrl: "https://cdn.simpleicons.org/hackerone/f4a261" },
      { label: "Exploit Research", docUrl: "https://www.exploit-db.com/", iconUrl: "https://cdn.simpleicons.org/rapid7/ff4d6d" },
      { label: "Email Security", docUrl: "https://www.google.com/search?q=email+security+SPF+DKIM+DMARC", iconUrl: "https://cdn.simpleicons.org/protonmail/a78bfa" },
      { label: "Security Reporting", docUrl: "https://www.google.com/search?q=security+report+writing+guide", iconUrl: "https://cdn.simpleicons.org/gitbook/a78bfa" },
      { label: "Subdomain Enum", docUrl: "https://www.google.com/search?q=subdomain+enumeration+tools+guide", iconUrl: "https://cdn.simpleicons.org/amazonaws/4cc9f0" },
      
    ],
  },
  {
    name: "Programming",
    prefix: "$ ls ./software-engineering-ai/",
    direction: "left",
    skills: [
      { label: "Python", docUrl: "https://docs.python.org/3/", iconUrl: "https://cdn.simpleicons.org/python/4cc9f0" },
      { label: "JavaScript", docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/f4d261" },
      { label: "Java", docUrl: "https://docs.oracle.com/en/java/", iconUrl: "https://cdn.simpleicons.org/openjdk/f4a261" },
      { label: "Bash", docUrl: "https://www.gnu.org/software/bash/manual/", iconUrl: "https://cdn.simpleicons.org/gnubash/00ff88" },
      { label: "PHP", docUrl: "https://www.php.net/docs.php", iconUrl: "https://cdn.simpleicons.org/php/a78bfa" },
      { label: "C++", docUrl: "https://isocpp.org/", iconUrl: "https://cdn.simpleicons.org/cplusplus/4826F3" },
      { label: "SQLite", docUrl: "https://sqlite.org/docs.html", iconUrl: "https://cdn.simpleicons.org/sqlite/61B3E2" },
      { label: "MySQL", docUrl: "https://www.mysql.com/fr/", iconUrl: "https://cdn.simpleicons.org/mysql/2027FA" },
      { label: "React.js", docUrl: "https://react.dev/", iconUrl: "https://cdn.simpleicons.org/react/4cc9f0" },
      { label: "HTML", docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML", iconUrl: "https://cdn.simpleicons.org/html5/f4a261" },
      { label: "CSS", docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS", iconUrl: "https://cdn.simpleicons.org/css3/4cc9f0" },
      { label: "C", docUrl: "https://devdocs.io/c/", iconUrl: "https://cdn.simpleicons.org/c/4826F3" },
      { label: "Laravel", docUrl: "https://laravel.com/docs/", iconUrl: "https://cdn.simpleicons.org/laravel/F32648" },
      { label: "Spring Boot", docUrl: "https://spring.io/projects/spring-boot", iconUrl: "https://cdn.simpleicons.org/springboot/24FA24" },
      { label: "Git", docUrl: "https://git-scm.com/doc", iconUrl: "https://cdn.simpleicons.org/git/f4a261" },
      { label: "GitHub", docUrl: "https://docs.github.com/en", iconUrl: "https://cdn.simpleicons.org/github/ffffff" },
      { label: "Deep Learning", docUrl: "https://www.deeplearning.ai/", iconUrl: "https://cdn.simpleicons.org/tensorflow/a78bfa" },
      { label: "PyTorch", docUrl: "https://pytorch.org/docs/", iconUrl: "https://cdn.simpleicons.org/pytorch/f4a261" },
      { label: "Computer Vision", docUrl: "https://opencv.org/documentation/", iconUrl: "https://cdn.simpleicons.org/opencv/4cc9f0" },
      { label: "CNNs", docUrl: "https://www.google.com/search?q=convolutional+neural+networks+documentation", iconUrl: "https://cdn.simpleicons.org/keras/a78bfa" },
      { label: "Jupyter", docUrl: "https://docs.jupyter.org/", iconUrl: "https://cdn.simpleicons.org/jupyter/f4a261" },
      { label: "Data Analysis", docUrl: "https://pandas.pydata.org/docs/", iconUrl: "https://cdn.simpleicons.org/pandas/00ff88" },
      { label: "Medical Imaging", docUrl: "https://www.google.com/search?q=medical+imaging+AI+documentation", iconUrl: "https://cdn.simpleicons.org/diagramsdotnet/ff4d6d" },
      { label: "GitLab", docUrl: "https://docs.gitlab.com", iconUrl: "https://cdn.simpleicons.org/gitlab/ffffff" },
    ],
  },
  {
    name: "Systems & Networks",
    prefix: "$ ls ./infrastructure-architecture/",
    direction: "right",
    skills: [
      { label: "Linux", docUrl: "https://www.kernel.org/doc/html/latest/", iconUrl: "https://cdn.simpleicons.org/linux/f4a261" },
      { label: "Networking", docUrl: "https://www.google.com/search?q=networking+TCP+IP+documentation", iconUrl: "https://cdn.simpleicons.org/cisco/4cc9f0" },
      { label: "Cloud Security", docUrl: "https://aws.amazon.com/security/", iconUrl: "https://cdn.simpleicons.org/amazonaws/4cc9f0" },
      { label: "Virtualization", docUrl: "https://www.virtualbox.org/wiki/Documentation", iconUrl: "https://cdn.simpleicons.org/virtualbox/a78bfa" },
      { label: "Active Directory", docUrl: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/", iconUrl: "https://cdn.simpleicons.org/microsoft/a78bfa" },
      { label: "Cryptography", docUrl: "https://www.google.com/search?q=cryptography+algorithms+documentation", iconUrl: "https://cdn.simpleicons.org/letsencrypt/00ff88" },
      { label: "GNS3", docUrl: "https://docs.gns3.com/", iconUrl: "https://cdn.simpleicons.org/gns3/4cc9f0" },
      { label: "Network Automation", docUrl: "https://www.google.com/search?q=network+automation+ansible+documentation", iconUrl: "https://cdn.simpleicons.org/ansible/00ff88" },
    ],
  },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const parent = target.parentElement;
    if (parent) {
      const span = document.createElement("span");
      span.style.cssText = "font-size:12px;color:#94a3b8;font-weight:600;text-align:center;";
      span.textContent = skill.label.slice(0, 2).toUpperCase();
      parent.appendChild(span);
    }
  };

  return (
    <a
      href={skill.docUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={skill.label}
      className="group flex flex-col items-center gap-2.5 cursor-pointer no-underline flex-shrink-0"
    >
      <div className="skill-tile w-16 h-16 rounded-2xl flex items-center justify-center">
        <img
          src={skill.iconUrl}
          alt={skill.label}
          width={34}
          height={34}
          loading="lazy"
          className="transition-transform duration-300 group-hover:scale-110"
          onError={handleError}
        />
      </div>
      <span
        className="text-[11px] text-muted-foreground group-hover:text-primary transition-colors text-center leading-tight max-w-[72px]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {skill.label}
      </span>
    </a>
  );
};

const InfiniteCarousel = ({
  skills,
  direction = "left",
  speed = 40,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Two identical halves → translateX(-50%) loops seamlessly.
  const half = (key: string) => (
    <div className="flex gap-6 pr-6 shrink-0" aria-hidden={key === "b"}>
      {skills.map((skill, i) => (
        <SkillIcon key={`${key}-${skill.label}-${i}`} skill={skill} />
      ))}
    </div>
  );

  return (
    <div
      className="relative overflow-hidden w-full py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="marquee"
        style={
          {
            "--marquee-duration": `${speed}s`,
            "--marquee-direction": direction === "right" ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {half("a")}
        {half("b")}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="surface inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wide text-primary shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            SKILLS &amp; EXPERTISE
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Tools I <span className="gradient-text">build &amp; break</span> with
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-sm md:text-base">
            A collection of technologies I&apos;m proficient with — from offensive security to AI.
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {cat.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                <span className="surface text-[11px] font-mono text-muted-foreground px-2.5 py-1 rounded-full">
                  {cat.skills.length} tools
                </span>
              </div>

              {/* Infinite scrolling carousel */}
              <InfiniteCarousel
                skills={cat.skills}
                direction={cat.direction ?? "left"}
                speed={Math.max(28, cat.skills.length * 2.6)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
