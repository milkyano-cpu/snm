import { Outfit, DM_Sans } from "next/font/google";

import "./globals.css";
import Preloader from "@/src/components/Preloader";
import ScrollAnimator from "@/src/components/ScrollAnimator";

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "SNM Melbourne — Saturday Night Meet",
  description:
    "Saturday Night Meet — 28th Feb at Lorbek Luxury Cars, Port Melbourne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ background: "#010101" }}>
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        <Preloader />
        <ScrollAnimator />
        {children}
      </body>
    </html>
  );
}
