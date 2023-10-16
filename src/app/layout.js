import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDSC | Assam down town University",
  image: "",
  type: "website",
  description: "This is the leaderboard for the GDSC Adtu Jams",
  keywords: ["gcsj", "jams", "adtu", "gdscadtu"],
  robots: "index,follow",

  "og:title": "GDSC Adtu Leaderboard",
  "og:image": "",
  "og:description": "This is the leaderboard for the GDSC AdtU Jams.",
  "twitter:card": "summary_large_image",
  "twitter:title": "GDSC AdtU Leaderboard",
  "twitter:description": "This is the leaderboard for the GDSC AdtU Jams.",
  "twitter:image": "",
  "twitter:site": "@gdsc_adtu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
