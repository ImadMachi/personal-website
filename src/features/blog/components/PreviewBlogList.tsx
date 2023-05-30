"use client";

import BlogList from "./BlogList";
import { getPostsQuery } from "../services/getPosts";
import { usePreview } from "@/lib/sanity.preview";

export default function PreviewBlogList() {
  const posts = usePreview(null, getPostsQuery);
  return <BlogList posts={posts} />;
}
