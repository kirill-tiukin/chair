import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Kirill Tiukin — Vice Chair | Bath Finance Society",
  description:
    "Vote for Kirill Tiukin as Vice Chair of Bath Finance Society. BSc Accounting & Finance, quant finance trainee, and founder with a track record of building real things.",
  openGraph: {
    title: "Kirill Tiukin — Vice Chair Candidate",
    description: "Bath Finance Society Vice Chair Candidacy",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234a35a8'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-dm" suppressHydrationWarning>{children}</body>
    </html>
  );
}
