import { useEffect, useId, useRef, useState } from "react";

let initialized = false;

// Load Mermaid lazily and initialize it once for the whole app.
const loadMermaid = async () => {
  const mermaid = (await import("mermaid")).default;
  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose", // allow <br/> line breaks inside node labels
      fontFamily: "Inter, sans-serif",
    });
    initialized = true;
  }
  return mermaid;
};

/** Renders a Mermaid diagram from a code string. */
const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mermaid = await loadMermaid();
        const { svg } = await mermaid.render(`mmd-${rawId}`, chart);
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, rawId]);

  if (failed) {
    return (
      <pre className="overflow-x-auto rounded-2xl border border-border bg-card p-4 text-xs text-muted-foreground">
        {chart}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className="my-6 flex justify-center overflow-x-auto rounded-2xl border border-border bg-white p-4 shadow-sm [&_svg]:h-auto [&_svg]:max-w-full"
    />
  );
};

export default Mermaid;
