export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const caseNumber = body.caseNumber

  // Simulated status response
  const result = {
    status: '🟢 Hearing scheduled on August 10, 2025 at Delhi High Court',
    caseNumber,
  }

  return result
})
