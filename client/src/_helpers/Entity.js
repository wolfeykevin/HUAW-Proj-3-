class Entity {
  constructor(entityData) {
    this.currentMorale = 100;

    //TO-DO: flesh this out

    this.maxMorale = 100;
    this.baseAttack = 10;
    this.baseDefense = 10;
    this.turns = 0;
    this.rank = 1;
  }

  applyEffect(stat, amount) {
    this[stat] += amount;
  }
}

export default Entity;