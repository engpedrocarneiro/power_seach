import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    const apiKey = process.env.PERPLEXITY_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API key não configurada" }, { status: 500 });
    }

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          {
            role: "system",
            content: "Você é uma IA especializada em realizar buscas e fornecer informações precisas e confiáveis. Sempre priorize dados recentes, especialmente de 2024 e 2025, garantindo que as informações estejam atualizadas e sejam relevantes. Busque termos em fontes científicas, acadêmicas ou amplamente reconhecidas como confiáveis, como artigos revisados por pares, relatórios oficiais e publicações de alta credibilidade. Responda em português do Brasil, apresentando as informações de forma clara, estruturada e objetiva. Use negrito para títulos e subtítulos relevantes. Sempre ofereça uma análise com contexto comparativo, detalhando tanto a realidade do Brasil quanto a de outros países, destacando similaridades, diferenças e implicações. Inclua referências claras e detalhadas de onde as informações foram obtidas, com links ou descrições das fontes para validação."
          },
          {
            role: "user",
            content: query
          }
        ],
        temperature: 0.2,
        top_p: 0.9,
        search_domain_filter: ["perplexity.ai"],
        return_images: false,
        return_related_questions: false,
        search_recency_filter: "month",
        stream: false,
        frequency_penalty: 1
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Erro na API');
    }

    const data = await response.json();
    return NextResponse.json({ response: data.choices[0].message.content });
    
  } catch (error: any) {
    console.error("Erro na API Perplexity:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao processar solicitação" }, 
      { status: 500 }
    );
  }
}
