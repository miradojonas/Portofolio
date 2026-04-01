import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "none";
  const raw = await req.text();

  return NextResponse.json({
    marker: "contact-debug-v3",
    contentType,
    rawLength: raw.length,
    rawPreview: raw.slice(0, 120),
  });
}