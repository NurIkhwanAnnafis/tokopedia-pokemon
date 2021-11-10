import { LOADING } from "../types/global.type";

export function loading(flag){
  return dispatch => {
      dispatch({ type: LOADING, payload: flag });
  }
}