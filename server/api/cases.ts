import { readdir, readFile } from 'fs/promises'

export default defineEventHandler(async () => {
  const files = await readdir('server/data/cases')
  const cases = await Promise.all(
    files.map(async (file) => {
      const content = await readFile(`server/data/cases/${file}`, 'utf-8')
      return JSON.parse(content)
    })
  )
  return cases
})
