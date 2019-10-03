import axios from 'axios';

const api = axios.create({
    baseURL: "your_api_url_here",
});

export default api;