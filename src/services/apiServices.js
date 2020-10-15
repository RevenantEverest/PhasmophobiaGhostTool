import axios from 'axios';
const services = {};

services.getBibleVerse = (data) => {
    return axios.get(`https://bible-api.com/${data}`);
};

export default services;