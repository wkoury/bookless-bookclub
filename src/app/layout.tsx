import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookless Bookclub",
  description: "Creating connections around the topics you love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 via-red-300 to-yellow-200">{children}</body>
    </html>
  );
}
