import axios from 'axios';

const API = axios.create ({
    baseURL: 'http://localhost:4200/api'
});

export default API;