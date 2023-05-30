import client from "@/lib/sanity.client";
import { groq } from "next-sanity";

export default async function getPostSlugs(): Promise<string[]> {
  const query = groq`
  *[_type == "post"] {
    "slug": slug.current
  }`;

  return client.fetch(query);
}
