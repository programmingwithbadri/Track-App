import axios from 'axios';

export default axios.create({
    baseURL: 'https://track-server-backend.herokuapp.com'
})