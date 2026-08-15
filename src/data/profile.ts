/**
 * Curated profile data used by the interactive terminal.
 * Mirrors what is displayed in the portfolio sections.
 */

export const identity = {
  name: "Abdelhadi Rizki",
  handle: "0xRizki",
  role: "Cybersecurity Engineering Student",
  focus: "AI applied to security - Blue Team (SOC/SIEM) & Offensive Security",
  school: "FST Gueliz - Marrakech (Engineering Degree, IT Security, 2024-2027)",
  location: "Marrakech, Morocco",
  status: "Open to internships & security work",
  languages: ["Arabic", "French", "English"],
};

export const contact = [
  { label: "email", value: "rizkiabdelhadi4@gmail.com", href: "mailto:rizkiabdelhadi4@gmail.com" },
  { label: "phone", value: "+212 659 030 899", href: "tel:+212659030899" },
  { label: "location", value: "Marrakech, Morocco", href: "https://www.google.com/maps/search/?api=1&query=Marrakech,Morocco" },
];

export const socials = [
  { label: "github", value: "github.com/Rizki033", href: "https://github.com/Rizki033" },
  { label: "linkedin", value: "linkedin.com/in/abdelhadi-rizki", href: "https://www.linkedin.com/in/abdelhadi-rizki/" },
  { label: "x", value: "x.com/Rizki40109", href: "https://x.com/Rizki40109" },
  { label: "dcg", value: "linkedin.com/company/dcg-marrakech", href: "https://linkedin.com/company/dcg-marrakech" },
];

export interface SkillGroup {
  key: string;
  label: string;
  color: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: "blue",
    label: "Blue Team & Infrastructure",
    color: "text-emerald-400",
    items: [
      "Wazuh", "Splunk", "Elastic SIEM", "Elasticsearch", "Kibana", "Logstash", "Graylog",
      "Suricata", "Snort", "Wireshark", "MISP", "TheHive", "Cortex", "Shuffle (SOAR)",
      "SOC Operations", "Threat Detection", "Threat Intelligence", "Incident Response",
      "Log Analysis", "MITRE ATT&CK", "Grafana", "Prometheus", "Nessus", "Active Directory",
      "Linux", "Networking", "Cloud Security", "Docker", "Kubernetes", "Terraform", "Ansible", "GNS3",
    ],
  },
  {
    key: "red",
    label: "Offensive Security",
    color: "text-rose-400",
    items: [
      "Penetration Testing", "Burp Suite", "Metasploit", "Nmap", "Ghidra", "CyberChef",
      "Hashcat", "OWASP Top 10", "OSINT", "XSS", "SQL Injection", "SSRF", "IDOR",
      "Command Injection", "Auth Bypass", "Privilege Escalation", "Bug Bounty",
      "Exploit Research", "Email Security", "Subdomain Enum",
    ],
  },
  {
    key: "ai",
    label: "AI & Development",
    color: "text-cyan-400",
    items: [
      "Python", "PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "CNNs",
      "Computer Vision", "Anomaly Detection", "AI Threat Detection", "Pandas", "NumPy",
      "Jupyter", "React.js", "FastAPI", "Laravel", "Spring Boot", "JavaScript", "Java",
      "PHP", "C++", "Bash", "MySQL", "Git", "GitHub",
    ],
  },
];

export interface TerminalProject {
  name: string;
  desc: string;
  stack: string;
  url: string;
}

export const projects: TerminalProject[] = [
  { name: "PentAI", desc: "AI-powered security automation for recon, vuln discovery & offensive workflows.", stack: "AI / Python / Ollama", url: "https://github.com/Rizki033/PentAI" },
  { name: "oneSec", desc: "All-in-one Bash installer & manager for 19+ pentesting tools, interactive TUI.", stack: "Bash / CLI", url: "https://github.com/Rizki033/oneSec" },
  { name: "NeuroScan AI", desc: "Brain tumor detection from MRI with secure auth and real-time inference.", stack: "React / FastAPI / PyTorch", url: "https://github.com/Rizki033/Brain-Tumor-WebApp" },
  { name: "VigilantScan", desc: "SOC-style dashboard simulating web vulnerability scanning and reporting.", stack: "React / JS", url: "https://github.com/Rizki033/VIGILANTSCAN" },
  { name: "NetSentry AI", desc: "ML-based DDoS detection classifying network traffic in real time.", stack: "Python / Scikit-learn", url: "https://github.com/Rizki033/NetSentry-AI" },
  { name: "ARP Spoof & DNS Sniff", desc: "Scapy script for ARP spoofing and DNS interception on local networks.", stack: "Python / Scapy", url: "https://github.com/Rizki033/ARP-Spoofing-DNS-Sniffing-Script" },
  { name: "Deep Learning Med. Imaging", desc: "CNN for MRI tumor classification with feature visualization (600 epochs).", stack: "PyTorch / OpenCV", url: "https://github.com/Rizki033/Deep-Learning-Model" },
  { name: "Ifrane CleanTech", desc: "Smart waste reporting platform with GPS and photo evidence.", stack: "Laravel / MySQL", url: "https://github.com/Rizki033/Ifrane-CleanTech" },
  { name: "AI-Service", desc: "Facial recognition API for smart student attendance tracking.", stack: "FastAPI / OpenCV", url: "https://github.com/FSTG-Tracker/ai-service" },
  { name: "CTF-Challenges-Solutions", desc: "Write-ups for solved CTFs: crypto, web, reverse, forensics, OSINT.", stack: "Python / Ruby", url: "https://github.com/Rizki033/CTF-Challenges-Solutions" },
];

