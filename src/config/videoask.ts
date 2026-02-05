/**
 * Configuration VideoAsk
 *
 * Pour intégrer vos VideoAsk :
 * 1. Allez sur https://www.videoask.com
 * 2. Créez ou ouvrez un VideoAsk
 * 3. Cliquez sur "Share" puis "Embed"
 * 4. Copiez l'ID du VideoAsk (la partie après /f/ dans l'URL)
 *    Exemple: https://www.videoask.com/fabcdef123 → ID = "abcdef123"
 * 5. Collez l'ID ci-dessous
 */

export const VIDEOASK_CONFIG = {
  // VideoAsk pour la section Hero (accueil)
  hero: "iq7k8asf",

  // VideoAsk pour la section Contact
  contact: "",

  // VideoAsk pour la section Aides Numériques
  aidesNumeriques: "sgv61lnv",
} as const;

// Type pour les IDs VideoAsk
export type VideoAskSection = keyof typeof VIDEOASK_CONFIG;
