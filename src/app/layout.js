import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Shivang Singh",
  description: "Shivang's Portfolio",
};

const paralucent = localFont({
  src: "./ParalucentCondHeavy.otf",
  variable: "--font-paralucent",
});

const paralucentdemi = localFont({
  src: "./ParalucentCondDemiBold.otf",
  variable: "--font-paralucentdemi",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${paralucent.variable} ${paralucentdemi.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
