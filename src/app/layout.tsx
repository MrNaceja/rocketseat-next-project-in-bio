import type { Metadata } from "next";
import './globals.css'

import { Red_Hat_Display } from "next/font/google"

const redHatDisplayFont = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project in bio",
  description: "Next Project In Bio SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${redHatDisplayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
