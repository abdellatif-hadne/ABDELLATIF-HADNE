import { motion } from "framer-motion";

interface Skill {
  label: string;
  docUrl: string;
  iconUrl: string;
}

interface Category {
  name: string;
  prefix?: string;
  direction?: "left" | "right";
  skills: Skill[];
}


const skillCategories: Category[] = [
  {
    name: "Blue Team & Infrastructure",
    direction: "left",
    skills: [
      { label: "SIEM Implementation", docUrl: "https://www.google.com/search?q=SIEM+implementation+guide", iconUrl: "https://cdn.simpleicons.org/elasticstack/4cc9f0" },
      { label: "Splunk", docUrl: "https://docs.splunk.com/", iconUrl: "https://cdn.simpleicons.org/splunk/f4a261" },
      { label: "Elastic SIEM", docUrl: "https://www.elastic.co/security", iconUrl: "https://cdn.simpleicons.org/elastic/4cc9f0" },
      { label: "Elasticsearch", docUrl: "https://www.elastic.co/elasticsearch", iconUrl: "https://cdn.simpleicons.org/elasticsearch/4cc9f0" },
      { label: "Kibana", docUrl: "https://www.elastic.co/kibana", iconUrl: "https://cdn.simpleicons.org/kibana/00ff88" },
      { label: "Logstash", docUrl: "https://www.elastic.co/logstash", iconUrl: "https://cdn.simpleicons.org/logstash/f4a261" },
      { label: "Wazuh", docUrl: "https://documentation.wazuh.com/", iconUrl: "https://cdn.simpleicons.org/wazuh/4cc9f0" },
      { label: "Graylog", docUrl: "https://docs.graylog.org/", iconUrl: "https://cdn.simpleicons.org/graylog/a78bfa" },
      { label: "Suricata", docUrl: "https://docs.suricata.io/", iconUrl: "https://cdn.simpleicons.org/suricata/ff4d6d" },
      { label: "Snort", docUrl: "https://www.snort.org/documents", iconUrl: "https://cdn.simpleicons.org/snort/ffffff" },
      { label: "Wireshark", docUrl: "https://www.wireshark.org/docs/", iconUrl: "https://cdn.simpleicons.org/wireshark/ffffff" },
      { label: "SOC Operations", docUrl: "https://www.google.com/search?q=SOC+operations+blue+team+guide", iconUrl: "https://cdn.simpleicons.org/datadog/a78bfa" },
      { label: "Threat Detection", docUrl: "https://www.google.com/search?q=threat+detection+engineering", iconUrl: "https://cdn.simpleicons.org/elasticsearch/00ff88" },
      { label: "Threat Intelligence", docUrl: "https://www.google.com/search?q=cyber+threat+intelligence", iconUrl: "https://cdn.simpleicons.org/virustotal/4cc9f0" },
      { label: "Incident Response", docUrl: "https://www.google.com/search?q=incident+response+DFIR+guide", iconUrl: "https://cdn.simpleicons.org/pagerduty/00ff88" },
      { label: "Log Analysis", docUrl: "https://www.google.com/search?q=log+analysis+security+guide", iconUrl: "https://cdn.simpleicons.org/logstash/00ff88" },
      { label: "Grafana", docUrl: "https://grafana.com/docs/", iconUrl: "https://cdn.simpleicons.org/grafana/f4a261" },
      { label: "Prometheus", docUrl: "https://prometheus.io/docs/", iconUrl: "https://cdn.simpleicons.org/prometheus/f4a261" },
      { label: "Nessus", docUrl: "https://docs.tenable.com/nessus/", iconUrl: "https://cdn.simpleicons.org/tenable/ffffff" },
      { label: "MITRE ATT&CK", docUrl: "https://attack.mitre.org/", iconUrl: "https://cdn.simpleicons.org/owasp/4cc9f0" },
      { label: "Linux", docUrl: "https://www.kernel.org/doc/html/latest/", iconUrl: "https://cdn.simpleicons.org/linux/f4a261" },
      { label: "Networking", docUrl: "https://www.google.com/search?q=networking+TCP+IP+documentation", iconUrl: "https://cdn.simpleicons.org/cisco/4cc9f0" },
      { label: "Cloud Security", docUrl: "https://aws.amazon.com/security/", iconUrl: "https://cdn.simpleicons.org/amazonaws/4cc9f0" },
      { label: "Active Directory", docUrl: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/", iconUrl: "https://cdn.simpleicons.org/microsoft/a78bfa" },
      { label: "Cryptography", docUrl: "https://www.google.com/search?q=cryptography+algorithms+documentation", iconUrl: "https://cdn.simpleicons.org/letsencrypt/00ff88" },
      { label: "Docker", docUrl: "https://docs.docker.com/", iconUrl: "https://cdn.simpleicons.org/docker/4cc9f0" },
      { label: "Kubernetes", docUrl: "https://kubernetes.io/docs/", iconUrl: "https://cdn.simpleicons.org/kubernetes/4cc9f0" },
      { label: "Terraform", docUrl: "https://developer.hashicorp.com/terraform/docs", iconUrl: "https://cdn.simpleicons.org/terraform/a78bfa" },
      { label: "Ansible", docUrl: "https://docs.ansible.com/", iconUrl: "https://cdn.simpleicons.org/ansible/00ff88" },
      { label: "GNS3", docUrl: "https://docs.gns3.com/", iconUrl: "https://cdn.simpleicons.org/gns3/4cc9f0" },
    ],
  },
  {
    name: "AI & Development",
    direction: "right",
    skills: [
      { label: "Python", docUrl: "https://docs.python.org/3/", iconUrl: "https://cdn.simpleicons.org/python/4cc9f0" },
      { label: "PyTorch", docUrl: "https://pytorch.org/docs/", iconUrl: "https://cdn.simpleicons.org/pytorch/f4a261" },
      { label: "TensorFlow", docUrl: "https://www.tensorflow.org/learn", iconUrl: "https://cdn.simpleicons.org/tensorflow/f4a261" },
      { label: "Deep Learning", docUrl: "https://www.deeplearning.ai/", iconUrl: "https://cdn.simpleicons.org/keras/a78bfa" },
      { label: "Anomaly Detection", docUrl: "https://www.google.com/search?q=anomaly+detection+cybersecurity+machine+learning", iconUrl: "https://cdn.simpleicons.org/scikitlearn/4cc9f0" },
      { label: "AI Threat Detection", docUrl: "https://www.google.com/search?q=AI+threat+detection+cybersecurity", iconUrl: "https://cdn.simpleicons.org/openai/a78bfa" },
      { label: "Scikit-learn", docUrl: "https://scikit-learn.org/stable/", iconUrl: "https://cdn.simpleicons.org/scikitlearn/f4a261" },
      { label: "Computer Vision", docUrl: "https://opencv.org/documentation/", iconUrl: "https://cdn.simpleicons.org/opencv/4cc9f0" },
      { label: "CNNs", docUrl: "https://www.google.com/search?q=convolutional+neural+networks+documentation", iconUrl: "https://cdn.simpleicons.org/keras/a78bfa" },
      { label: "Pandas", docUrl: "https://pandas.pydata.org/docs/", iconUrl: "https://cdn.simpleicons.org/pandas/a78bfa" },
      { label: "NumPy", docUrl: "https://numpy.org/doc/", iconUrl: "https://cdn.simpleicons.org/numpy/4cc9f0" },
      { label: "Data Analysis", docUrl: "https://pandas.pydata.org/docs/", iconUrl: "https://cdn.simpleicons.org/pandas/00ff88" },
      { label: "Jupyter", docUrl: "https://docs.jupyter.org/", iconUrl: "https://cdn.simpleicons.org/jupyter/f4a261" },
      { label: "Medical Imaging", docUrl: "https://www.google.com/search?q=medical+imaging+AI+documentation", iconUrl: "https://cdn.simpleicons.org/diagramsdotnet/ff4d6d" },
      { label: "JavaScript", docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/f4d261" },
      { label: "Java", docUrl: "https://docs.oracle.com/en/java/", iconUrl: "https://cdn.simpleicons.org/openjdk/f4a261" },
      { label: "Bash", docUrl: "https://www.gnu.org/software/bash/manual/", iconUrl: "https://cdn.simpleicons.org/gnubash/00ff88" },
      { label: "C++", docUrl: "https://isocpp.org/", iconUrl: "https://cdn.simpleicons.org/cplusplus/4826F3" },
      { label: "PHP", docUrl: "https://www.php.net/docs.php", iconUrl: "https://cdn.simpleicons.org/php/a78bfa" },
      { label: "React.js", docUrl: "https://react.dev/", iconUrl: "https://cdn.simpleicons.org/react/4cc9f0" },
      { label: "Laravel", docUrl: "https://laravel.com/docs/", iconUrl: "https://cdn.simpleicons.org/laravel/F32648" },
      { label: "Spring Boot", docUrl: "https://spring.io/projects/spring-boot", iconUrl: "https://cdn.simpleicons.org/springboot/24FA24" },
      { label: "MySQL", docUrl: "https://www.mysql.com/fr/", iconUrl: "https://cdn.simpleicons.org/mysql/2027FA" },
      { label: "Git", docUrl: "https://git-scm.com/doc", iconUrl: "https://cdn.simpleicons.org/git/f4a261" },
      { label: "GitHub", docUrl: "https://docs.github.com/en", iconUrl: "https://cdn.simpleicons.org/github/ffffff" },
    ],
  },
  {
    name: "Offensive Security",
    direction: "left",
    skills: [
      { label: "Penetration Testing", docUrl: "https://www.google.com/search?q=penetration+testing+documentation", iconUrl: "https://cdn.simpleicons.org/kalilinux/00ff88" },
      { label: "Burp Suite", docUrl: "https://portswigger.net/burp/documentation", iconUrl: "https://cdn.simpleicons.org/burpsuite/f4a261" },
      { label: "Metasploit", docUrl: "https://docs.metasploit.com/", iconUrl: "https://img.icons8.com/?size=100&id=PW0ChfedZvTh&format=png&color=000000" },
      { label: "Nmap", docUrl: "https://nmap.org/docs.html", iconUrl: "https://img.icons8.com/?size=100&id=9b5wowKIlo9d&format=png&color=000000" },
      { label: "Ghidra", docUrl: "https://ghidra-sre.org/", iconUrl: "https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/master/Ghidra/Framework/Gui/src/main/resources/images/GhidraIcon64.png" },
      { label: "CyberChef", docUrl: "https://gchq.github.io/CyberChef/", iconUrl: "https://raw.githubusercontent.com/gchq/CyberChef/master/src/web/static/images/cyberchef-128x128.png" },
      { label: "Hashcat", docUrl: "https://hashcat.net/wiki/", iconUrl: "https://cdn.simpleicons.org/hashcat/ffffff" },
      { label: "OWASP Top 10", docUrl: "https://owasp.org/www-project-top-ten/", iconUrl: "https://cdn.simpleicons.org/owasp/ff4d6d" },
      { label: "OSINT", docUrl: "https://www.google.com/search?q=OSINT+framework+documentation", iconUrl: "https://cdn.simpleicons.org/duckduckgo/a78bfa" },
      { label: "XSS", docUrl: "https://owasp.org/www-community/attacks/xss/", iconUrl: "https://img.icons8.com/?size=100&id=6iFGzIfewTcR&format=png&color=000000" },
      { label: "SQL Injection", docUrl: "https://owasp.org/www-community/attacks/SQL_Injection", iconUrl: "https://img.icons8.com/?size=100&id=tR8ereAVKwsT&format=png&color=000000" },
      { label: "Privilege Escalation", docUrl: "https://www.google.com/search?q=privilege+escalation+techniques+guide", iconUrl: "https://cdn.simpleicons.org/linux/00ff88" },
      { label: "SSRF", docUrl: "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery", iconUrl: "https://cdn.simpleicons.org/nginx/f4a261" },
      { label: "IDOR", docUrl: "https://owasp.org/www-project-web-security-testing-guide/", iconUrl: "https://cdn.simpleicons.org/owasp/a78bfa" },
      { label: "Command Injection", docUrl: "https://owasp.org/www-community/attacks/Command_Injection", iconUrl: "https://cdn.simpleicons.org/gnubash/00ff88" },
      { label: "Auth Bypass", docUrl: "https://owasp.org/www-project-web-security-testing-guide/", iconUrl: "https://cdn.simpleicons.org/auth0/ff4d6d" },
      { label: "Bug Bounty", docUrl: "https://www.hackerone.com/resources", iconUrl: "https://cdn.simpleicons.org/hackerone/f4a261" },
      { label: "Exploit Research", docUrl: "https://www.exploit-db.com/", iconUrl: "https://cdn.simpleicons.org/rapid7/ff4d6d" },
      { label: "Email Security", docUrl: "https://www.google.com/search?q=email+security+SPF+DKIM+DMARC", iconUrl: "https://cdn.simpleicons.org/protonmail/a78bfa" },
      { label: "Subdomain Enum", docUrl: "https://www.google.com/search?q=subdomain+enumeration+tools+guide", iconUrl: "https://cdn.simpleicons.org/amazonaws/4cc9f0" },
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
            From blue-team operations and SIEM to AI-driven security — with hands-on offensive depth.
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
