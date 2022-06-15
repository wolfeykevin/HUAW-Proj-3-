/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("cards").del();
  await knex("cards").insert([
    {
      id: 1,
      name: "testCard",
      description: "ghfjkldsfhjklsdf",
      background_img:
        "https://c8.alamy.com/comp/EPF3BP/funny-soldier-with-knife-on-white-EPF3BP.jpg",
      target: "self",
      effect: "morale",
      value: 20,
      temp_effect: "false",
    },
    {
      id: 2,
      name: "testCard",
      description: "ghfjkldsfhjklsdf",
      background_img:
        "https://c8.alamy.com/comp/EPF3BP/funny-soldier-with-knife-on-white-EPF3BP.jpg",
      target: "self",
      effect: "morale",
      value: 20,
      temp_effect: "false",
    },
    {
      id: 3,
      name: "testCard",
      description: "ghfjkldsfhjklsdf",
      background_img:
        "https://c8.alamy.com/comp/EPF3BP/funny-soldier-with-knife-on-white-EPF3BP.jpg",
      target: "self",
      effect: "morale",
      value: 20,
      temp_effect: "false",
    },
    {
      id: 4,
      name: "testCard",
      description: "ghfjkldsfhjklsdf",
      background_img:
        "https://c8.alamy.com/comp/EPF3BP/funny-soldier-with-knife-on-white-EPF3BP.jpg",
      target: "self",
      effect: "morale",
      value: 20,
      temp_effect: "false",
    },
    {
      id: 5,
      name: "testCard",
      description: "ghfjkldsfhjklsdf",
      background_img:
        "https://c8.alamy.com/comp/EPF3BP/funny-soldier-with-knife-on-white-EPF3BP.jpg",
      target: "self",
      effect: "morale",
      value: 20,
      temp_effect: "false",
    },
  ]);
}
