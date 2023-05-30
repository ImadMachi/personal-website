import { BlogList, PreviewSuspense, getPosts } from "@/features/blog";
import { draftMode } from "next/headers";
import Link from "next/link";
import { lazy } from "react";

const PreviewBlogList = lazy(() => import("@/features/blog/components/PreviewBlogList"));

export default async function BlogPage() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="animate-pulse text-center text-lg text-yellow-500">Loading Preview Data ...</p>
          </div>
        }
      >
        <Link className="fixed bottom-0 right-0 z-10 bg-blue-500 p-6 font-bold text-white" href="/api/disable-draft">
          Exit Preview
        </Link>
        <PreviewBlogList />
      </PreviewSuspense>
    );
  }

  const posts = await getPosts();

  return <BlogList posts={posts} />;
}
