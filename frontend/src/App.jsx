// Import React and other dependencies
import { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // States
  const [pokeName, setPokeName] = useState("");
  const [searchedPokeName, setSearchedPokeName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [baseExperience, setBaseExperience] = useState(null);
  const [error, setError] = useState("");

  // Function to handle the search
  const fetchPokemonData = async () => {
    setError("");
    setAbilities([]);

    if (!pokeName.trim()) {
      setError("Please enter a Pokémon name.");
      return;
    }

    const formattedPokeName = pokeName.trim().toLowerCase();
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${formattedPokeName}`
      );

      console.log(response);

      const abilitiesList = response.data.abilities.map(
        (ability) => ability.ability.name
      );
      setAbilities(abilitiesList);
      setBaseExperience(response.data.base_experience);
      setSearchedPokeName(formattedPokeName);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Pokémon not found. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4 font-mono">
      {/* Main container */}
      <div className="bg-gray-700 p-8 pt-3 rounded-xl shadow-2xl w-full max-w-lg border-2 border-gray-600 relative">
        <header className="top-3 left-5 flex justify-between">
          {/* Polka dots on top (macOS style) */}
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-md border-2 border-red-700"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-md border-2 border-yellow-700"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-md border-2 border-green-700"></div>
          </div>
          {/* Tittle */}
          <div className="flex-grow text-center">
            <h1 className="text-1xl left-5 font-extrabold text-white tracking-wide">
              Pokémon Abilities Finder
            </h1>
          </div>
          <div className="flex space-x-4"></div>
        </header>

        {/* Search input */}
        <div className="mt-8 mb-6">
          <input
            type="text"
            placeholder="Enter Pokémon name"
            value={pokeName}
            onChange={(e) => setPokeName(e.target.value)}
            className="w-full p-3 bg-gray-800 text-yellow-300 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
          />
        </div>

        {/* Search button */}
        <div className="flex justify-center">
          <button
            onClick={fetchPokemonData}
            className="bg-red-500 text-white py-1 px-5 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Search
          </button>
        </div>

        {/* Error message */}
        {error && <p className="mt-6 text-red-400 text-center">{error}</p>}

        {abilities.length > 0 && (
          <div className="mt-6">
            <div className="my-8 border-t border-gray-500"></div>
            <h2 className="text-1xl font-semibold text-center text-white mb-4">
              Abilities for:{" "}
              <span className="text-yellow-300">{searchedPokeName}</span>
            </h2>

            <ul className="list-disc pl-10 space-y-2">
              {abilities.map((ability, index) => (
                <li key={index} className="text-yellow-300">
                  <span className="text-white">{ability}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-center text-lg font-semibold text-green-400">
              Base Experience: {baseExperience}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
