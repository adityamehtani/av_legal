import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const prompt = body.text

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a legal assistant that summarizes legal case text.' },
      { role: 'user', content: prompt }
    ]
  })

  return { summary: completion.choices[0].message.content }
})
