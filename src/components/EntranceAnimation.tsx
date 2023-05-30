"use client";

import { cn } from "@/utils/cn";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { FC, useRef } from "react";

interface IntersectionObserverProps {
  children: React.ReactNode;
  inScopeClass: string;
  outScopeClass: string;
  className?: string;
  once?: boolean;
}

const IntersectionObserver: FC<IntersectionObserverProps> = ({ children, inScopeClass, outScopeClass, className, once = true }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: once });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={ref} className={cn("relative transform transition-transform", isVisible ? inScopeClass : outScopeClass, className)}>
      {children}
    </div>
  );
};

export default IntersectionObserver;
