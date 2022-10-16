const { callApi5Times, insertFacts5Times } = require('../services/catApiCall');

const getFacts = async (_req, res) => {
  res.json(await callApi5Times());
};

const insertFacts = async (_req, res) => {
  const insertedFacts = await insertFacts5Times();
  res.status(201).json(insertedFacts);
};

module.exports = {
  getFacts,
  insertFacts,
};
