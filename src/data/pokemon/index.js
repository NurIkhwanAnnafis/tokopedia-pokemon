import httpService from "../../app/http.services";

export const getListPokemon = (params) => {
  return httpService.get('pokemon', { params }).then(
    res => res.data
  ).catch(
    error => error
  ).finally(() => {
    //
  });
}

export const getDetailPokemon = (id) => {
  return httpService.get('pokemon', { slashId: id }).then(
    res => res.data
  ).catch(
    error => error
  ).finally(() => {
    //
  });
}