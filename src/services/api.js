import axios from 'axios';

const api = axios.create({
    baseURL: "http://petroapi.ddns.net:3000",
});

export default api;