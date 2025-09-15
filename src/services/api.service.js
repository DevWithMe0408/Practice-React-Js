import axios from './api.customize';

export const createUserApi = (userData) => {
    const url_backend = '/api/v1/user';
    return axios.post(url_backend, userData);
}

export const getAllUsersApi = () => {
    const url_backend = '/api/v1/user';
    return axios.get(url_backend)
}