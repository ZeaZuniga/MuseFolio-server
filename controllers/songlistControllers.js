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
    .where({ favorite: "1" })
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
    .where({ id: req.params.id })
    .then((song) => {
      res.json(song);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .send("Sorry, there was an error getting this song. Try again later.");
    });
};

const updateSong = (req, res) => {
  let song = req.body;
  console.log("Incoming song edit:", song);

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
      console.log(error);
      res
        .status(400)
        .send(
          "There was an error updating your song, check the format of the information sent."
        );
    });
};

module.exports = { getFullSongList, getFavorites, getSong, updateSong };
