const express = require('express');
const emojis = require('./emojis');
const valo = require("./valo");
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/valo', valo);

module.exports = router;
