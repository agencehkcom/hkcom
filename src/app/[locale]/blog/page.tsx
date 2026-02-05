import { setRequestLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { getPostsByLocale } from "@/lib/blog";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: locale === "fr" ? "Blog | HKCOM" : "Blog | HKCOM",
    description:
      locale === "fr"
        ? "Découvrez nos articles sur le marketing digital, la création web et les stratégies digitales."
        : "Discover our articles on digital marketing, web design and digital strategies.",
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = getPostsByLocale(locale as "fr" | "en");

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {locale === "fr" ? "Notre Blog" : "Our Blog"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "fr"
                ? "Actualités, conseils et stratégies pour réussir votre transformation digitale."
                : "News, tips and strategies for your successful digital transformation."}
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  locale={locale as "fr" | "en"}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                {locale === "fr"
                  ? "Aucun article pour le moment. Revenez bientôt !"
                  : "No articles yet. Check back soon!"}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
