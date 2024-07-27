import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);

      //   setDataFromApi(data);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //Search functionality

  const searchData = pokemon.filter((currData) =>
    currData.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{`Error: ${error.message}`}</p>;
  }

  if (!loading) {
    return (
      <>
        <section className='container'>
          <header>
            <h1>Lets catch Pokémon</h1>
          </header>
          <div className='pokemonSearch'>
            <input
              type='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Pokemon ... '
            />
          </div>
          <div className='cardDiv'>
            <ul className='cardUl'>
              {searchData.map((currPokemon) => {
                return <PokemonCard key={currPokemon.id} data={currPokemon} />;
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
};
