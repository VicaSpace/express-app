const { callApi5Times } = require('../services/catApiCall')

const getFacts = async (_req, res) => {
    res.json(await callApi5Times())
}

module.exports= {
    getFacts
}