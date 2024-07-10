import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumaty",
  description: "お祭り・イベント検索アプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  return (
    <html lang="en">
      <head>
        {googleMapsApiKey && (
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`}
          />
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
