import PostCard from "@/components/PostCard";
import { Post } from "@/types/Post";
import { FC } from "react";

interface BlogListProps {
  posts: Post[];
}

const BlogList: FC<BlogListProps> = ({ posts }) => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-7 mt-3 text-3xl">All posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </main>
  );
};

export default BlogList;
