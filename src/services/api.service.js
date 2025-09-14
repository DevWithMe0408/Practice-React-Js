import axios from './api.customize';

export const createUser = (userData) => {
    const url_backend = '/api/v1/user';
    return axios.post(url_backend, userData);
}