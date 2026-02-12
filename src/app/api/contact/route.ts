import { Resend } from "resend";
import { NextResponse } from "next/server";

interface ContactFormData {
  services: string[];
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  budget: string;
}

const serviceLabels: Record<string, string> = {
  web: "Site Web / E-commerce",
  ads: "Google Ads / SEO",
  content: "Contenu & Réseaux Sociaux",
  linkedin: "Prospection LinkedIn",
  strategy: "Stratégie Digitale",
  "aide-numerique": "Aide Numérique (France Num)",
  other: "Autre Projet",
};

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ContactFormData = await request.json();

    const { services, name, email, phone, company, message, budget } = body;

    // Validation
    if (!name || !email || services.length === 0) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const servicesList = services
      .map((s) => serviceLabels[s] || s)
      .join(", ");

    // Email to HKCOM
    await resend.emails.send({
      from: "HKCOM Site Web <onboarding@resend.dev>",
      to: "agence.hkcom@gmail.com",
      replyTo: email,
      subject: `Nouveau prospect : ${name} — ${servicesList}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0C3559, #3b82f6); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle demande de contact</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Via le formulaire hkcom.fr</p>
          </div>

          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0C3559; font-size: 16px; margin: 0 0 16px; border-bottom: 2px solid #06C472; padding-bottom: 8px;">Informations du prospect</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px;">Nom</td>
                <td style="padding: 8px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #64748b;">Téléphone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></td></tr>` : ""}
              ${company ? `<tr><td style="padding: 8px 0; color: #64748b;">Entreprise</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            </table>
          </div>

          <div style="background: white; padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
            <h2 style="color: #0C3559; font-size: 16px; margin: 0 0 16px; border-bottom: 2px solid #CD9E01; padding-bottom: 8px;">Détails du projet</h2>

            <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">Services demandés :</p>
            <div style="margin-bottom: 16px;">
              ${services.map((s) => `<span style="display: inline-block; background: #0C3559; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; margin: 2px 4px 2px 0;">${serviceLabels[s] || s}</span>`).join("")}
            </div>

            ${budget ? `<p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">Budget estimé :</p><p style="margin: 0 0 16px; font-weight: 600; color: #06C472; font-size: 18px;">${budget}</p>` : ""}

            ${message ? `<p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">Message :</p><div style="background: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #0C3559;"><p style="margin: 0; white-space: pre-wrap;">${message}</p></div>` : ""}
          </div>

          <div style="background: #0C3559; padding: 16px; border-radius: 0 0 12px 12px; text-align: center;">
            <a href="mailto:${email}" style="color: white; text-decoration: none; font-weight: 600;">Répondre à ${name}</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
