const express = require("express");
const app = express();
const songlistController = require("./controllers/songlistControllers");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", songlistController.getFullSongList);

app.get("/favorites", songlistController.getFavorites);

app.get("/search", songlistController.getSearch);

app.get("/:id", songlistController.getSong);

app.put("/:id", songlistController.updateSong);

app.listen(8080, () => {
  console.log("You are now listening to port 8080 fm");
});
