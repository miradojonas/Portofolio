import { NextRequest, NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text();
    if (!raw) {
      return NextResponse.json({ error: "Body vide" }, { status: 400 });
    }

    let body: Partial<Payload>;
    try {
      body = JSON.parse(raw) as Partial<Payload>;
    } catch {
      return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || message.length > 3000) {
      return NextResponse.json({ error: "Contenu trop long" }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const secret = process.env.N8N_SHARED_SECRET;

    if (!webhookUrl || !secret) {
      return NextResponse.json({ error: "Variables serveur manquantes" }, { status: 500 });
    }

    const n8nResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": secret,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        source: "portfolio-nextjs",
        createdAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!n8nResponse.ok) {
      return NextResponse.json({ error: "Webhook n8n a rejeté la requête" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}