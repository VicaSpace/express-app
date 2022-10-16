import { callApi5Times, insertFacts5Times } from '../services/catApiCall'

export const getFacts = (_req: any, res: any): void => {
  void (async () => {
    res.json(await callApi5Times())
  })()
}

export const insertFacts = (_req: any, res: any): void => {
  void (async (res) => {
    const insertedFacts = await insertFacts5Times()
    res.status(201).json(insertedFacts)
  })(res)
}
