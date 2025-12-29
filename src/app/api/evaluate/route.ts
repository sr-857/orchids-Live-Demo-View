import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Simulated evaluation logic matching chatbot-1766944529915.py
    let riskScore = 0.05 + Math.random() * 0.1 // Baseline noise
    let type = "N/A"
    
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes("ignore") && lowerPrompt.includes("instructions")) {
      riskScore = 0.9 + Math.random() * 0.09
      type = "Prompt Injection"
    } else if (lowerPrompt.includes("bypass") || lowerPrompt.includes("jailbreak")) {
      riskScore = 0.85 + Math.random() * 0.14
      type = "Jailbreak"
    } else if (lowerPrompt.includes("email") || lowerPrompt.includes("password") || lowerPrompt.includes("ssn")) {
      riskScore = 0.75 + Math.random() * 0.2
      type = "PII Leak"
    } else if (lowerPrompt.includes("kill") || lowerPrompt.includes("hate")) {
      riskScore = 0.8 + Math.random() * 0.19
      type = "Toxicity"
    }

    const status = riskScore > 0.8 ? "Blocked" : riskScore > 0.5 ? "Flagged" : "Safe"

    return NextResponse.json({
      id: `TR-${Math.floor(1000 + Math.random() * 9000)}`,
      prompt,
      score: riskScore,
      status,
      type,
      time: "Just now"
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
