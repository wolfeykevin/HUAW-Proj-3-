/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("entities").del();
  await knex("entities").insert([
    {
      name:"Finance",
      base: {
        morale:100,
        attack:0,
        defense:0
      },
      current: {
        morale: 100,
        attack: 0,
        defense: 0
      },
      max: { morale: 100 },
      turns: 0,
      rank: 1
    },
    {
      name:"SECFO",
      base: {
        morale:100,
        attack:0,
        defense:0
      },
      current: {
        morale: 100,
        attack: 0,
        defense: 0
      },
      max: { morale: 100 },
      turns: 0,
      rank: 1
    },
    {
      name:"DFAC",
      base: {
        morale:100,
        attack:0,
        defense:0
      },
      current: {
        morale: 100,
        attack: 0,
        defense: 0
      },
      max: { morale: 100 },
      turns: 0,
      rank: 1
    },
    {
      name:"Intel",
      base: {
        morale:100,
        attack:0,
        defense:0
      },
      current: {
        morale: 100,
        attack: 0,
        defense: 0
      },
      max: { morale: 100 },
      turns: 0,
      rank: 1
    },
    {
      name:"SpecOps",
      base: {
        morale:100,
        attack:0,
        defense:0
      },
      current: {
        morale: 100,
        attack: 0,
        defense: 0
      },
      max: { morale: 100 },
      turns: 0,
      rank: 1
    }
  ]);
}
