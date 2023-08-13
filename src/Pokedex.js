import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'; 

const Pokedex = ({ pokemons }) => {
    return (
        <div className="pokedex-container">
            <h1 className="pokedex-title">PokeDEX</h1>
            <div>
                {pokemons.map((pokemon, index) => (
                    <div className="pokemon-card" key={index}>
                        <Pokecard
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            base_experience={pokemon.base_experience}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pokedex;
