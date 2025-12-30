import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/app/content";

export const metadata: Metadata = {
  title: `${content.site.name} — ${content.site.title}`,
  description: content.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}