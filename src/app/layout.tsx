import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import MainProvider from "@/lib/providers/main-provider";
import { Inter } from "next/font/google";
import Navbar from "@/components/globals/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KyperFix",
  description: "KyperFix by Kyper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <body className="w-full">
        <MainProvider>
          <Navbar />

          {children}
        </MainProvider>
        <Toaster />
      </body>
    </html>
  );
}
