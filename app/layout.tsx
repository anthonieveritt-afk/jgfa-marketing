import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JGFA Football | Youth Football in Collier Row, Dagenham, Harold Hill, Upminster & Basildon",
  description:
    "Join our football development and skills training programme for aspiring players aged 5–11. Sessions in Collier Row, Dagenham, Harold Hill, Upminster & Basildon. Book a free trial today.",
  keywords: [
    "youth football",
    "JGFA Football",
    "junior football academy",
    "kids football coaching Essex",
    "after school football club",
    "football camps Dagenham",
    "football Collier Row",
    "football Harold Hill",
    "football Upminster",
    "football Basildon",
    "JGFA",
  ],
  openGraph: {
    title: "JGFA Football — Sessions across Essex & East London",
    description:
      "Football development for ages 5–11. After-school clubs, holiday camps & skills training in Collier Row, Dagenham, Harold Hill, Upminster & Basildon.",
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
