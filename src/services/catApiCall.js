const axios = require('axios');
const db = require('../../models');

async function callApi5Times() {
  const result = [];
  try {
    for (let i = 0; i < 5; ++i) {
      const response = await axios('https://catfact.ninja/fact');
      result.push({ id: i, ...response.data });
    }
  } catch (_err) {
    return {
      status: 400,
      message: 'Fact API error',
    };
  }
  return result;
}

/**
 *
 * @returns 5 API results without ID
 */
const callApi5TimesWithoutId = async () => {
  const result = [];
  try {
    for (let i = 0; i < 5; ++i) {
      const response = await axios('https://catfact.ninja/fact');
      result.push({ ...response.data });
    }
  } catch (_err) {
    return {
      status: 400,
      message: 'Fact API error',
    };
  }
  return result;
};

/**
 * Inserted 5 facts into the database
 * @returns Inserted Facts
 */
const insertFacts5Times = async () => {
  const result = await callApi5TimesWithoutId();
  const insertedData = await db.cats.bulkCreate(result);
  return insertedData;
};

module.exports = {
  callApi5Times,
  insertFacts5Times,
};
