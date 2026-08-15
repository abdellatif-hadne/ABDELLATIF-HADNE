import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { posts, formatDate } from "@/data/blog";
import {
  identity,
  contact,
  socials,
  skillGroups,
  projects,
  experience,
  volunteering,
  education,
  certifications,
  achievements,
  sections,
} from "@/data/profile";

interface CommandResponse {
  input: string;
  output: string | React.ReactNode;
}

/* ---------- small output primitives ---------- */

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <p className="text-muted-foreground">
    <span className="text-foreground font-semibold">{label.padEnd(12, " ")}</span>
    {children}
  </p>
);

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline-offset-2 hover:underline"
  >
    {children}
  </a>
);

const Banner = () => (
  <div className="space-y-1">
    <p className="text-emerald-500 font-bold">0xRizki Secure Shell [Version 2.0.0]</p>
    <p className="text-muted-foreground text-xs">
      {identity.name} - {identity.role} - {identity.location}
    </p>
    <p className="text-muted-foreground text-xs">
      Type <span className="text-primary font-bold">help</span> for commands, or{" "}
      <span className="text-primary font-bold">whoami</span> to start. Tab completes, arrows recall.
    </p>
  </div>
);

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<CommandResponse[]>([
    { input: "", output: <Banner /> },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Escape closes the terminal, whatever has focus
  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom of terminal content on updates
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const totalSkills = skillGroups.reduce((n, g) => n + g.items.length, 0);

  const helpEntries: [string, string][] = [
    ["help", "Display this help menu"],
    ["whoami", "Identity, focus and current status"],
    ["skills [blue|red|ai]", "Security & dev toolset by domain"],
    ["projects [name]", "Security / AI projects with repo links"],
    ["experience", "Professional experience timeline"],
    ["volunteering", "Communities: DCG, n8n, GDG"],
    ["education", "Academic background"],
    ["certs", "Certifications and issuers"],
    ["awards", "CTF results, prizes and recognitions"],
    ["blog", "Latest write-ups"],
    ["contact", "Email, phone, location"],
    ["social", "GitHub, LinkedIn, X, DCG"],
    ["stats", "Portfolio numbers at a glance"],
    ["neofetch", "System card"],
    ["goto <section>", "Scroll the page to a section"],
    ["hack", "Run a pentest simulation"],
    ["banner", "Reprint the welcome banner"],
    ["clear", "Clear screen buffer"],
    ["exit", "Close the terminal"],
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return false;
    setIsOpen(false);
    setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    return true;
  };

  const commands: Record<string, (args: string[]) => string | React.ReactNode> = {
    help: () => (
      <div className="grid grid-cols-1 gap-x-4 gap-y-1 text-xs sm:grid-cols-2">
        {helpEntries.map(([cmd, desc]) => (
          <div key={cmd}>
            <span className="font-bold text-primary">{cmd}</span>
            <span className="text-muted-foreground"> - {desc}</span>
          </div>
        ))}
      </div>
    ),

    whoami: () => (
      <div className="space-y-1 text-xs">
        <Row label="name">{identity.name} ({identity.handle})</Row>
        <Row label="role">{identity.role}</Row>
        <Row label="focus">{identity.focus}</Row>
        <Row label="school">{identity.school}</Row>
        <Row label="location">{identity.location}</Row>
        <Row label="languages">{identity.languages.join(", ")}</Row>
        <Row label="status">
          <span className="text-emerald-500">{identity.status}</span>
        </Row>
      </div>
    ),

    skills: (args) => {
      const filter = args[0];
      const groups = filter
        ? skillGroups.filter((g) => g.key === filter || g.label.toLowerCase().includes(filter))
        : skillGroups;

      if (groups.length === 0) {
        return `Unknown category "${filter}". Try: skills blue | skills red | skills ai`;
      }

      return (
        <div className="space-y-2 text-xs">
          {groups.map((g) => (
            <div key={g.key}>
              <p className={`font-semibold ${g.color}`}>
                [{g.label}] ({g.items.length})
              </p>
              <p className="text-muted-foreground">{g.items.join(" · ")}</p>
            </div>
          ))}
          {!filter && (
            <p className="text-muted-foreground/70">
              {totalSkills} entries. Narrow with: skills blue | skills red | skills ai
            </p>
          )}
        </div>
      );
    },

    projects: (args) => {
      const q = args.join(" ").toLowerCase();
      const list = q ? projects.filter((p) => p.name.toLowerCase().includes(q)) : projects;

      if (list.length === 0) return `No project matching "${q}". Type "projects" to list them all.`;

      return (
        <div className="space-y-2 text-xs">
          {list.map((p, i) => (
            <div key={p.name}>
              <p>
                <span className="font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}. {p.name}
                </span>
                <span className="text-muted-foreground/70"> [{p.stack}]</span>
              </p>
              <p className="text-muted-foreground">{p.desc}</p>
              <Ext href={p.url}>{p.url.replace("https://", "")}</Ext>
            </div>
          ))}
        </div>
      );
    },

    experience: () => (
      <div className="space-y-2 text-xs">
        {experience.map((e) => (
          <div key={`${e.org}-${e.role}`}>
            <p className="font-bold text-primary">
              {e.role} <span className="text-muted-foreground/70">@ {e.org}</span>
            </p>
            <p className="text-emerald-500/80">{e.period}</p>
            <p className="text-muted-foreground">{e.note}</p>
          </div>
        ))}
      </div>
    ),

    volunteering: () => (
      <div className="space-y-2 text-xs">
        {volunteering.map((e) => (
          <div key={e.org}>
            <p className="font-bold text-primary">
              {e.role} <span className="text-muted-foreground/70">@ {e.org}</span>
            </p>
            <p className="text-emerald-500/80">{e.period}</p>
            <p className="text-muted-foreground">{e.note}</p>
          </div>
        ))}
      </div>
    ),

    education: () => (
      <div className="space-y-2 text-xs">
        {education.map((e) => (
          <div key={e.org}>
            <p className="font-bold text-primary">{e.role}</p>
            <p className="text-muted-foreground">
              {e.org} <span className="text-emerald-500/80">({e.period})</span>
            </p>
            <p className="text-muted-foreground/80">{e.note}</p>
          </div>
        ))}
      </div>
    ),

    certs: () => (
      <div className="space-y-1 text-xs">
        {certifications.map((c) => (
          <p key={c.name} className="text-muted-foreground">
            <span className="text-emerald-500">[✓]</span>{" "}
            <span className="text-foreground">{c.name}</span> - {c.issuer}{" "}
            <span className="text-muted-foreground/60">({c.date})</span>
          </p>
        ))}
        <p className="text-muted-foreground/70 pt-1">
          {certifications.length} certifications - run "goto certs" for the full list.
        </p>
      </div>
    ),

    awards: () => (
      <div className="space-y-1.5 text-xs">
        {achievements.map((a) => (
          <div key={a.name}>
            <p className="font-semibold text-amber-400">★ {a.name}</p>
            <p className="text-muted-foreground">{a.detail}</p>
          </div>
        ))}
      </div>
    ),

    blog: () => (
      <div className="space-y-2 text-xs">
        {posts.map((p) => (
          <div key={p.slug}>
            <p className="font-bold text-primary">{p.title}</p>
            <p className="text-muted-foreground/70">
              {formatDate(p.date)} · {p.readingTime} · {p.category}
            </p>
            <p className="text-muted-foreground">{p.excerpt}</p>
          </div>
        ))}
        <p className="text-muted-foreground/70">Run "goto blog" to open the blog section.</p>
      </div>
    ),

    contact: () => (
      <div className="space-y-1 text-xs">
        {contact.map((c) => (
          <Row key={c.label} label={c.label}>
            <Ext href={c.href}>{c.value}</Ext>
          </Row>
        ))}
        <p className="pt-1 text-emerald-500">{identity.status}</p>
      </div>
    ),

    social: () => (
      <div className="space-y-1 text-xs">
        {socials.map((s) => (
          <Row key={s.label} label={s.label}>
            <Ext href={s.href}>{s.value}</Ext>
          </Row>
        ))}
      </div>
    ),

    stats: () => (
      <div className="space-y-1 text-xs">
        <Row label="projects">{projects.length} public repositories</Row>
        <Row label="skills">{totalSkills} tools & techniques across {skillGroups.length} domains</Row>
        <Row label="experience">{experience.length} roles ({volunteering.length} communities)</Row>
        <Row label="certs">{certifications.length} certifications</Row>
        <Row label="awards">{achievements.length} results & recognitions</Row>
        <Row label="posts">{posts.length} write-ups published</Row>
      </div>
    ),

    neofetch: () => (
      <div className="flex items-start gap-4 font-mono text-xs leading-tight">
        <div className="shrink-0 whitespace-pre text-primary">
{`   /\\
  /  \\
 /\\  /\\
/  \\/  \\
\\  /\\  /
 \\/  \\/
  \\  /
   \\/`}
        </div>
        <div className="space-y-0.5">
          <p className="font-bold text-primary">rizki@0xrizki-secure-node</p>
          <p>-------------------------</p>
          <p><span className="font-semibold text-emerald-500">User:</span> {identity.name}</p>
          <p><span className="font-semibold text-emerald-500">Role:</span> {identity.role}</p>
          <p><span className="font-semibold text-emerald-500">Base:</span> {identity.location}</p>
          <p><span className="font-semibold text-emerald-500">Stack:</span> Wazuh · MISP · TheHive · Python · PyTorch</p>
          <p><span className="font-semibold text-emerald-500">Skills:</span> {totalSkills} tracked</p>
          <p><span className="font-semibold text-emerald-500">Repos:</span> {projects.length} public</p>
          <p><span className="font-semibold text-emerald-500">Certs:</span> {certifications.length} verified</p>
          <p><span className="font-semibold text-emerald-500">Shell:</span> 0xRizki secure shell v2.0.0</p>
        </div>
      </div>
    ),

    goto: (args) => {
      const target = args[0];
      if (!target) {
        return `Usage: goto <section>. Available: ${sections.map((s) => s.label).join(", ")}`;
      }
      const match = sections.find((s) => s.id === target || s.label.startsWith(target));
      if (!match || !scrollTo(match.id)) {
        return `Unknown section "${target}". Available: ${sections.map((s) => s.label).join(", ")}`;
      }
      return `Navigating to #${match.id}...`;
    },

    hack: () => (
      <div className="space-y-1 font-mono text-xs text-rose-500">
        <p>[+] Initializing penetration test sequence...</p>
        <p>[+] Scanning network segment 192.168.1.0/24 (nmap -sV)...</p>
        <p>[+] Target found: 192.168.1.45 - 80/http, 22/ssh open</p>
        <p>[+] Fuzzing web parameters with Burp Suite Intruder...</p>
        <p>[+] SQL injection confirmed on /login?user=</p>
        <p>[+] Dumping credentials, cracking hashes with hashcat...</p>
        <p>[+] Privilege escalation via misconfigured SUID binary...</p>
        <p className="mt-1 font-bold text-emerald-500">[!] ROOT ACCESS GAINED - findings logged to report.md</p>
        <p className="text-muted-foreground/60">(simulation only - authorized testing mindset)</p>
      </div>
    ),

    banner: () => <Banner />,

    exit: () => {
      setIsOpen(false);
      return "Session closed. See you soon.";
    },
  };

  // aliases
  const aliases: Record<string, string> = {
    about: "whoami",
    id: "whoami",
    tools: "skills",
    stack: "skills",
    work: "experience",
    exp: "experience",
    xp: "experience",
    edu: "education",
    school: "education",
    certifications: "certs",
    achievements: "awards",
    ctf: "awards",
    posts: "blog",
    articles: "blog",
    links: "social",
    open: "goto",
    cd: "goto",
    quit: "exit",
    "?": "help",
  };

  const resolve = (name: string) => aliases[name] ?? name;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    const [rawName, ...args] = trimmed.toLowerCase().split(/\s+/);
    const name = resolve(rawName);

    if (name === "clear") {
      setHistory([]);
      setCommandHistory((prev) => [cmdStr, ...prev.filter((c) => c !== cmdStr)]);
      setHistoryIndex(-1);
      return;
    }

    let output: string | React.ReactNode = "";
    if (trimmed === "") {
      output = "";
    } else if (name === "sudo") {
      output = (
        <p className="text-xs text-amber-400">
          Nice try. This node runs least privilege - even for its owner.
        </p>
      );
    } else if (name === "ls") {
      output = (
        <p className="text-xs text-muted-foreground">
          {sections.map((s) => s.label).join("  ")}
          <span className="block text-muted-foreground/60">Use "goto &lt;section&gt;" to jump.</span>
        </p>
      );
    } else if (commands[name]) {
      output = commands[name](args);
    } else {
      output = `Command not recognized: "${rawName}". Type "help" for a list of commands.`;
    }

    setHistory((prev) => [...prev, { input: cmdStr, output }]);
    setCommandHistory((prev) => [cmdStr, ...prev.filter((c) => c !== cmdStr)]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputValue(commandHistory[nextIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputValue("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const typed = inputValue.trim().toLowerCase();
      if (!typed || typed.includes(" ")) return;
      const pool = [...Object.keys(commands), "clear", "ls", ...Object.keys(aliases)];
      const match = pool.find((c) => c.startsWith(typed));
      if (match) {
        setInputValue(match);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="surface shadow-xl flex items-center justify-center h-14 w-14 rounded-full border border-primary/35 bg-card/90 text-primary hover:text-foreground hover:bg-primary transition-all duration-300"
          aria-label="Toggle security command center"
        >
          <TerminalIcon className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Terminal Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className={`fixed z-[60] overflow-hidden rounded-2xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-xl ${
              isMaximized
                ? "inset-4 md:inset-8"
                : "bottom-24 right-4 left-4 md:left-auto md:w-[520px] h-[420px]"
            } flex flex-col`}
          >
            {/* Terminal Top Control Bar */}
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  secure-node@rizki: ~
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {isMaximized ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-rose-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Grid & Scanline Background overlays */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-5" />
            <div className="absolute inset-0 scanline pointer-events-none opacity-30" />

            {/* Terminal Body Content */}
            <div
              ref={containerRef}
              onClick={() => inputRef.current?.focus()}
              className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs text-foreground/90 selection:bg-primary/20 cursor-text scrollbar-thin relative z-10"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.input && (
                    <div className="flex items-center gap-1 text-muted-foreground font-mono">
                      <span className="text-primary font-bold">$</span>
                      <span>{item.input}</span>
                    </div>
                  )}
                  {item.output && (
                    <div className="pl-3 border-l border-border/40 font-mono">
                      {item.output}
                    </div>
                  )}
                </div>
              ))}

              {/* Input Prompt */}
              <div className="flex items-center gap-1.5 font-mono pt-1">
                <span className="text-emerald-500 font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none font-mono text-emerald-400 caret-emerald-400 placeholder:text-muted-foreground/30 focus:ring-0 p-0 text-xs"
                  placeholder="help · whoami · skills · projects · contact"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
