import { message } from "antd";
import httpService from "../../app/http.services";
import { loading } from "../../store/actions/global.action";

export const getListPokemon = (params) => {
  return async (dispatch) => {
    dispatch(loading(true));
    return httpService.get('pokemon', { params }).then(
      res => res.data
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
    return httpService.get('pokemon', { slashId: id }).then(
      res => res.data
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