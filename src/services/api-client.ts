import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1c31b80507b54a218897af01d59f8bf2'
    }
})

