import React from 'react';

const PokemonIndex = (props) => (
    <ul>
      {this.props.pokemon.map(poke => (
        <li>{poke.name}</li>
        <li><img src={poke.image_url} alt={poke.name}></img></li>
      )
      )}
    </ul>
)