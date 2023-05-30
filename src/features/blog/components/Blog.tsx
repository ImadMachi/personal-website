import { PortableTextComponents } from "@/features/blog";
import { Post } from "@/types/Post";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

interface PostProps {
  post: Post;
}

export default function Blog({ post }: PostProps) {
  return (
    <>
      <header className="container mx-auto max-w-3xl p-4">
        <Link href="/blog" className="mb-7 text-xl">
          <ArrowLeft size={24} className="mr-2 inline-block"></ArrowLeft>
          Back to blog
        </Link>
      </header>

      <div className="container mx-auto max-w-3xl p-4">
        <h1 className="mb-5 text-5xl font-bold">{post.title}</h1>
        <div className="mb-5 flex flex-col justify-between sm:flex-row sm:items-center">
          <p>
            {format(new Date(post.publishedAt), "dd LLL, u")} - {post.readTime} min read
          </p>
          <div className="mt-2">
            {post.tags?.map((tag) => (
              <Tag key={tag.slug} tag={tag} />
            ))}
          </div>
        </div>
        <div className="relative h-56 w-full overflow-hidden border sm:h-72 md:h-96">
          <Image src={post.image} alt={post.title} fill sizes="1200" priority className="object-cover" />
        </div>
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
        <PortableText value={post.content} components={PortableTextComponents} />
      </div>
    </>
  );
}
