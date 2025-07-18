import React, { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  tag?: string;
  minHeight?: string;
}

export default function ScrambleText({
  text,
  className = "",
  tag = "span",
  minHeight,
}: ScrambleTextProps) {
  // Simple mobile detection (window.innerWidth < 768)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const [display, setDisplay] = useState<string>(text);
  const ref = useRef<HTMLElement>(null);
  const prevText = useRef<string>(text);

  // Supprime le doublon de useEffect
  useEffect(() => {
    if (isMobile) {
      setDisplay(text);
      prevText.current = text;
      return;
    }
    if (text === prevText.current) return;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const oldText = prevText.current;
    const duration = 1.2;
    const steps = 16;
    let frame = 0;
    let scramble = Array.from({ length: text.length }, (_, i) => ({
      final: text[i] || " ",
      char: oldText[i] || " ",
    }));
    const animate = () => {
      scramble = scramble.map((item) => {
        if (frame < steps) {
          return {
            ...item,
            char: chars[Math.floor(Math.random() * chars.length)],
          };
        } else {
          return {
            ...item,
            char: item.final,
          };
        }
      });
      if (ref.current)
        ref.current.innerText = scramble.map((item) => item.char).join("");
      frame++;
      if (frame <= steps) {
        setTimeout(animate, (duration * 1000) / steps);
      } else {
        setDisplay(text);
        prevText.current = text;
      }
    };
    animate();
  }, [text, isMobile]);
  // Utilise <span> par défaut, sinon React.createElement pour le tag dynamique
  if (tag === "span") {
    return (
      <span
        ref={ref}
        className={className}
        style={minHeight ? { minHeight } : undefined}
        aria-label={display}
      >
        {display}
      </span>
    );
  }
  return React.createElement(
    tag,
    {
      ref,
      className,
      style: minHeight ? { minHeight } : undefined,
      "aria-label": display,
    },
    display
  );
}
