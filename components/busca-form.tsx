"use client"

import { useState } from "react"
import { useCompletion } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { CopyButton } from "./copy-button"
import { GoogleSearchBar } from "./google-search-bar"
import { PasteButton } from "./paste-button"

export function BuscaForm() {
  const [query, setQuery] = useState("")
  const [googleQuery, setGoogleQuery] = useState("")
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/busca",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      complete(query)
    }
  }

  const handlePaste = (text: string) => {
    setGoogleQuery(text)
  }

  return (
    <Card className="w-full max-w-2xl bg-white/90 backdrop-blur">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <div className="relative flex-grow">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Digite sua busca aqui"
              className="pl-10 h-12 bg-white border-2 border-zinc-200 focus:border-[#48bb78] transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          </div>
          <Button type="submit" disabled={isLoading} className="h-12 px-6 bg-zinc-800 hover:bg-zinc-700 text-white">
            {isLoading ? "Buscando..." : "Buscar"}
          </Button>
        </form>

        {completion && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <h2 className="text-sm font-medium text-zinc-500 mb-2">Busca Original:</h2>
              <p className="font-mono text-zinc-800">{query}</p>
            </div>
            <div className="p-4 rounded-lg bg-zinc-800 text-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium text-zinc-300">Busca Avançada:</h2>
                <div className="flex gap-2">
                  <PasteButton textToPaste={completion} onPaste={handlePaste} />
                  <CopyButton text={completion} />
                </div>
              </div>
              <p className="font-mono">{completion}</p>
            </div>
            <div className="p-4 rounded-lg bg-white border border-zinc-200">
              <h2 className="text-sm font-medium text-zinc-500 mb-2">Pesquisar no Google:</h2>
              <GoogleSearchBar initialQuery={googleQuery} onQueryChange={setGoogleQuery} />
            </div>
            <p className="text-sm text-zinc-500 italic text-center">
              Use o botão "Colar" para inserir a busca avançada na barra do Google, ou "Copiar" para usar em outro lugar
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

