import formidable from 'formidable'
import { readFile, writeFile } from 'fs/promises'
import pdfParse from 'pdf-parse'
import { nanoid } from 'nanoid'

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

  const caseId = nanoid()
  const caseData = {
    id: caseId,
    name: file.originalFilename,
    text: pdf.text,
    date: new Date().toISOString(),
  }

  await writeFile(`server/data/cases/${caseId}.json`, JSON.stringify(caseData, null, 2))

  return { success: true, case: caseData }
})
