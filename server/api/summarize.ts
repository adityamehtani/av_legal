// server/api/summarize.ts
import { OpenAI } from 'openai';
import { defineEventHandler, readBody } from 'h3';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const inputText = body.text;

  if (!inputText) {
    return { summary: 'No text provided.' };
  }

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a legal document summarizer.' },
      { role: 'user', content: inputText },
    ],
    model: 'gpt-3.5-turbo',
  });

  const summary = completion.choices[0]?.message?.content || 'No summary available.';
  return { summary };
});
