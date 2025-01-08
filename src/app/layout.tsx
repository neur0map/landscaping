import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./components/ThemeRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M.V. Landscaping | Professional Landscaping Services in RI & MA",
  description: "Professional landscaping services in Rhode Island & Massachusetts. From lawn care to complete transformations, M.V. Landscaping has you covered.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
