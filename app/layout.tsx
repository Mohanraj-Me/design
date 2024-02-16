import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohanraj Portfolio",
  description: "Visualizing my work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
