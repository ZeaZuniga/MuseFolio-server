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
      res.status(400).send("Error retrieving entire song list");
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
        .status(400)
        .send(
          "Sorry, there was an error getting your favorite songs. Try again later."
        );
    });
};

const getSong = (req, res) => {
  knex
    .select("*")
    .from("songlist")
    .where("songlist.id", req.params.id)
    .then((song) => {
      res.json(song);
    })
    .catch((error) => {
      res.stat;
    });
};

module.exports = { getFullSongList, getFavorites, getSong };
