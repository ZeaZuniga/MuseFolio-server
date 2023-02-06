const express = require("express");
const app = express();
const songlistController = require("./controllers/songlistControllers");

app.use(express.static("public"));
app.use(express.json());

app.get("/", songlistController.getFullSongList);

app.get("/favorites", songlistController.getFavorites);

app.get("/:id", songlistController.getSong);

app.put("/:id", songlistController.updateSong);

app.listen(8080, () => {
  console.log("You are now listening to port 8080 fm");
});
