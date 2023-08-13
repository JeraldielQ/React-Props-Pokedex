import React from 'react';
// import './App.css';
import { pokemons } from './pokemons';
import Pokedex from './Pokedex';

function App() {
  return (
    <Pokedex pokemons={pokemons}/>
 
  );
}

export default App;
