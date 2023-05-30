"use client";

import { usePreview } from "@/lib/sanity.preview";
import { postBySlugQuery } from "../services/getPost";
import Blog from "./Blog";

interface PreviewBlogProps {
  slug: string;
}

export default function PreviewBlog({ slug }: PreviewBlogProps) {
  const post = usePreview(null, postBySlugQuery, { slug });
  return <Blog post={post} />;
}
