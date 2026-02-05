"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { Link } from "@/i18n/navigation";
import { GlassCard } from "@/components/shared/GlassCard";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog";

interface PostCardProps {
  post: Post;
  locale: "fr" | "en";
}

export function PostCard({ post, locale }: PostCardProps) {
  const dateLocale = locale === "fr" ? fr : enUS;
  const formattedDate = format(new Date(post.date), "d MMMM yyyy", {
    locale: dateLocale,
  });

  // Estimate reading time from body
  const readingTime = Math.ceil(post.body.split(/\s+/).length / 200);

  return (
    <Link href={`/blog/${post.slug}`}>
      <GlassCard className="h-full p-6 group cursor-pointer" glow="cyan">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{readingTime} min</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
          <span>{locale === "fr" ? "Lire la suite" : "Read more"}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </GlassCard>
    </Link>
  );
}
