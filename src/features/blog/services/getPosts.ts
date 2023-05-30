import client from "@/lib/sanity.client";
import { Post } from "@/types/Post";
import { groq } from "next-sanity";

export const getPostsQuery = groq`
  *[_type == "post"] {
    _id,
    _createdAt,
    publishedAt,
    title,
    description,
    "slug": slug.current,
    "image": image.asset->url,
    "alt ": image.alt,
    readTime,
    "category": category-> {"title": title, "slug": slug.current},
    "tags": tags[]->{"title": title, "slug": slug.current, "color": color},
  } | order(_createdAt desc)
`;

export default async function getPosts(): Promise<Post[]> {
  return client.fetch(getPostsQuery);
}
