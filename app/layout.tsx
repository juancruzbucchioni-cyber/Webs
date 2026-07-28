import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title: "JCB Development — Diseño y desarrollo web",
    description: "Webs a medida para marcas que quieren destacarse, vender más y crecer.",
    icons: {
      icon: [{ url: "/jcb-favicon.png", type: "image/png" }],
      shortcut: "/jcb-favicon.png",
      apple: "/jcb-favicon.png",
    },
    openGraph: {
      title: "JCB Development — Diseño y desarrollo web",
      description: "Webs a medida para marcas que quieren destacarse, vender más y crecer.",
      images: [{ url: ogImage, width: 1732, height: 908, alt: "JCB Development" }],
      locale: "es_AR",
      type: "website",
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={sans.variable}>{children}</body></html>;
}
