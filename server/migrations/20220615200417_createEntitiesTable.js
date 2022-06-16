/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("entities", (table) => {
    table.increments();
    table.string("name", 255);
    table.integer("morale");
    table.integer("attack");
    table.integer("defense");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("entities");
}
