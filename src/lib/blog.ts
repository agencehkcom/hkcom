import { posts } from "#site/content";

export type Post = (typeof posts)[number];

export function getPostsByLocale(locale: "fr" | "en"): Post[] {
  return posts
    .filter((post) => post.locale === locale && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(
  slug: string,
  locale: "fr" | "en"
): Post | undefined {
  return posts.find(
    (post) => post.slug === slug && post.locale === locale && post.published
  );
}

export function getAllPostSlugs(): { slug: string; locale: "fr" | "en" }[] {
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
      locale: post.locale as "fr" | "en",
    }));
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
