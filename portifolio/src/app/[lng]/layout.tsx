import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { languages } from '../i18n/settings'


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruan Amaral Lemos",
  description: "Ruan's portifolio",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
