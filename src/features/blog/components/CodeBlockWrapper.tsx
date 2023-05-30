"use client";

import { FC, ReactNode } from "react";
import { useTheme } from "next-themes";
import { prismFunky, prismTwilight } from "@/data/prism-styles";

interface CodeBlockWrapperProps {
  children: ReactNode;
}

const CodeBlockWrapper: FC<CodeBlockWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div>
      <style jsx>{`
        ${theme == "dark" ? prismTwilight : prismFunky}
      `}</style>
      {children}
    </div>
  );
};

export default CodeBlockWrapper;
