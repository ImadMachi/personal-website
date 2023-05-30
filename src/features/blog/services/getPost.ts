import client from "@/lib/sanity.client";
import { Post } from "@/types/Post";
import { groq } from "next-sanity";

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  publishedAt,
  title,
  description,
  "slug": slug.current,
  "image": image.asset->url,
  readTime,
  content,
  "category": category-> {"title": title, "slug": slug.current},
  "tags": tags[]->{"title": title, "slug": slug.current, "color": color},
}  
`;

export default async function getPost(slug: string): Promise<Post> {
  return client.fetch(postBySlugQuery, { slug });
}
