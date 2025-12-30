import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonas — Portfolio",
  description: "Portfolio de Jonas (DevOps / Dev Web / Admin Sys).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}