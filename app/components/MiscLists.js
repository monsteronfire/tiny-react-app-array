import React from 'react';

function PokemonList(props) {
  const pokemonsters = ['Pikachu', 'Bulbasaur', 'Squirtle', 'Charmander', 'Eevie', 'Meowth', 'Jigglypuff'];

  return (
    <ul className='pokemon-list'>
      {pokemonster.map((pokemon) => {
        <li key={pokemon}>{pokemon}</li>
      })}
    </ul>
  )
}
