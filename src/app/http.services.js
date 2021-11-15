//interceptor network (not used cause blocker in unitest)

/* eslint-disable no-param-reassign */
import Axios from 'axios';
import { URL_API } from '../configs/keys';

const httpService = Axios.create({
  baseURL: URL_API,
  timeout: 20000,
  headers: {
    'content-type': 'application/json'
  },
  slashId: null,
});

httpService.interceptors.request.use(
  // custom handle config
  config => {
    if(config.slashId) {
      config.url = `${config.url}/${config.slashId}`
    }

    return config;
  },
  error => Promise.reject(error)
);

httpService.interceptors.response.use(
  // custom handle response success
  async res => res,
  // custom handle response error
  async error => Promise.reject(error)
);

export default httpService;
