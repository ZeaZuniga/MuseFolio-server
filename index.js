const express = require("express");
const app = express();
const songlistController = require("./controllers/songlistControllers");

app.use(express.static("public"));

app.get("/", songlistController.getFullSongList);

app.get("/favorites", songlistController.getFavorites);

app.listen(8080, () => {
  console.log("You are now listening to port 8080 fm");
});
