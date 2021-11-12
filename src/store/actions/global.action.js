import { LOADING } from "../types/global.type";

export function loading(flag, typeLoading = "global"){
  return dispatch => {
      dispatch({ type: LOADING, payload: { flag, typeLoading} });
  }
}