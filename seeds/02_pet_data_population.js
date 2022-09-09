/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("pet").del();
  await knex("pet").insert([
    { id: 1, name: "Charles", pet_type_id: 4 },
    { id: 2, name: "Alfred", pet_type_id: 2 },
    { id: 3, name: "Monique", pet_type_id: 1 },
    { id: 4, name: "Fishy", pet_type_id: 3 },
  ]);
}
