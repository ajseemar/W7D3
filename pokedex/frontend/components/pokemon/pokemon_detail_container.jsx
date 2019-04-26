import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail_component';

const mapStateToProps = (state, ownProps) => {
  return {
  poke: state.entities.pokemon[ownProps.match.params.pokemonId],
  items: state.entities.items
}};

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);