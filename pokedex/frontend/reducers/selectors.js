const selectAllPokemon = (state) => {
  return Object.values(state.entities);
};

export default selectAllPokemon;