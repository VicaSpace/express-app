import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../../models')

export async function callApi5Times (): Promise<any> {
  const result = []
  try {
    for (let i = 0; i < 5; ++i) {
      const response = await axios('https://catfact.ninja/fact')
      result.push({ id: i, ...response.data })
    }
  } catch (_err) {
    return {
      status: 400,
      message: 'Fact API error'
    }
  }
  return result
}

/**
 *
 * @returns 5 API results without ID
 */
const callApi5TimesWithoutId = async (): Promise<any> => {
  const result = []
  try {
    for (let i = 0; i < 5; ++i) {
      const response = await axios('https://catfact.ninja/fact')
      result.push({ ...response.data })
    }
  } catch (_err) {
    return {
      status: 400,
      message: 'Fact API error'
    }
  }
  return result
}

/**
 * Inserted 5 facts into the database
 * @returns Inserted Facts
 */
export const insertFacts5Times = async (): Promise<any> => {
  const result = await callApi5TimesWithoutId()
  const insertedData = await db.cats.bulkCreate(result)
  return insertedData
}
