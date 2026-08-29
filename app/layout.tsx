import type { Metadata } from "next";
import { Press_Start_2P, JetBrains_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Arcade Vault · Portal Retro",
  description:
    "Plataforma retro para jugar y competir por los mejores puntajes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${pressStart2P.variable} ${jetbrainsMono.variable} ${courierPrime.variable}`}
    >
      <body>
        {/* capas de fondo: rejilla en perspectiva + scanlines + ruido */}
        <div className="av-bg" />
        <div className="av-noise" />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
