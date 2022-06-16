/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("player").del();
  await knex("player").insert([
    { name: "readyPlayerOne", highscore: 100 },
    { name: "Kevin", highscore: 150 },
    { name: "Kyle", highscore: 1000 },
    { name: "Daniel", highscore: 1 },
  ]);
}
