const knex = require("knex")(require("../knexfile"));

const getFullSongList = (_req, res) => {
  knex
    .select("*")
    .from("songlist")
    .then((songs) => {
      res.json(songs);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send("Error retrieving entire song list");
    });
};

const getFavorites = (req, res) => {
  knex
    .select("*")
    .from("songlist")
    .where("songlist.favorite", "1")
    .then((songs) => {
      res.json(songs);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(403)
        .send(
          "Sorry, there was an error getting your favorite songs. Try again later."
        );
    });
};

module.exports = { getFullSongList, getFavorites };
