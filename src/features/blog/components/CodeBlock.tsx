import React, { FC } from "react";
import Refractor from "react-refractor";
import ts from "refractor/lang/typescript";

Refractor.registerLanguage(ts);

interface CodeBlockProps {
  value: {
    highlightedLines: string;
    code: {
      code: string;
      language: string;
    };
  };
}

const CodeBlock: FC<CodeBlockProps> = ({ value }) => {
  const lines = value.highlightedLines.split(",").map((line) => ({ line: +line, component: (props: any) => <mark style={{ textShadow: "none" }}>{props.children}</mark> }));
  return <Refractor className="scrollbar-thin" language={value.code.language} value={value.code.code} markers={lines} />;
};

export default CodeBlock;
