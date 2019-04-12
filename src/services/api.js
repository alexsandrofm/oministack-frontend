import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oministack-backend-alexsandro.herokuapp.com',
});

export default api;