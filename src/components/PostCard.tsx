import { FC } from "react";
import { Post } from "@/types/Post";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Tag } from "@/features/blog";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded border-2 border-gray-100 dark:border-gray-800">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-56 w-full overflow-hidden">
          <Image fill src={post.image} alt={post.slug} className="object-cover transition-transform hover:scale-105" />
        </div>
      </Link>
      <div className="px-5 py-4">
        {post.tags?.map((tag) => (
          <Tag key={tag.slug} tag={tag} variant="colored" />
        ))}
        <h2 className="mb-3 text-xl font-bold transition hover:underline dark:text-gray-100">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-400">{post.description}</p>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
          <p>{format(new Date(post.publishedAt), "dd LLL, u")}</p>
          <p>{post.readTime} min read</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
