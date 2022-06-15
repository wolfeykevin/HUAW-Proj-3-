/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments();
    table.string("name", 255);
    table.string("description", 255);
    table.string("background_img", 255); // URL?? or some asset that we saved???
    table.string("target", 255);
    table.string("effect", 255);
    table.integer("value");
    table.string("temp_effect", 255);
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("cards");
}
