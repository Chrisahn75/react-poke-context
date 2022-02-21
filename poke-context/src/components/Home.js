import React, { useState,useEffect } from 'react';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .then(console.log(pokemon))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then((res) => res.json())
        .then((res) => setPokemon(res))
        .then(console.log(pokemon))
        .catch((err) => console.log(err));
  }, [randomNumber]);

  function RandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <>
      <button onClick={RandomNumber}>Click to get random Pokemon</button>
      <p>Name : {pokemon.name}</p>
      <p>Height :{pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
    </>
  );
}