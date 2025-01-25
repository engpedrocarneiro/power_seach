import { cn } from "@/lib/utils"
import { Space_Grotesk } from "next/font/google"
import type { ReactNode } from "react"
import type { Metadata, Viewport } from 'next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Power Search - Busca Avançada",
  description: "Ferramenta avançada de busca que combina técnicas de Google Dorks, IA e análise inteligente para resultados mais precisos e relevantes.",
  keywords: "busca avançada, google dorks, pesquisa inteligente, IA, análise de dados",
  authors: [{ name: "Pedro Carneiro" }],
  openGraph: {
    title: "Power Search - Busca Avançada",
    description: "Ferramenta avançada de busca que combina técnicas de Google Dorks, IA e análise inteligente para resultados mais precisos e relevantes.",
    url: "https://power-search.vercel.app",
    siteName: "Power Search",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={cn("antialiased", spaceGrotesk.className)}>{children}</body>
    </html>
  )
}
