import axios from "axios";
import { URL_API } from "../../configs/keys";

export const fetchListPokemon = async (params, url = URL_API) => {
  return new Promise((resolve, reject) => {
    axios({
        method: 'GET',
        url: `${url}pokemon`,
        params
    }).then(({ status, data }) => {
        if (status === 200) {
            resolve(data);
        } else {
            reject(new Error('error'));
        }
    });
  });
}

export const fetchDetailPokemon = async (id, url = URL_API) => {
  return new Promise((resolve, reject) => {
    axios({
        method: 'GET',
        url: `${url}pokemon/${id}`,
    }).then(({ status, data }) => {
        if (status === 200) {
            resolve(data);
        } else {
            reject(new Error('error'));
        }
    });
  });
}