import { schemaTypes } from "./sanity/schemas/index";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

export default config;
