import axios from 'axios';

const API_URL = 'any';

const headers = {
	'Content-Type': 'application/json; charset=utf-8',
};

export const instance = axios.create({ baseURL: API_URL, headers });
