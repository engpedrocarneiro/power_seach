"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function PerplexityChat() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const res = await fetch("/api/perplexity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      })
      const data = await res.json()
      setResponse(data.response)
    } catch (error) {
      console.error("Erro ao buscar resposta:", error)
      setResponse("Desculpe, ocorreu um erro ao processar sua pergunta.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-black relative">
      {/* 
        1) Adicionamos pointer-events-none no container absoluto (z-0).
        2) Mantemos pointer-events-auto especificamente nos links, 
           para torná-los clicáveis mesmo em um pai com pointer-events-none. 
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none">
        <div className="text-center opacity-30">
          {/* Destaque: IAnovar Ative o Futuro */}
          <h1 className="text-white text-3xl font-bold mb-1">IAnovar</h1>
          <p className="text-white text-xl mb-4">Ative o Futuro</p>
          {/* Link abaixo de "Ative o Futuro" para https://vemia.com.br */}
          <a
            href="https://vemia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm hover:text-purple-400 transition-colors duration-300 opacity-90 pointer-events-auto"
          >
            Vem IA
          </a>
          <br />
          <a
            href="https://vemia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm hover:text-purple-400 transition-colors duration-300 opacity-90 pointer-events-auto"
          >
            Plataforma Vem-IA
          </a>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4 z-10 relative">
        {response && (
          <div className="bg-gray-800 p-3 rounded-lg shadow mb-2">
            <p className="text-sm text-white">{response}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-2 bg-gray-900 border-t border-gray-800 z-10 relative">
        <div className="flex items-center">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pergunte algo..."
            className="flex-grow mr-2 bg-gray-800 text-white border-gray-700"
          />
          <Button type="submit" disabled={isLoading} className="bg-purple-600 hover:bg-purple-700">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}

