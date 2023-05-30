import Link from "next/link";
import BlockImage from "./Image";
import CodeBlockWrapper from "./CodeBlockWrapper";
import CodeBlock from "./CodeBlock";
import InternalLink from "./InternalLink";

const PortableTextComponents = {
  types: {
    image: ({ value }: any) => <BlockImage value={value} />,
    codeBlock: ({ value }: any) => (
      <CodeBlockWrapper>
        <CodeBlock value={value} />
      </CodeBlockWrapper>
    ),
    code: () => null,
  },
  marks: {
    highlight: ({ children }: any) => <span className="bg-yellow-200 dark:text-gray-900">{children}</span>,
    sub: ({ children }: any) => <sub>{children}</sub>,
    sup: ({ children }: any) => <sup>{children}</sup>,
    link: ({ children, value }: any) => (
      <Link href={value.href} rel="noreferrer noopener" className="text-blue-700 hover:underline dark:text-blue-500" target="_blank">
        {children}
      </Link>
    ),
    internalLink: ({ children, value }: any) => <InternalLink value={value}>{children}</InternalLink>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="ml-10 list-disc space-y-3 py-3">{children}</ul>,
    number: ({ children }: any) => <ol className="ml-10 list-decimal space-y-3 py-3">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => <h1 className="py-4 text-5xl font-bold">{children}</h1>,
    h2: ({ children }: any) => <h2 className="py-4 text-4xl font-bold">{children}</h2>,
    h3: ({ children }: any) => <h3 className="py-4 text-3xl font-bold">{children}</h3>,
    h4: ({ children }: any) => <h4 className="py-4 text-2xl font-bold">{children}</h4>,
    h5: ({ children }: any) => <h5 className="py-4 text-xl font-bold">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-lg font-bold">{children}</h6>,
    normal: ({ children }: any) => <p className="py-5 text-lg">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="my-5 ml-5 border-s-4 border-s-green-700 py-1 pl-5 text-xl">{children}</blockquote>,
  },
};

export default PortableTextComponents;
