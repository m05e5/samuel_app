import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Shaibu | Data Scientist and Technical Writer",
  description:
    "Portfolio of Samuel Shaibu, a Data Scientist and Technical Writer focused on analytics, technical content, and data-driven problem solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}