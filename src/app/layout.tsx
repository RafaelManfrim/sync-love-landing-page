import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sync Love - Organize a vida a dois com amor",
  description: "O app perfeito para casais que querem compartilhar tarefas, gerenciar compras e organizar eventos juntos!",
  keywords: ["casal", "organização", "tarefas", "lista de compras", "calendário", "relacionamento"],
  authors: [{ name: "Sync Love" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
  },
  openGraph: {
    title: "Sync Love - Organize a vida a dois com amor",
    description: "O app perfeito para casais organizarem sua vida juntos",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 372,
        height: 247,
        alt: "Sync Love Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sync Love - Organize a vida a dois com amor",
    description: "O app perfeito para casais organizarem sua vida juntos",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
