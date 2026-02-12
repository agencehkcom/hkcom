# HKCOM - Agence Digitale Dunkerque

## Projet
Site vitrine et commercial de l'agence digitale HKCOM, basée à Dunkerque (19 bis Rue de l'Orangerie, 59760 Grande-Synthe).

## Stack Technique
- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 4 + composants glass/glow custom
- **i18n** : next-intl (FR/EN) - fichiers dans `src/i18n/messages/`
- **Animations** : Framer Motion
- **CMS** : Velite (config dans `velite.config.ts`, actuellement sans collection)
- **Vidéo** : Remotion
- **Déploiement** : Vercel

## Architecture
```
src/
├── app/[locale]/           # Routes par locale (fr/en)
│   ├── page.tsx            # Page d'accueil (sections composées)
│   ├── services/
│   │   ├── web/            # Service Conception Web
│   │   ├── ads/            # Service Publicité Digitale
│   │   ├── content/        # Service Contenu Audiovisuel
│   │   └── linkedin/       # Service Prospection LinkedIn
│   ├── webinaires/         # Page webinaires
│   ├── legal/              # Mentions légales
│   └── privacy/            # Politique de confidentialité
├── components/
│   ├── layout/             # Header, Footer, LocaleSwitcher, ThemeToggle
│   ├── sections/           # Sections homepage (Hero, Services, Portfolio, etc.)
│   ├── services/           # ServicePageLayout, ServiceRealisations
│   ├── shared/             # GlassCard, GlowButton, ContactForm, etc.
│   ├── seo/                # JSON-LD (HomeJsonLd, ServiceJsonLd)
│   └── animations/         # Animations Remotion
└── i18n/
    ├── messages/fr.json    # Traductions FR
    ├── messages/en.json    # Traductions EN
    ├── navigation.ts
    └── routing.ts
```

## Charte Couleurs
- **Primary** : Bleu `#0C3559` (light) / `#3b82f6` (dark)
- **Secondary** : Vert `#06C472`
- **Accent** : Or `#CD9E01`
- Couleurs complémentaires utilisées : `violet-500`, `emerald-500`, `#0A66C2` (LinkedIn)

## Conventions

### Pages de Service
Toutes les pages service utilisent `ServicePageLayout` comme layout partagé. Chaque page définit son propre objet `service` avec : name, tagline, description, features, benefits, packages, process, faqs, stats. Le JSON-LD SEO est géré par `ServiceJsonLd` (types supportés : web, ads, content, linkedin).

### Sections Homepage
Les sections sont des composants autonomes dans `src/components/sections/`. Elles sont assemblées dans `src/app/[locale]/page.tsx`.

### Traductions
Chaque texte visible utilise `useTranslations()` ou est défini en bilingue dans le composant (pattern `isEn ? "..." : "..."`). Les clés de navigation sont dans `nav.*`.

### Portfolio Tags
Les vignettes du portfolio utilisent un mapping de couleurs par tag dans `tagColors` (Portfolio.tsx). Ajouter les nouveaux tags dans ce mapping.

### Liens CTA
- Boutons "Appel de Découverte" / "Discovery Call" : `https://calendly.com/hkcom/appel-de-decouverte` (lien externe, `<a>` tag)
- Boutons "Contact" / "Devis" : `/#contact` (section formulaire homepage)
- Boutons "Voir nos résultats" : `#resultats` (sections réalisations dans les pages service)

## Informations Entreprise
- **Nom** : HKCOM
- **Email** : contact@hkcom.fr
- **Tél** : 09 72 61 30 92
- **Adresse** : 19 bis Rue de l'Orangerie, 59760 Grande-Synthe
- **LinkedIn** : linkedin.com/in/agence-de-communication-hk-com
- **Calendly** : calendly.com/hkcom/appel-de-decouverte
- **Certifications** : Activateur France Num, Google Partner, Meta Business Partner
- **Hébergeur** : Vercel

## Sections supprimées
- **Blog** : Supprimé (contenait du MDX via Velite, générait des erreurs de catégories)
- **Stratégies MAX** : Supprimé (Client MAX, Impact MAX, Visibilité MAX - plus d'actualité)
