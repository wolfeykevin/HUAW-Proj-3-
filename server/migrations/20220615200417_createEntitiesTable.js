/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("entities", (table) => {
    table.increments();
    table.string("name", 255);
    table.json('base');
    table.json('current');
    table.json('max');
    table.integer("turns");
    table.integer("rank");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("entities");
}

