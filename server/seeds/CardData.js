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
      name: "(DFAC)  Burn Water",
      description: '"It\'s one part Cuyahoga River, one part incompetence. "',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["attack"],
        value: [-5],
      }),
      temp_effect: "false",
    },
    {
      id: 2,
      name: "(DFAC)  No PT Gear",
      description: '"You need to go change."',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["turns"],
        value: [-1],
      }),
      temp_effect: "false",
    },
    {
      id: 3,
      name: "(DFAC)  Ridiculously Sharp Knife",
      description: '"When you were partying, "',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-12],
      }),
      temp_effect: "false",
    },
    {
      id: 4,
      name: "(DFAC)  Turducken",
      description:
        '"It\'s an abomination. A delicious succulent, savory abomination."',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [10],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [10],
      }),
      temp_effect: "false",
    },
    {
      id: 5,
      name: "(DFAC)  Undercooked Chicken",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-10],
      }),
      temp_effect: "false",
    },
    {
      id: 6,
      name: "(Finance)  Ignore Calls & E-mails",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["turns"],
        value: [-1],
      }),
      temp_effect: "false",
    },
    {
      id: 7,
      name: "(Finance)  Mess Up Member Pay",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [5],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-5],
      }),
      temp_effect: "false",
    },
    {
      id: 8,
      name: "(Finance)  Misfiled Travel Voucher",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-15],
      }),
      temp_effect: "false",
    },
    {
      id: 9,
      name: "(Finance)  Overpay",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-7],
      }),
      temp_effect: "false",
    },
    {
      id: 10,
      name: "(Finance)  Schrodinger's Office Hours",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["defense"],
        value: [7],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 11,
      name: "(General)  Antidepressants",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["maxMorale", "morale"],
        value: [-10, "percent 100"],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 12,
      name: "(General)  BX Haircut",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [-5],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [5],
      }),
      temp_effect: "false",
    },
    {
      id: 13,
      name: "(General)  Commander's Call",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: ["percent -50"],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: ["percent -50"],
      }),
      temp_effect: "false",
    },
    {
      id: 14,
      name: "(General)  Dirtbag Airman",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["turns"],
        value: [-1],
      }),
      temp_effect: "false",
    },
    {
      id: 15,
      name: "(General)  Health Coping Mechanisms",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["maxMorale", "morale"],
        value: [-5, 5],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 16,
      name: "(General)  Pay With GTC",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [-7],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 17,
      name: "(General)  Pull 341",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 18,
      name: "(General)  Receive Article 15",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["rank"],
        value: [-1],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 19,
      name: "(General)  Reenlist",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [-9999],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 20,
      name: "(General)  Referred To Mental Health",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [15],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 21,
      name: "(General)  Refreshing Energy Drink",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [10],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 22,
      name: "(General)  Snuffy The Green",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["turns"],
        value: [2],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 23,
      name: "(General)  Special Duty Sorting Hat",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [-10],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 24,
      name: "(General)  Studying The Blade",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["attack"],
        value: [5],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 25,
      name: "(General)  Take Leave",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [10],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 26,
      name: "(General)  Vitamin M",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["defense"],
        value: [5],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 27,
      name: "(General)  Well-Written Rebuttal",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["rank"],
        value: [1],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 28,
      name: "(General)  Yelled At By A Dependa",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [10],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 29,
      name: "(General)  You Are The 1 Percent",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [-10],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 30,
      name: "(General) Totally Baller MRE",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [15],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 31,
      name: "(Intel)  A",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [15],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
  ]);
}

// I studied the bread knife. When you were with friends, I mastered the chef\'s knife. While you wasted your days at the gym in pursuit of vanity, I cultivated inner strength. And now that the world is on fire and the carbohydrates are at the gate you have the audacity to come to me for help?

// {
//   id: 1,
//   name: "testCard",
//   description: "ghfjkldsfhjklsdf",
//   background_img:
//     "https://c8.alamy.com/comp/EPF3BP/funny-soldier-with-knife-on-white-EPF3BP.jpg",
//   user_effect: JSON.stringify({
//     effect: ["morale", "attack", "turns"],
//     value: [10, 20, 1],
//   }),
//   enemy_effect: JSON.stringify({
//     effect: ["morale", "attack", "turns"],
//     value: [10, 20, 1],
//   }),
//   temp_effect: "false",
// },
