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
        char_id: 11,
        morale: 100,
        attack: 2,
        defense: 1,
      }),
      enemy: JSON.stringify({
        char_id: 1,
        morale: 100,
        attack: 1,
        defense: 1,
      }),
    },
  ]);
}
