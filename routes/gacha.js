const express = require("express");
const router = express.Router();
const gachaLevelQuantity = require("../gacha/enum/enums").gachaLevelQuantity;
const { getRandomPositionByRarity } = require("../gacha/functions/getObject");

router.get("/:level", async (req, res) => {
  const { level } = req.params;
  const quantity = gachaLevelQuantity[level];

  const objectNumber = await getRandomPositionByRarity(quantity);
  res.status(200).json({ objectNumber, level });
});

module.exports = router;