"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full flex items-center justify-center"
    >
      {/* SVG Progress Ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        width="56"
        height="56"
      >
        {/* Background circle */}
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="#E5E7EB"
          strokeWidth="3"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="#0062fd"
          strokeWidth="3"
          fill="none"
          strokeDasharray={2 * Math.PI * 24}
          strokeDashoffset={
            2 * Math.PI * 24 -
            (progress / 100) * 2 * Math.PI * 24
          }
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
        />
      </svg>

      {/* Arrow Icon */}
      <ArrowUp className="relative h-5 w-5 text-brand-500" />
    </button>
  );
}
