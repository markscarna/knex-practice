/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("pet", (table) => {
    table.increments("id");
    table.string("name", 255);
    table.integer("pet_type_id");
    table.foreign("pet_type_id").references("pet_type.id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .alterTable("pet", (table) => {
      table.dropForeign("pet_type_id");
    })
    .then(() => {
      return knex.schema.dropTableIfExists("pet");
    });
}
