/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("game_stats").del();
  await knex("game_stats").insert([
    {
      id: 1,
      player_morale: 50,
      enemy_morale: 30,
      level: 5,
      player_id: 111,
      character_id: 222,
      enemy_id: 333,
    },
  ]);
}
