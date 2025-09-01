import { z, defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/blog" }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    author: z.string().default("Voxi0"),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});
export const collections = { blog };
