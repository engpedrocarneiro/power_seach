import { Button } from "@/components/ui/button"
import { Clipboard } from "lucide-react"

interface PasteButtonProps {
  textToPaste: string
  onPaste: (text: string) => void
}

export function PasteButton({ textToPaste, onPaste }: PasteButtonProps) {
  const handlePaste = () => {
    onPaste(textToPaste)
  }

  return (
    <Button
      onClick={handlePaste}
      variant="outline"
      size="sm"
      className="h-8 px-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
    >
      <Clipboard className="h-4 w-4 mr-2" />
      Colar
    </Button>
  )
}

