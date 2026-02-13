const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>URL Viewer</h1>
    <form action="/fetch">
      <input name="url" placeholder="https://example.com" style="width:300px;">
      <button>View</button>
    </form>
  `);
});

app.get("/fetch", async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url);
    const text = await response.text();
    res.send(text);
  } catch (err) {
    res.send("Error fetching site.");
  }
});

app.listen(PORT, () => console.log("Running..."));
