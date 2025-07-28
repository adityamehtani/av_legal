import formidable from 'formidable'
import { readFile } from 'fs/promises'
import pdfParse from 'pdf-parse'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: false })
  const [fields, files] = await form.parse(event.node.req)

  const file = files.file[0]
  const data = await readFile(file.filepath)
  const pdf = await pdfParse(data)

  return { text: pdf.text }
})
