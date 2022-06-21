/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("player").del();
  await knex("player").insert([
    { name: "PlayerOne", highscore: 0 },
  ]);
}
