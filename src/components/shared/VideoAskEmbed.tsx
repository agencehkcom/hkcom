"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoAskEmbedProps {
  videoAskId?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait";
  placeholder?: boolean;
}

export function VideoAskEmbed({
  videoAskId,
  className,
  aspectRatio = "video",
  placeholder = false,
}: VideoAskEmbedProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[9/16]",
  };

  // If no videoAskId provided, show placeholder
  if (!videoAskId || placeholder) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn(
          "relative rounded-2xl overflow-hidden glass border border-primary/20",
          aspectClasses[aspectRatio],
          className
        )}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">
            VideoAsk sera intégré ici
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            ID: {videoAskId || "À configurer"}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <iframe
        src={`https://www.videoask.com/f${videoAskId}`}
        allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
        className="absolute inset-0 w-full h-full border-0"
        style={{ borderRadius: "inherit" }}
      />
    </motion.div>
  );
}

// Widget flottant VideoAsk
export function VideoAskWidget({ videoAskId }: { videoAskId?: string }) {
  if (!videoAskId) return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.VIDEOASK_EMBED_CONFIG = {
            "kind": "widget",
            "url": "https://www.videoask.com/f${videoAskId}",
            "options": {
              "widgetType": "VideoThumbnailExtraLarge",
              "text": "",
              "backgroundColor": "#0C3559",
              "position": "bottom-right",
              "dismissible": true
            }
          }
        `,
      }}
    />
  );
}
