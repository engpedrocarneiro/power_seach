"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface GoogleSearchBarProps {
  initialQuery?: string
  onQueryChange?: (query: string) => void
}

export function GoogleSearchBar({ initialQuery = "", onQueryChange }: GoogleSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank")
    }
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setSearchQuery(newQuery)
    if (onQueryChange) {
      onQueryChange(newQuery)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <div className="relative flex-grow">
        <Input
          type="text"
          value={searchQuery}
          onChange={handleQueryChange}
          placeholder="Pesquisar no Google"
          className="pl-10 h-12 bg-white border-2 border-zinc-200 focus:border-blue-500 transition-colors"
          aria-label="Pesquisar no Google"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
      </div>
      <Button type="submit" className="h-12 px-6 bg-blue-500 hover:bg-blue-600 text-white">
        Pesquisar
      </Button>
    </form>
  )
}

