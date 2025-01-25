import { WorkflowLayout } from "@/components/workflow-layout"

export default function Page() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BLOB_URL || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-01-25%20a%CC%80s%2000.03.26-73fv2aSaYpzS1Ny3yEUflBJ34PHZ8R.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <WorkflowLayout />
    </div>
  )
}

