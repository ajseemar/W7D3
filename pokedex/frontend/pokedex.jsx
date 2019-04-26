import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import {HashRouter,Route} from 'react-router-dom';
import Root from './components/root';
import { requestPokemon } from './actions/pokemon_actions';
import { fetchPokemon } from './util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.requestPokemon = requestPokemon;
  window.fetchPokemon = fetchPokemon;
  const store = createStore();
  window.dispatch = store.dispatch
  const root = document.getElementById("root");
  ReactDOM.render(<Root store = {store} />, root);
});
