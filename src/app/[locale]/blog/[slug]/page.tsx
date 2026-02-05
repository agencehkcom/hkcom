import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { MDXContent } from "@/components/blog/MDXContent";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(({ slug, locale }) => ({
    locale,
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as "fr" | "en");

  if (!post) {
    return {
      title: "Article non trouvé | HKCOM",
    };
  }

  return {
    title: `${post.title} | HKCOM`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug, locale as "fr" | "en");

  if (!post) {
    notFound();
  }

  const dateLocale = locale === "fr" ? fr : enUS;
  const formattedDate = format(new Date(post.date), "d MMMM yyyy", {
    locale: dateLocale,
  });
  const readingTime = Math.ceil(post.body.split(/\s+/).length / 200);

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "fr" ? "Retour au blog" : "Back to blog"}</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {readingTime} min {locale === "fr" ? "de lecture" : "read"}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
            <MDXContent code={post.body} />
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {locale === "fr" ? "Voir tous les articles" : "View all posts"}
              </span>
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
