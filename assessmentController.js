const { evaluateCode } = require("../services/aiService");

exports.assess = async (req, res) => {
  const { code } = req.body;
  const result = await evaluateCode(code);
  res.json({ result });
};