import axios from 'axios';

const baseUrl = axios.create({
    baseURL: 'http://localhost:1110/api/',
    timeout: 5000,
})

export default baseUrl;