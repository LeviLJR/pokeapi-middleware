// api/server.js

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/pokemons", async (req, res) => {
  try {
    const abilitiesResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/"
    );
    const pokemonList = abilitiesResponse.data.results.map(
      (pokemon) => pokemon.name
    );

    res.json({
      message: "Here are some example Pokémon names you can use",
      examples: pokemonList,
    });
  } catch (error) {
    res.status(500).send("Error fetching Pokémon names.");
  }
});

app.get("/api/pokemons/:poke_name", async (req, res) => {
  const { poke_name } = req.params;
  try {
    const abilitiesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${poke_name}`
    );

    const abilities = abilitiesResponse.data.abilities
      .map((ability) => ability.ability.name)
      .sort();

    res.json({
      name: poke_name,
      abilities: abilities,
      base_experience: abilitiesResponse.data.base_experience,
    });
  } catch (error) {
    res.status(500).send(`Pokemon ${poke_name} not found`);
  }
});

module.exports = app;
