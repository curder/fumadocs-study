import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import {
  transformerNotationFocus,
  transformerMetaHighlight,
  transformerNotationErrorLevel,
} from "@shikijs/transformers";
// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    rehypeCodeOptions: {
      lazy: true,
      experimentalJSEngine: true,
      langs: ["ts", "js", "html", "tsx", "mdx"],
      inline: "tailing-curly-colon",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerNotationFocus({
          matchAlgorithm: "v3",
        }),
        transformerNotationErrorLevel({
          matchAlgorithm: "v3",
        }),
        transformerMetaHighlight(),
      ],
    },
  },
});
