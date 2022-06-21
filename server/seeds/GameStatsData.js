/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("game_stats").del();
  await knex("game_stats").insert([
    {
      level: 5,
      player_id: 1,
      player: JSON.stringify({
        name:"Finance",
        base: {
          morale:100,
          attack:0,
          defense:0
        },
        current: {
          morale: 50,
          attack: 0,
          defense: 0
        },
        max: { morale: 100 },
        turns: 0,
        rank: 1
      }),
      enemy: JSON.stringify({
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
      }),
    },
  ]);
}
