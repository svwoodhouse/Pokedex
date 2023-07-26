// server/index.js
const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const MONGOURL = process.env.MONGOURL

const app = express();
mongoose.connect(MONGOURL);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
