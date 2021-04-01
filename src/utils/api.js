import axios from 'axios';

import {BASE_API_URL} from './constants';

const Api = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

export default Api;