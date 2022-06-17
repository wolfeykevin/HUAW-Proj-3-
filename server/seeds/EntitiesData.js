/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("entities").del();
  await knex("entities").insert([
    // TODO: Update this format
    { id: 1, name: "Finance", morale: 100, attack: 1, defense: 5 },
    { id: 2, name: "SECFO", morale: 100, attack: 1, defense: 5 },
    { id: 3, name: "DFAC", morale: 100, attack: 1, defense: 5 },
    { id: 4, name: "Intel", morale: 100, attack: 1, defense: 5 },
    { id: 5, name: "SpecOps", morale: 100, attack: 1, defense: 5 },
  ]);
}
