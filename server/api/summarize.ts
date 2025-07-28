import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.text) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing text to summarize'
    })
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a legal document summarizer.'
      },
      {
        role: 'user',
        content: `Summarize the following text:\n\n${body.text}`
      }
    ]
  })

  return {
    summary: completion.choices[0].message.content
  }
})
