import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const runtime = "edge"

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const response = streamText({
    model: openai("gpt-4o"),
    messages: [
      {
        role: "system",
        content: `Você é um especialista em Google Dorks e Google Hacking.
        Transforme consultas simples em buscas avançadas.
        Use técnicas de Google Dorks para obter resultados mais precisos e relevantes.
        Use operadores (site:, filetype:, inurl:, etc).
        Não explique, apenas forneça a consulta avançada.`,
      },
      {
        role: "user",
        content: `Transforme a seguinte busca em uma consulta avançada usando Google Dorks: "${prompt}"`,
      },
    ],
    temperature: 0.1
  })

  return response.toDataStreamResponse()
}

