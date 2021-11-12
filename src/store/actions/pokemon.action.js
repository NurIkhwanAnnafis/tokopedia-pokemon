import { CATCH, RELEASE } from "../types/pokemon.type";

export function catchPokemon(data){
  return dispatch => {
    dispatch({ type: CATCH, payload: data });
  }
}

export function releasePokemon(data){
  return dispatch => {
    dispatch({ type: RELEASE, payload: data });
  }
}