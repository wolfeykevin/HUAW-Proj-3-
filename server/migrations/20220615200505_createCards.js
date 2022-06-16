/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments();
    table.string("name");
    table.string("description");
    table.string("background_img");
    table.json("user_effect");
    table.json("enemy_effect");
    table.string("temp_effect");
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("cards");
}
