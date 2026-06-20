import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Shaibu | Data Scientist, Data Engineer, and Technical Writer",
  description:
    "Portfolio of Samuel Shaibu, a data scientist, data engineer, and technical writer working across Python, SQL, ETL, machine learning, Power BI, and practical data education.",
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
