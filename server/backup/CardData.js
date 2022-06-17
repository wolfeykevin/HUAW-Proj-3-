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
      name: "DFAC_Burn_Water",
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
      name: "DFAC_No_PT_Gear",
      description: '"You need to go change."',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["turns"],
        value: [-2],
      }),
      temp_effect: "false",
    },
    {
      id: 3,
      name: "DFAC_Ridiculously_Sharp_Knife",
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
      name: "DFAC_Turducken",
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
      name: "DFAC_Undercooked_Chicken",
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
      name: "Finance_Ignore_Calls_Emails",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["turns"],
        value: [-2],
      }),
      temp_effect: "false",
    },
    {
      id: 7,
      name: "Finance_Mess_Up_Member_Pay",
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
      name: "Finance_Misfiled_Travel_Voucher",
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
      name: "Finance_Overpay",
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
      name: "Finance_Schrodingers_Office_Hours",
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
      name: "General_Antidepressants",
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
      name: "General_BX_Haircut",
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
      name: "General_Commanders_Call",
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
      name: "General_Dirtbag_Airman",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["turns"],
        value: [-2],
      }),
      temp_effect: "false",
    },
    {
      id: 15,
      name: "General_Healthy_Coping_Mechanisms",
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
      name: "General_Pay_With_GTC",
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
      name: "General_Pull_341",
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
      name: "General_Receive_Article_15",
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
      name: "General_Reenlist",
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
      name: "General_Referred_To_Mental_Health",
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
      name: "General_Refreshing_Energy_Drink",
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
      name: "General_Snuffy_The_Green",
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
      name: "General_Special_Duty_Sorting_Hat",
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
      name: "General_Studying_The_Blade",
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
      name: "General_Take_Leave",
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
      name: "General_Vitamin_M",
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
      name: "General_Well-Written_Rebuttal",
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
      name: "General_Yelled_At_By_A_Dependa",
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
      name: "General_You_Are_The_1_Percent",
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
      name: "General_Totally_Baller_MRE",
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
      name: "Intel_Avoid_The_Sun",
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
      id: 32,
      name: "Intel_Cuddle_Waifu_Bodypillow",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [12],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 33,
      name: "Intel_I_Talked_To_A_Girl!",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [5],
      }),
      temp_effect: "false",
    },
    {
      id: 34,
      name: "Intel_Send_Opponent_To_Shadow_Zone",
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
      id: 35,
      name: "Intel_World_Of_Warcraft_Raid_Wipe",
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
      id: 36,
      name: "SecFo_CAC_Check",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-5],
      }),
      temp_effect: "false",
    },
    {
      id: 37,
      name: "SecFo_Dorm_Raid",
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
      id: 38,
      name: "SecFo_Expired_Plates",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-25],
      }),
      temp_effect: "false",
    },
    {
      id: 39,
      name: "SecFo_Forced_Augmentee",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [12],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 40,
      name: "SecFo_Vehicle_Search",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["turns"],
        value: [-2],
      }),
      temp_effect: "false",
    },
    {
      id: 41,
      name: "SpecOps_AOR_Beard",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-9001],
      }),
      temp_effect: "false",
    },
    {
      id: 42,
      name: "SpecOps_Decepticon_Attack",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["turns"],
        value: [-2],
      }),
      enemy_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      temp_effect: "false",
    },
    {
      id: 43,
      name: "SpecOps_Overwhelming_Firepower",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: [],
        value: [],
      }),
      enemy_effect: JSON.stringify({
        effect: ["morale"],
        value: [-20],
      }),
      temp_effect: "false",
    },
    {
      id: 44,
      name: "SpecOps_This_Isnt_Even_My_Final_Form",
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
      id: 45,
      name: "SpecOps_Write_Tell-All_Book",
      description: '""',
      background_img: "",
      user_effect: JSON.stringify({
        effect: ["morale"],
        value: [7],
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
