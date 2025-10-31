import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jarle Halden",
    template: "%s · Jarle Halden",
  },
  description: "Student • Utvikler • Håndball. Bygger ting med Node og TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
