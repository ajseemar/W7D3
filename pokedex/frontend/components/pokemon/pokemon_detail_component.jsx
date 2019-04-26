import React from 'react';
import {Link, Route} from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  renderItemLink(item) {
    return (
      //  <Link to={`pokemon/${this.props.poke.id}/item/${item.id}`}>
        <img src={item.image_url}></img> 
      //{/* </Link> */}
    )
  }

  renderPoke () {
    return (
      <>
        <img src={`${this.props.poke.image_url}`} alt="Don't worry about it" />
        <h1>{this.props.poke.name}</h1>
        <h3>Type: {this.props.poke.poke_type}</h3>
        <h3>Attack: {this.props.poke.attack}</h3>
        <h3>Defense: {this.props.poke.defense}</h3>
        <h3>Moves: {this.props.poke.moves.join(', ')}</h3>
        <h3>Items: </h3>
        <div style= {{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        {Object.values(this.props.items).map((item) => this.renderItemLink(item))}
        </div>
        <Route path='/pokemon/:pokemonId/item/:itemId' component={ItemDetailContainer} />
      </>
    )
  }

  render () {
    if (!this.props.poke) return null;
    return (
      this.renderPoke()
    )
  }
}
export default PokemonDetail;