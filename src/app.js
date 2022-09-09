import express from "express";
import knex from "knex";
import knexfile from "../knexfile.js";

const app = express();
const port = 8080;

const myknex = knex(knexfile.development);

app.get("/", (req, res) => {
  res.send("Application is ONLINE");
});

app.get("/pets", (req, res) => {
  myknex("pet")
    .select("*")
    .then((pets) => {
      var petNames = pets.map((pet) => pet.name);
      res.json(petNames);
    });
});

app.listen(port, () =>
  console.log(`express/knex server listening at port: ${port}`)
);
