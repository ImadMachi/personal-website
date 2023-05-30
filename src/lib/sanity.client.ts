import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = {
  projectId: projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
};

const client = createClient(config);

export default client;
