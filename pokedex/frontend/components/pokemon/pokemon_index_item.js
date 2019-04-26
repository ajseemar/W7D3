import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({poke}) => (
      <>
        <li key={poke.name}>
        <Link to={`/pokemon/${poke.id}`}>{poke.name}
          <div key={poke.id}>
            <img src={poke.image_url} alt={poke.name} />
          </div>
        </Link>
        </li>
      </>
);

export default PokemonIndexItem;