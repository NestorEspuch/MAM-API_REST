async function getRandomPositionByRarity(cuantity) {
  try {
    return  Math.floor(Math.random() * cuantity);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getRandomPositionByRarity };
