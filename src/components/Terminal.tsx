import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandResponse {
  input: string;
  output: string | React.ReactNode;
}

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<CommandResponse[]>([
    {
      input: "",
      output: (
        <div className="space-y-1">
          <p className="text-emerald-500 font-bold">0xRizki Secure Shell [Version 1.2.0]</p>
          <p className="text-muted-foreground text-xs">Type "help" to view available security commands.</p>
        </div>
      ),
    },
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

  useEffect(() => {
    // Scroll to bottom of terminal content on updates
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, () => string | React.ReactNode> = {
    help: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
        <div><span className="text-primary font-bold">help</span> - Display this help menu</div>
        <div><span className="text-primary font-bold">whoami</span> - Display candidate identity profile</div>
        <div><span className="text-primary font-bold">skills</span> - List core technical and security toolset</div>
        <div><span className="text-primary font-bold">projects</span> - View highlights of security/AI projects</div>
        <div><span className="text-primary font-bold">neofetch</span> - System diagnostics & status info</div>
        <div><span className="text-primary font-bold">hack</span> - Run automated pentest simulation</div>
        <div><span className="text-primary font-bold">clear</span> - Clear screen buffer</div>
      </div>
    ),
    whoami: () => (
      <div className="space-y-1.5 text-xs text-muted-foreground">
        <p><span className="text-foreground font-semibold">Name:</span> Abdelhadi Rizki</p>
        <p><span className="text-foreground font-semibold">Role:</span> Cybersecurity Engineering Student</p>
        <p><span className="text-foreground font-semibold">Specialization:</span> AI Applied to Security | Offensive & Defensive security operations</p>
        <p><span className="text-foreground font-semibold">Location:</span> Marrakech, Morocco</p>
        <p><span className="text-foreground font-semibold">Affiliations:</span> FSTG Marrakech, GDG Marrakesh Volunteer, n8n Marrakech Community Co-Founder</p>
      </div>
    ),
    skills: () => (
      <div className="space-y-2 text-xs">
        <p><span className="text-emerald-400 font-semibold">[Blue Team]:</span> SIEM (Wazuh, Splunk, Elastic SIEM), Threat Detection, MITRE ATT&CK, Grafana</p>
        <p><span className="text-rose-400 font-semibold">[Offensive]:</span> Pentesting, Burp Suite, Metasploit, Vulnerability Research, Bug Bounty</p>
        <p><span className="text-cyan-400 font-semibold">[AI & Dev]:</span> Python, PyTorch, Deep Learning, FastAPI, React, Node.js, Bash Scripting</p>
      </div>
    ),
    projects: () => (
      <div className="space-y-2 text-xs">
        <div>
          <p className="text-primary font-bold">1. PentAI</p>
          <p className="text-muted-foreground">AI-powered security automation platform for recon & workflows.</p>
        </div>
        <div>
          <p className="text-primary font-bold">2. oneSec</p>
          <p className="text-muted-foreground">Interactive CLI tool suite manager installer in Bash.</p>
        </div>
        <div>
          <p className="text-primary font-bold">3. NeuroScan AI</p>
          <p className="text-muted-foreground">Brain tumor detection from MRI images with PyTorch & React.</p>
        </div>
      </div>
    ),
    neofetch: () => (
      <div className="flex gap-4 items-start font-mono text-xs leading-tight">
        <div className="text-primary shrink-0 whitespace-pre">
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
          <p className="text-primary font-bold">rizki@0xrizki-secure-node</p>
          <p>-------------------------</p>
          <p><span className="text-emerald-500 font-semibold">OS:</span> RizkiOS v1.2.0 (amd64)</p>
          <p><span className="text-emerald-500 font-semibold">Shell:</span> antigravity-zsh v3.5</p>
          <p><span className="text-emerald-500 font-semibold">Uptime:</span> 1337 mins</p>
          <p><span className="text-emerald-500 font-semibold">CPU:</span> Neural Cortex (8 cores)</p>
          <p><span className="text-emerald-500 font-semibold">RAM:</span> 32 GB / 64 GB</p>
          <p><span className="text-emerald-500 font-semibold">Security:</span> Firewalls Online | Wazuh Connected</p>
        </div>
      </div>
    ),
    hack: () => {
      return (
        <div className="space-y-1 text-xs font-mono text-rose-500 animate-pulse">
          <p>[+] Initializing penetration test sequence...</p>
          <p>[+] Scanning active nodes in network segment 192.168.1.0/24...</p>
          <p>[+] Found target: 192.168.1.45 (Port 80/http open)</p>
          <p>[+] Exploiting vulnerable web application parameters...</p>
          <p>[+] Extracting shadow hash credentials... [SUCCESS]</p>
          <p className="text-emerald-500 font-bold font-mono mt-1">[!] ROOT PRIVILEGES GAINED. CONTROL ESTABLISHED.</p>
        </div>
      );
    }
  };

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    
    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    let output: string | React.ReactNode = "";
    if (trimmed === "") {
      output = "";
    } else if (commands[trimmed]) {
      output = commands[trimmed]();
    } else {
      output = `Command not recognized: "${trimmed}". Type "help" for a list of commands.`;
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
      const match = Object.keys(commands).find((c) => c.startsWith(inputValue));
      if (match) {
        setInputValue(match);
      }
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
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
            className={`fixed z-40 overflow-hidden rounded-2xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-xl ${
              isMaximized
                ? "inset-4 md:inset-8"
                : "bottom-24 right-4 left-4 md:left-auto md:w-[480px] h-[380px]"
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
                  placeholder="Type here..."
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
