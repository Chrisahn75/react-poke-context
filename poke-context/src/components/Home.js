import React, { useState,useEffect } from 'react';

export default function Home() {
  const [pokemon, setPokemon] = useState({});
  const [randomPokemon, setRandomPokemon] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((res) => setPokemon(res))
        .catch((err) => console.log(err));
  }, [randomPokemon]);

  function randomNumber() {
    setRandomPokemon(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <>
      <button onClick={randomNumber}>Click to get random Pokemon</button>
      <p>Name : {pokemon.name}</p>
      <p>Height :{pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
    </>
  );
}