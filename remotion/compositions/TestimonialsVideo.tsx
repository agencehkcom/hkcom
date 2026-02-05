import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
  Img,
  staticFile,
} from "remotion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chef Event",
    role: "Restauration/Événementiel",
    avatar: "CE",
    rating: 5,
    text: "Grâce à HKCOM, j'ai enfin un site à la hauteur de mes prestations. Les demandes de devis ont triplé !",
  },
  {
    id: 2,
    name: "Mob Destock",
    role: "Mobilier",
    avatar: "MD",
    rating: 5,
    text: "Une équipe réactive et professionnelle. Notre site e-commerce génère maintenant un CA conséquent.",
  },
  {
    id: 3,
    name: "Extha",
    role: "Isolation",
    avatar: "EX",
    rating: 5,
    text: "HKCOM nous accompagne depuis 4 ans avec un service irréprochable.",
  },
  {
    id: 4,
    name: "Le Fourquet's",
    role: "Restauration",
    avatar: "LF",
    rating: 5,
    text: "Le site reflète parfaitement l'ambiance de notre restaurant. Les réservations ont explosé !",
  },
  {
    id: 5,
    name: "Restaurant Papylles",
    role: "Restauration",
    avatar: "RP",
    rating: 5,
    text: "Notre nouveau site attire beaucoup plus de clients.",
  },
  {
    id: 6,
    name: "Coop Bazar",
    role: "Commerce",
    avatar: "CB",
    rating: 5,
    text: "La création de notre marketplace a été un vrai succès !",
  },
  {
    id: 7,
    name: "Le Synthois",
    role: "Boulangerie",
    avatar: "LS",
    rating: 5,
    text: "Notre site vitrine met parfaitement en valeur nos produits artisanaux.",
  },
  {
    id: 8,
    name: "FM Auto",
    role: "Automobile",
    avatar: "FA",
    rating: 5,
    text: "Service impeccable et résultats au rendez-vous.",
  },
];

// Thèmes de couleurs
const themes = {
  dark: {
    background: "#0a1628",
    cardBg: "rgba(255, 255, 255, 0.05)",
    cardBorder: "rgba(255, 255, 255, 0.1)",
    titleColor: "#ffffff",
    textColor: "#cbd5e1",
    subtitleColor: "#64748b",
    starColor: "#fbbf24",
  },
  light: {
    background: "#ffffff",
    cardBg: "rgba(0, 0, 0, 0.03)",
    cardBorder: "rgba(0, 0, 0, 0.08)",
    titleColor: "#0a1628",
    textColor: "#475569",
    subtitleColor: "#64748b",
    starColor: "#fbbf24",
  },
};

type TestimonialsVideoProps = {
  theme?: "dark" | "light";
};

