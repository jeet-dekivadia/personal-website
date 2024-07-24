import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Jeet's Portfolio",
    template: "%s | Jeet's Portfolio",
  },
  description: "CS Freshman at Georgia Tech",
  openGraph: {
    title: "Jeet's Portfolio",
    description: "CS Freshman at Georgia Tech",
    url: "https://jeet-dekivadia.vercel.app/",
    siteName: "Jeet's Portfolio",
    images: [
      {
        url: "https://jeet-dekivadia.vercel.app/og.jpg", // Ensure you have this image in the public directory or provide a valid URL
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Jeet's Portfolio",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/pp%2024%20a.jpg", // Path to the favicon
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
