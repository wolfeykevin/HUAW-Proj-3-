/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("player").del();
  await knex("player").insert([
    { id: 1, name: "readyPlayerOne", highscore: 100 },
    { id: 2, name: "Kevin", highscore: 150 },
    { id: 3, name: "Kyle", highscore: 1000 },
    { id: 4, name: "Daniel", highscore: 1 },
  ]);
}
