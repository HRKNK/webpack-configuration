import axios from 'axios';

const API_URL = 'http://localhost:3003';

const headers = {
	'Content-Type': 'application/json; charset=utf-8',
};

export const instance = axios.create({ baseURL: API_URL, headers });
