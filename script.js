const rollDice = (dice) => {
  const diceTypes = { d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d16: 16, d20: 20 };

  if (!diceTypes.hasOwnProperty(dice))
    return `Undefined type, available types: ${Object.keys(diceTypes).join(
      ", "
    )}`;

  const currentDice = diceTypes[dice];

  return Math.floor(Math.random() * currentDice + 1);
};

console.log(rollDice("example"));
console.log(rollDice(2));
console.log(rollDice([]));
console.log(rollDice("d4"));
console.log(rollDice("d20"));
