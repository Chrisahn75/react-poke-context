import React, { useState,useEffect } from 'react';

export default function Home() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p>Name : {pokemon.name}</p>
      <p>Height :{pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
    </>
  );
  }