export const TestimonialsVideo: React.FC<TestimonialsVideoProps> = ({
  theme = "dark",
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();
  const colors = themes[theme];

  const isPortrait = height > width;
  const isMobile = isPortrait || width <= 1080;

  // Card dimensions
  const cardHeight = isMobile ? 160 : 140;
  const cardGap = isMobile ? 20 : 25;
  const cardTotalHeight = cardHeight + cardGap;

  // Total scroll distance - all cards scroll through the entire viewport
  const totalCardsHeight = testimonials.length * cardTotalHeight;
  const scrollDistance = height + totalCardsHeight;

  // Scroll speed - move the entire content from bottom to top
  const scrollProgress = interpolate(
    frame,
    [0, durationInFrames],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // Current Y offset (starts from bottom, moves up)
  const baseY = interpolate(scrollProgress, [0, 1], [height * 0.3, -totalCardsHeight + height * 0.2]);

  // Star component
  const Star = ({ filled, size = 16 }: { filled: boolean; size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? colors.starColor : "none"}
      stroke={colors.starColor}
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <AbsoluteFill
      style={{
        background: colors.background,
        overflow: "hidden",
      }}
    >
      {/* Background gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-20%",
          width: isMobile ? 250 : 400,
          height: isMobile ? 250 : 400,
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.1)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "-15%",
          width: isMobile ? 300 : 450,
          height: isMobile ? 300 : 450,
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.1)",
          filter: "blur(80px)",
        }}
      />

      {/* Title - fixed at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: isMobile ? 100 : 120,
          background: `linear-gradient(to bottom, ${colors.background} 60%, transparent)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          paddingTop: isMobile ? 20 : 30,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? 28 : 42,
            fontWeight: 800,
            color: colors.titleColor,
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: 15,
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Avis Clients
          </span>
          <span style={{ fontSize: isMobile ? 20 : 28, color: colors.subtitleColor }}>
            ★ 5/5
          </span>
        </h1>
      </div>

      {/* Scrolling testimonials container */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: isMobile ? 20 : 60,
          paddingRight: isMobile ? 20 : 60,
        }}
      >
        {testimonials.map((testimonial, index) => {
          const cardY = baseY + index * cardTotalHeight;

          // Calculate opacity based on position in viewport
          const centerY = height / 2;
          const distanceFromCenter = Math.abs(cardY + cardHeight / 2 - centerY);
          const maxDistance = height / 2;
          const opacity = interpolate(
            distanceFromCenter,
            [0, maxDistance * 0.7, maxDistance],
            [1, 0.6, 0],
            { extrapolateRight: "clamp" }
          );

          // Scale based on distance from center
          const scale = interpolate(
            distanceFromCenter,
            [0, maxDistance * 0.8],
            [1, 0.92],
            { extrapolateRight: "clamp" }
          );

          // Only render if visible
          if (cardY < -cardHeight - 50 || cardY > height + 50) return null;

          return (
            <div
              key={testimonial.id}
              style={{
                position: "absolute",
                top: cardY,
                left: isMobile ? 20 : 60,
                right: isMobile ? 20 : 60,
                height: cardHeight,
                opacity,
                transform: `scale(${scale})`,
              }}
            >
              <div
                style={{
                  background: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: isMobile ? 16 : 20,
                  padding: isMobile ? 16 : 24,
                  height: "100%",
                  display: "flex",
                  gap: isMobile ? 14 : 20,
                  alignItems: "center",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: isMobile ? 50 : 60,
                    height: isMobile ? 50 : 60,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: isMobile ? 16 : 20,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {testimonial.avatar}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Header with name and stars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: isMobile ? 6 : 8,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: isMobile ? 16 : 18,
                          fontWeight: 700,
                          color: colors.titleColor,
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {testimonial.name}
                      </div>
                      <div
                        style={{
                          fontSize: isMobile ? 12 : 14,
                          color: colors.subtitleColor,
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {testimonial.role}
                      </div>
                    </div>

                    {/* Stars */}
                    <div style={{ display: "flex", gap: 3 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} filled={i < testimonial.rating} size={isMobile ? 14 : 16} />
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <p
                    style={{
                      fontSize: isMobile ? 13 : 15,
                      color: colors.textColor,
                      lineHeight: 1.5,
                      margin: 0,
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? 80 : 100,
          background: `linear-gradient(to top, ${colors.background} 40%, transparent)`,
          zIndex: 10,
        }}
      />

      {/* Logo watermark */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? 15 : 25,
          right: isMobile ? 15 : 30,
          opacity: 0.6,
          zIndex: 11,
        }}
      >
        <Img
          src={staticFile("images/logos/hkcom-logo.png")}
          style={{
            width: isMobile ? 40 : 50,
            height: "auto",
          }}
        />
      </div>

      {/* Stats counter at bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? 15 : 25,
          left: isMobile ? 15 : 30,
          zIndex: 11,
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 15 : 25,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: isMobile ? 20 : 28,
              fontWeight: 800,
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            100+
          </div>
          <div
            style={{
              fontSize: isMobile ? 10 : 12,
              color: colors.subtitleColor,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Clients
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: isMobile ? 20 : 28,
              fontWeight: 800,
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            98%
          </div>
          <div
            style={{
              fontSize: isMobile ? 10 : 12,
              color: colors.subtitleColor,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Satisfaction
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
