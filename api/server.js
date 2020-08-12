const express = require("express");
const server = express();
const db = require("../dbConfig.js");

server.use(express.json());

server.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then((cars) => res.status(200).json({ cars }).end())
    .catch((err) => res.status(500).json({ err }).end());
});

server.post("/", (req, res) => {
  const car = req.body;
  db("cars")
    .insert(car)
    .returning("id")
    .then((idn) => res.status(201).json({ inserted: idn }).end())
    .catch((err) => res.status(500).json({ err }));
});

module.exports = server;
