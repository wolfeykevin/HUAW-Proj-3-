class Entity {
  constructor(entityData, level) {
    this.name = entityData.name;
    this.rank = entityData.rank;

    if (level !== undefined) {
      this.rank = level;
      this.base = {
        morale: entityData.base.morale + (5 * this.rank),
        attack: entityData.base.attack  + (2 * this.rank),
        defense: entityData.base.defense  + (1 * this.rank),
      }

      this.current = {
        morale: entityData.current.morale + (5 * this.rank),
        attack: entityData.current.attack + (2 * this.rank),
        defense: entityData.current.defense + (1 * this.rank),
      }

      this.max = {
        morale: entityData.max.morale + (5 * this.rank)
      }
    } else {
      this.base = {
        morale: entityData.base.morale,
        attack: entityData.base.attack,
        defense: entityData.base.defense,
      }

      this.current = {
        morale: entityData.current.morale,
        attack: entityData.base.attack + (2 * this.rank),
        defense: entityData.base.defense + (1 * this.rank),
      }

      this.max = {
        morale: entityData.base.morale + (5 * this.rank)
      }
    }

    this.turns = 0;
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
        this.updateValues()
      } else if (stat === 'maxMorale') {
        this.base.morale += amount;
        this.updateValues()
      } else if (stat === 'attack' || stat === 'defense') {
        this.base[stat] += amount;
        this.updateValues()
      }else {
        this.current[stat] += amount;
      }
    }

    // clean up low attack/defense values
    if (this.current.attack < 0) {
      this.current.attack = 0;
    }

    if (this.current.defense < 0) {
      this.current.defense = 0;
    }

    // clean up low or high morale values
    if (this.current.morale < 0) {
      this.current.morale = 0;
    } else if (this.current.morale > this.max.morale) {
      this.current.morale = this.max.morale;
    }
  }

  updateValues() {
    if (this.base.attack < 0) {
      this.base.attack = 0;
    }

    if (this.base.defense < 0) {
      this.base.defense = 0;
    }

    this.current.attack = this.base.attack + (2 * this.rank);
    this.current.defense = this.base.defense + (1 * this.rank);
    this.max.morale = this.base.morale + (5 * this.rank)
  }
}

export default Entity;