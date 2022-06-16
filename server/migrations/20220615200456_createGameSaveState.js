/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("game_stats", (table) => {
    table.increments();
    // table.integer("player_morale");
    // table.integer("enemy_morale");
    table.integer("level");
    table.integer("player_id");
    table.json("player");
    table.json("enemy");
    // table.integer("player_id");
    // table.integer("character_id");
    // table.integer("enemy_id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("game_stats");
}
