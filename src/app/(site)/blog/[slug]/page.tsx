import { Blog, PreviewSuspense, getPost, getPostSlugs } from "@/features/blog";
import { draftMode } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lazy } from "react";

const PreviewBlog = lazy(() => import("@/features/blog/components/PreviewBlog"));
interface PostProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return await getPostSlugs();
}

export default async function Post({ params }: PostProps) {
  const slug = params.slug;

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
        <PreviewBlog slug={slug} />
      </PreviewSuspense>
    );
  }

  const post = await getPost(slug);
  if (!post) notFound();

  return <Blog post={post} />;
}
