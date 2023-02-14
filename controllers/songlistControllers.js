const knex = require("knex")(require("../knexfile"));

const checkUser = (req, res) => {
  knex
    .select("id")
    .from("users")
    .where("users.user_name", req.body.username)
    .where("users.user_password", req.body.password)
    .then((details) => {
      res.send(details);
    })
    .catch((error) => {
      res.status(401).send("Error logging in.");
    });
};

const getFullSongList = (req, res) => {
  knex
    .select("*")
    .from("songlist")
    .where("songlist.user_id", req.query.user)
    .then((songs) => {
      res.json(songs);
    })
    .catch((error) => {
      res.status(400).send("Error retrieving entire song list");
    });
};

const getFavorites = (req, res) => {
  knex
    .select("*")
    .from("songlist")
    .where("songlist.user_id", req.query.user)
    .where({ favorite: "1" })
    .then((songs) => {
      res.json(songs);
    })
    .catch((error) => {
      res
        .status(400)
        .send(
          "Sorry, there was an error getting your favorite songs. Try again later."
        );
    });
};

const getSearch = (req, res) => {
  knex
    .select("*")
    .from("songlist")
    .where("songlist.user_id", req.query.user)
    .where("songlist.title", "like", `%${req.query.search}%`)
    .orWhere("songlist.composer", "like", `%${req.query.search}%`)
    .then((songs) => {
      res.json(songs);
    })
    .catch((error) => {
      res
        .status(400)
        .send("Sorry, there was an error with your search request. Try again.");
    });
};

const getSong = (req, res) => {
  knex
    .select("*")
    .from("songlist")
    .where("songlist.user_id", req.query.user)
    .where({ id: req.params.id })
    .then((song) => {
      res.json(song);
    })
    .catch((error) => {
      res
        .status(400)
        .send("Sorry, there was an error getting this song. Try again later.");
    });
};

const updateSong = (req, res) => {
  let song = req.body;

  knex
    .select("*")
    .from("songlist")
    .where({ id: req.params.id })
    .update({
      id: song.id,
      title: song.title,
      composer: song.composer,
      url_path: song.url_path,
      tags: song.tags,
      favorite: song.favorite,
    })
    .then((data) => {
      res.status(200).send("We received your put request! Let's party! :D");
    })
    .catch((error) => {
      res
        .status(400)
        .send(
          "There was an error updating your song, check the format of the information sent."
        );
    });
};

module.exports = {
  checkUser,
  getFullSongList,
  getFavorites,
  getSearch,
  getSong,
  updateSong,
};
