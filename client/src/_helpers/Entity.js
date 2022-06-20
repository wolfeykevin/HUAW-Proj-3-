class Entity {
  constructor(entityData) {
    this.name = entityData.name;

    this.base = {
      morale: 100,
      attack: 0,
      defense: 0,
    }

    this.current = {
      morale: 100,
      attack: 0,
      defense: 0,
      // turns: 0,
      // rank: 1,
    }

    this.max = {
      morale: 100,
    }

    this.turns = 0;
    this.rank = 1;

  }

  applyEffect(stat, amount) {
    // handle percentage effects
    if (typeof amount === 'string') {
      let stringData = amount.split(" ")
      let ratio = 1 + (parseInt(stringData[stringData.length - 1]) / 100)

      this.current[stat] = Math.floor(this.current[stat] * ratio)
    }
    // integer effects
    else {
      if (stat === 'rank' || stat === 'turns') {
        this[stat] += amount;
      } else if (stat === 'maxMorale') {
        this.max.morale += amount;
      } else {
        this.current[stat] += amount;
      }
    }

    // clean up low or high morale values
    if (this.current.morale < 0) {
      this.current.morale = 0;
    } else if (this.current.morale > this.max.morale) {
      this.current.morale = this.max.morale;
    }
  }
}

export default Entity;