// Import modules
const express = require("express");
const axios = require("axios");
//Enabling requests and responses
const app = express();
const PORT = 3000;

const cors = require("cors");
app.use(cors());

// Get a list of Pokémon's names
app.get("/api/pokemons", async (req, res) => {
  try {
    // Fetch Pokémon names from the first page
    const abilitiesResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/"
    );
    const pokemonList = abilitiesResponse.data.results.map(
      (pokemon) => pokemon.name
    );

    // Display a few examples
    res.json({
      message: "Here are some example Pokémon names you can use",
      examples: pokemonList, // Limita a 10 exemplos
    });
  } catch (error) {
    res.status(500).send("Error fetching Pokémon names.");
  }
});

// Route to fetch Pokémon abilities
app.get("/api/pokemons/:poke_name", async (req, res) => {
  const { poke_name } = req.params;

  try {
    // Fetch Pokémon data
    const abilitiesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${poke_name}`
    );
    // Extract and sort abilities

    const abilities = abilitiesResponse.data.abilities
      .map((ability) => ability.ability.name)
      .sort();
    res.json({
      name: poke_name,
      abilities: abilities,
      base_experience: abilitiesResponse.data.base_experience,
    });
  } catch (error) {
    res.status(500).send("Pokemon ${poke_name} not found");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/pokemons/`);
});
