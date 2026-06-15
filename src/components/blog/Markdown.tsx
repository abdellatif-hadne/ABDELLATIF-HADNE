import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import Mermaid from "./Mermaid";

// Recursively extract plain text from React children (handles highlight spans).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toText = (node: any): string => {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(toText).join("");
  if (typeof node === "object" && node.props) return toText(node.props.children);
  return "";
};

const Markdown = ({ content }: { content: string }) => (
  <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:rounded-xl prose-blockquote:border-0 prose-blockquote:bg-primary/5 prose-blockquote:px-5 prose-blockquote:py-1 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-foreground prose-code:rounded prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:rounded-2xl prose-pre:border prose-pre:border-border prose-th:text-foreground prose-td:text-muted-foreground prose-img:rounded-2xl prose-img:border prose-img:border-border prose-hr:border-border">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
      components={{
        pre({ children, ...props }) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const child: any = Array.isArray(children) ? children[0] : children;
          const className: string = child?.props?.className || "";
          if (/language-mermaid/.test(className)) {
            return <Mermaid chart={toText(child.props.children).trim()} />;
          }
          return <pre {...props}>{children}</pre>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default Markdown;
