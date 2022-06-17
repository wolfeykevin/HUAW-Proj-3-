class Entity {
  constructor(entityData) {
    this.currentMorale = 100;
    this.maxMorale = 100;
    this.baseAttack = 10;
    this.baseDefense = 10;
    this.baseSpeed = 0;
    this.turns = 0;
    this.rank = 1;
  }

  adjustStat(stat, amount, tempEffect) {
    this[stat] += amount;
  }
}