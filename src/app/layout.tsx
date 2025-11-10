import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sync Love - Organize a vida a dois com amor",
  description: "O app perfeito para casais que querem compartilhar tarefas, gerenciar compras e organizar eventos juntos!",
  keywords: ["casal", "organização", "tarefas", "lista de compras", "calendário", "relacionamento"],
  authors: [{ name: "Sync Love" }],
  openGraph: {
    title: "Sync Love - Organize a vida a dois com amor",
    description: "O app perfeito para casais organizarem sua vida juntos",
    type: "website",
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
