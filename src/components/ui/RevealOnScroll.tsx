"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RevealOnScroll.module.css";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RevealOnScroll({ children, className }: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.scrollReveal} ${isVisible ? styles.scrollRevealVisible : ""} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
