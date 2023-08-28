var express = require("express");
var router = express.Router();
var valorantAPI = require("unofficial-valorant-api");
const apiClient = new valorantAPI();

router.get("/", (req, res) => {
  res.json(["😀", "😳", "🙄"]);
});

router.get("/rank/:name/:tag", async (req, res) => {
  const name = req.params.name;
  const tag = req.params.tag;

  const mmr_data = await apiClient.getMMR({
    version: "v2",
    region: "ap",
    name: name,
    tag: tag,
  });
  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
  }
  res.send(
    `${mmr_data.data?.name} - ${mmr_data.data?.current_data.currenttierpatched} (${mmr_data.data?.current_data.ranking_in_tier} RR)`
  );
});

router.get("/highrank/:name/:tag", async (req, res) => {
  const name = req.params.name;
  const tag = req.params.tag;

  const mmr_data = await apiClient.getMMR({
    version: "v2",
    region: "ap",
    name: name,
    tag: tag,
  });
  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
  }
  res.send(
    `${mmr_data.data?.name} - ${
      mmr_data.data?.highest_rank.patched_tier
    } - [${mmr_data.data?.highest_rank.season.toUpperCase()}]`
  );
});

module.exports = router;
