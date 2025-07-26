import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const prompt = body.text

  if (!prompt) {
    return { summary: 'No text provided.' }
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Summarize the following legal document clearly and concisely.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 500
  })

  return { summary: response.choices[0].message.content }
})
