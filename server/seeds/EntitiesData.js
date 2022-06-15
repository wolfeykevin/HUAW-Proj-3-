/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("entities").del();
  await knex("entities").insert([
    { id: 1, name: "SECFO", morale: 100, attack: 1, defense: 5, speed: 5 },
  ]);
}
