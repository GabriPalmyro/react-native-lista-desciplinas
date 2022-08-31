import axios from 'axios';

export const SERVIDOR = 'http://192.168.15.5:4200';

const api = axios.create({
    baseUrl: SERVIDOR,
})

export default api;