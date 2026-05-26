import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junior Generation Football Academy | Youth Football Coaching",
  description:
    "Professional football coaching for young players. After-school clubs, holiday camps, and skills academies. Give your child the edge — join JGFA today.",
  keywords: [
    "youth football",
    "junior football academy",
    "kids football coaching",
    "after school football club",
    "football camps",
    "JGFA",
  ],
  openGraph: {
    title: "Junior Generation Football Academy",
    description:
      "After-school clubs, holiday camps & skills training for young footballers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
