import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-perf";

interface TypingTextProps {
    texts: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const TypingText = ({
    texts,
    className = "",
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
}: TypingTextProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Typing re-renders every 50-100ms; stop it once the hero is scrolled away.
    const { ref, inView } = useInView<HTMLSpanElement>("0px");

    useEffect(() => {
        if (isPaused || !inView) return;

        if (subIndex === texts[index].length + 1 && !reverse) {
            setIsPaused(true);
            setTimeout(() => {
                setReverse(true);
                setIsPaused(false);
            }, pauseTime);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts, typingSpeed, deletingSpeed, pauseTime, isPaused, inView]);

    return (
        <span ref={ref} className={className}>
            {texts[index].substring(0, subIndex)}
            <span className="animate-pulse text-primary ml-1">|</span>
        </span>
    );
};

export default TypingText;
