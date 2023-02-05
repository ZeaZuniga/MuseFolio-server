const songsData = require("./seed_data/songlist_data");

exports.seed = function (knex) {
  return knex("songList")
    .del()
    .then(function () {
      return knex("songList").insert(songsData);
    });
};
