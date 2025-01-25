"use client"

import { useState } from "react"
import { useCompletion } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { IPhoneMaps } from "./iphone-maps"

export function WorkflowLayout() {
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

  const handleCopyAndPaste = () => {
    if (completion) {
      setGoogleQuery(completion)
    }
  }

  const handleGoogleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (googleQuery) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`, "_blank")
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[800px] rounded-2xl p-8 overflow-hidden">
      {/* Caminho do Jogo */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200 700 C200 700, 400 400, 500 100 S600 400, 800 700"
          stroke="#FFD700"
          strokeWidth="40"
          strokeLinecap="round"
          className="opacity-50"
        />
        <path
          d="M200 700 C200 700, 400 400, 500 100 S600 400, 800 700"
          stroke="#FF4444"
          strokeWidth="36"
          strokeLinecap="round"
          strokeDasharray="1 60"
          className="opacity-70"
        />
      </svg>

      {/* Formulário de Entrada - Inferior Esquerdo */}
      <div className="absolute bottom-8 left-8 w-[300px]">
        <motion.div
          className="bg-yellow-100 rounded-xl p-6 shadow-lg border-4 border-red-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="font-bold text-red-700 mb-2 text-xl text-center">Life_Game</h2>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Digite sua busca aqui..."
              className="w-full bg-white border-2 border-red-300"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-lg"
            >
              {isLoading ? "Processando..." : "Iniciar"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Saída do Google Dorks - Superior */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[400px]">
        <motion.div
          className="bg-yellow-100 rounded-xl p-6 shadow-lg border-4 border-yellow-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
              <h2 className="font-bold text-yellow-700 text-xl">G_Power</h2>
            </div>
            {completion && (
              <Button
                onClick={handleCopyAndPaste}
                variant="secondary"
                className="bg-yellow-500 text-white hover:bg-yellow-600 font-bold"
              >
                Go 
              </Button>
            )}
          </div>
          <p className="font-mono text-sm bg-white/90 p-4 rounded-lg min-h-[3em] border-2 border-yellow-200">
            {completion || "Power Version"}
          </p>
        </motion.div>
      </div>

      {/* Pesquisa Google - Inferior Direito */}
      <div className="absolute bottom-8 right-8 w-[300px]">
        <motion.div
          className="bg-yellow-100 rounded-xl p-6 shadow-lg border-4 border-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-bold text-blue-700 mb-4 text-xl text-center">Last-go</h2>
          <form onSubmit={handleGoogleSearch} className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                value={googleQuery}
                onChange={(e) => setGoogleQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full bg-white border-2 border-blue-300"
                placeholder="Buscar no Google..."
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg">
              touch!
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Exibição do Mapa no iPhone - Centro Inferior */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <IPhoneMaps />
      </div>
    </div>
  )
}