export interface TerminalEntry {
  role: string;
  org: string;
  period: string;
  note: string;
}

export const experience: TerminalEntry[] = [
  { role: "Stagiaire SOC Analyst | Threat Intelligence & IR", org: "ARWA Medic", period: "juin 2026 - present", note: "SOC/SIEM architecture, MISP + Kaspersky IoC feeds, SOAR with TheHive/Cortex/Shuffle, DFIR playbooks." },
  { role: "Cybersecurity Student - SkillUp IT 2026", org: "EMAN Aerospace", period: "mars 2026 - 4 mois", note: "Security architecture, network hardening, Agile (KANBAN) delivery." },
  { role: "Bug Bounty Hunter", org: "Bugcrowd & HackerOne", period: "janv. 2026 - present", note: "Web app testing, vulnerability research, responsible disclosure." },
  { role: "CTF Player | Red Team Practice", org: "TryHackMe", period: "janv. 2025 - present", note: "Gold League, top 6% - web, network and privesc challenges." },
];

export const volunteering: TerminalEntry[] = [
  { role: "Founder", org: "DCG Marrakech (DEF CON Group)", period: "2026 - present", note: "Marrakech hacker community: red team, blue team, CTF, workshops." },
  { role: "Co-Founder", org: "n8n Marrakech Community", period: "2026 - present", note: "Automation meetups and no-code / low-code security workflows." },
  { role: "Member & Event Volunteer", org: "GDG Marrakesh", period: "Dec 2025 - present", note: "DevFest 2025 and Build With AI 2026 logistics and coordination." },
];

export const education: TerminalEntry[] = [
  { role: "Engineering Degree - IT Security", org: "FST Gueliz, Marrakech", period: "2024 - 2027", note: "Ethical hacking, cryptography, cloud security, DFIR, secure development." },
  { role: "DEUST - Math, CS & Physics", org: "FSTE Errachidia", period: "2022 - 2024", note: "Programming and databases foundation." },
  { role: "Baccalaureat - Physical Sciences", org: "Lycee Abi El Kacem", period: "2021 - 2022", note: "Mention Bien." },
];

export const certifications = [
  { name: "Ethical Hacker", issuer: "Cisco", date: "May 2026" },
  { name: "Jr Penetration Tester", issuer: "TryHackMe", date: "Feb 2026" },
  { name: "Ransomware Defense Masterclass", issuer: "SOCRadar", date: "Jul 2025" },
  { name: "Cyber Threat Intelligence for SOC Analysts", issuer: "SOCRadar", date: "Jul 2025" },
  { name: "Certified Email Authentication Specialist", issuer: "Proofpoint", date: "Apr 2025" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Mar 2025" },
  { name: "CCNA: Automation and Programmability", issuer: "Cybrary", date: "Feb 2025" },
  { name: "Python Essentials 1", issuer: "Cisco", date: "Jan 2025" },
];

export const achievements = [
  { name: "1st Prize IT - SKILLUP26", detail: "Winner of the IT prize at the 8th Summer School in Aeronautics, Marrakech." },
  { name: "Security Research Recognition - SEM", detail: "Recognition letter for a responsibly disclosed vulnerability." },
  { name: "TryHackMe Gold League", detail: "1st place, top 6% worldwide." },
  { name: "Natas CTF - OverTheWire", detail: "All 33 levels completed." },
  { name: "Knights of the Fury CTF", detail: "8th of 100 teams with S4M_Hack, 24h competition." },
  { name: "Official CTF Player - SOC4M", detail: "Representing team SOC4M in cybersecurity competitions." },
];

export const sections: { id: string; label: string }[] = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "projects", label: "projects" },
  { id: "certs", label: "certs" },
  { id: "blog", label: "blog" },
  { id: "cv", label: "cv" },
  { id: "contact", label: "contact" },
];
