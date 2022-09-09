/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE pet_type CASCADE");
  await knex("pet_type").del();
  await knex("pet_type").insert([
    { id: 1, name: "Bird" },
    { id: 2, name: "Dog" },
    { id: 3, name: "Fish" },
    { id: 4, name: "Cat" },
  ]);
}
