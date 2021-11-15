import { message } from "antd";
import { fetchDetailPokemon, fetchListPokemon } from "../../data/pokemon";
import { loading } from "../../store/actions/global.action";

export const getListPokemon = (params) => {
  return async (dispatch) => {
    dispatch(loading(true));
    return fetchListPokemon(params).then(
      res => res
    ).catch(
      error => {
        message.error('Fail to fetch list pokemon');

        return error;
      }
    ).finally(() => {
      dispatch(loading(false));
    });
  }
}

export const getDetailPokemon = (id) => {
  return async (dispatch) => {
    dispatch(loading(true));
    return fetchDetailPokemon(id).then(
      res => res
    ).catch(
      error => {
        message.error('Fail to get detail pokemon');

        return error;
      }
    ).finally(() => {
      dispatch(loading(false));
    });
  }
}