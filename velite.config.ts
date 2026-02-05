import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    title: s.string().max(120),
    slug: s.slug("posts"),
    description: s.string().max(300),
    date: s.isodate(),
    published: s.boolean().default(true),
    locale: s.enum(["fr", "en"]),
    author: s.string().default("HKCOM"),
    image: s.string().optional(),
    tags: s.array(s.string()).default([]),
    category: s.enum([
      "marketing-digital",
      "web-design",
      "seo",
      "reseaux-sociaux",
      "actualites",
    ]),
    body: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
