import { cn } from "@/lib/utils"
import { Space_Grotesk } from "next/font/google"
import type { ReactNode } from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Busca Avançada",
  description: "Uma ferramenta de busca avançada usando técnicas de Google Dorks e Google Hacking.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className={cn("antialiased", spaceGrotesk.className)}>{children}</body>
    </html>
  )
}



import './globals.css'