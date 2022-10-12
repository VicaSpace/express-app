const axios = require("axios");

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
      message: 'Fact API error'
    };
  }
  return result;
}

module.exports = {
  callApi5Times
};
