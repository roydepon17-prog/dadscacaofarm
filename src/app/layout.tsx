import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://oguiachocolates.com"),
  title: { default: "O Guia Chocolates | Investor Portal", template: "%s | O Guia Chocolates" },
  description: "A bean-to-bar chocolate company cultivating enduring value from Brgy. Old Guia, Ma-ayon, Capiz.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "O Guia Chocolates", title: "O Guia Chocolates | Investor Portal", description: "Cultivating enduring value from Brgy. Old Guia, Ma-ayon, Capiz." },
  twitter: { card: "summary_large_image", title: "O Guia Chocolates | Investor Portal", description: "Cultivating enduring value from Brgy. Old Guia, Ma-ayon, Capiz." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}><body>{children}</body></html>;
}
