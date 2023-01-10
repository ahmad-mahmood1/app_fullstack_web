import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/graphql/**/*.{ts,tsx}",
  ignoreNoDocuments: true, // for better experience with the watcher,
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: [],
    },
    "./src/introspection.json": {
      plugins: ["introspection"],
      config: {
        minify: true,
        description: true,
      },
    },
  },
};

export default config;
