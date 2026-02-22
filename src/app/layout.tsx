import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/app/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${content.site.name} — ${content.site.title}`,
  description: content.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}