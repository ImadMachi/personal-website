import client from "@/lib/sanity.client";
import { groq } from "next-sanity";

export default async function getPostSlugById(id: string): Promise<string> {
  const query = groq`
  *[_type == "post" && _id == $id][0] {
    "slug": slug.current
  }`;

  return client.fetch(query, { id }).then(({ slug }) => slug);
}
