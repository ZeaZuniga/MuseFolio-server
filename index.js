const express = require("express");
const app = express();
const songlistController = require("./controllers/songlistControllers");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", songlistController.getFullSongList);

app.get("/favorites", songlistController.getFavorites);

app.get("/search", songlistController.getSearch);

app.get("/song/:id", songlistController.getSong);

app.put("/song/:id", songlistController.updateSong);

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
