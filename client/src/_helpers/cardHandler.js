const cardHandler = (self, opponent, cardData) => {
  let targets = [];
  let targetEffects = cardData.effect;
  let amounts = cardData.amount;

  // set up targets
  if (cardData.target === "self") {
    targets.push(self);
  } else if (cardData.target === "opponent") {
    targets.push(opponent);
  } else if (cardData.target === "all") {
    targets.push(self);
    targets.push(opponent);
  }

  // apply effect to targets
  targets.forEach((target) => {
    //target[targetStat] += amount;
  });
};

export default cardHandler;
