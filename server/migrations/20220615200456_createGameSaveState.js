/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("game_stats", (table) => {
    table.increments();
    table.integer("level");
    table.integer("player_id");
    table.foreign('player_id').references('player.id');
    table.json("player");
    table.json("enemy");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('game_stats', table => {
    table.dropForeign('player_id');
  })
  .then(function() {
    return knex.schema.dropTableIfExists("game_stats");
  })
}
