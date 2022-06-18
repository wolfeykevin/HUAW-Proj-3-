import knex from "../db/index.js";
import cookieParser from "cookie-parser";

const newGame = (req, res) => {
  let playerExists = false;

  const { playerName, playerClass } = req.body;
  if (playerName === undefined || playerClass === undefined) {
    res.status(400).json({
      message: "you is dumb",
    });
    return;
  }

  const findPlayer = knex("player")
    .select("id", "name")
    .where({ name: playerName })
    .then((data) => {
      if (data.length > 0) {
        playerExists = true;
        return data;
      }
    });

  const getPlayerId = findPlayer.then((data) => {
    if (!playerExists) {
      return knex("player")
        .insert({ name: playerName, highscore: 0 })
        .returning(["id"])
        .then((newPlayerId) => {
          return newPlayerId[0].id
        });
    }
    return data[0].id;
  });

  const checkGamePlayerId = getPlayerId.then((data) => {
    console.log("checkGamePlayerId initiated with:" + data.id);
    knex("game_stats")
      .select("*")
      .where({ player_id: data })
      .then((gameState) => {
        if (gameState.length > 0) {
          console.log("old game found deleting");
          return knex("game_stats")
            .select("*")
            .where({ id: gameState[0].id })
            .del();
        } else {
          return;
        }
      });
  });

  const getPlayerClass = knex("entities")
    .select("*")
    .where({ name: playerClass })
    .then((data) => {
      return data;
    });

  Promise.all([getPlayerClass, getPlayerId]).then((newGameInstance) => {
    let playerId = newGameInstance[1];

    console.log(newGameInstance)

    knex("game_stats")
      .insert({ // TODO: Update this format
        level: 0,
        player_id: playerId,
        player: { ...newGameInstance[0][0] },
        enemy: { ...newGameInstance[0][0] },
      })
      .returning(["id"])
      .then((newGameId) => {
        var opts = {
          domain: 'localhost:3000',
          maxAge: 900000,
          httpOnly: true
        }
        res.status(200).cookie("player_game_id", newGameId, opts);
        //newBattle()
        res.status(200).json(newGameId[0]);
      });
  });
};

/*

userEffect : {
  effect: [morale, attack, turns]
  value: [10, 20, 1]
}
enemyEffect(STRING) : (JSON_STRING) {
  effect: [increases]
  value: [20]
}
*/

// TODO - Refactor with New object in mind
const continueGame = (req, res) => {
  let storedGameId = req.cookies.player_game_id;
  console.log("Continuing game from ID:", storedGameId)
  knex("game_stats as g")
    .select("g.*","player.name as player_name")
    .where('g.id', storedGameId)
    .join('player', 'g.player_id', 'player.id')
    .then((data) => {
      console.log(`Data for ${storedGameId}`, data)
      res.status(200).json(data)
    });
};

// TODO - Refactor with New object in mind
const saveGame = (req, res) => {
  let storedGameId = req.cookies.player_game_id;

  knex("game_stats")
    .select("*")
    .where({ id: storedGameId })
    .update(req.body)
    .returning("*")
    .then((data) =>
      res
        .status(200)
        .json({ message: `game saved for player ${data[0].player.id}` })
    );
};

const deleteGame = (req, res) => {
  let storedGameId = req.cookies.player_game_id[0].id;

  knex("game_stats")
    .select("*")
    .where({ id: storedGameId })
    .del()
    .then((data) => {
      res.clearCookie("player_game_id");
      res.status(200).json({ message: "game has been deleted" });
    });
};

// TODO - Refactor with New object in mind
const requestNewBattle = (req, res) => {
  let storedGameId = req.cookies.player_game_id[0].id;
  const { newEnemy_id, newEnemy_morale } = newBattle(1);
  knex("game_stats").select("*").where({ id: storedGameId }).insert({
    enemy_id: 1,
    enemy_morale: 500,
  });
};

// TODO - Refactor with New object in mind
const newBattle = (num) => {
  knex("entities")
    .select("*")
    .orderByRaw("RANDOM ()")
    .limit(num)
    .then((data) => {
      return JSON.stringify({
        newEnemy_id: data[0].id,
        newEnemy_morale: data[0].morale,
      });
    });
};

export { newGame, continueGame, saveGame, deleteGame, requestNewBattle };

/*
game State
{
  id: 1,
  level: 1
  player_id : 1,
  cara: {
    char_id: {?}
    morale : 100
    attack: 2
    defence: 1
  },
  enemy: {
    id : 1,
    morale : 100
    attack: 1
    defence: 1
  }
}

current
id | player_morale | enemy_morale | level | player_id | character_id | enemy_id
----+---------------+--------------+-------+-----------+--------------+----------
  1 |            50 |           30 |     5 |       111 |          222 |      333

*/
