const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/votes/:universeId', async (req, res) => {
  try {
    const r = await fetch(`https://games.roblox.com/v1/games/votes?universeIds=${req.params.universeId}`);
    const data = await r.json();
    res.json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(process.env.PORT || 3000);
