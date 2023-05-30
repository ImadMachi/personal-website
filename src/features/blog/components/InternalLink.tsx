"use client";
import { getPostSlugById } from "@/features/blog";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface InternalLinkProps {
  children: React.ReactNode;
  value: {
    reference: {
      _ref: string;
    };
  };
}

const InternalLink: FC<InternalLinkProps> = ({ children, value }) => {
  const [postSlug, setPostSlug] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slug = await getPostSlugById(value.reference._ref);
        setPostSlug(slug);
      } catch (error) {
        setPostSlug("404");
      }
    };

    fetchData();
  }, [value]);

  return (
    <Link href={`/blog/${encodeURIComponent(postSlug)}`} className="text-blue-700 hover:underline dark:text-blue-500">
      {children}
    </Link>
  );
};

export default InternalLink;
