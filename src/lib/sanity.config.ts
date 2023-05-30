import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { defaultDocumentNode, schemas } from "@/features/sanity-studio";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = defineConfig({
  projectId,
  dataset,
  title: "My Personal Website",
  apiVersion,
  basePath: "/studio",
  plugins: [deskTool({ defaultDocumentNode }), visionTool(), codeInput()],
  schema: { types: schemas },
});

export default config;
