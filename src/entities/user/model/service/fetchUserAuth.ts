import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/shared/API/instance';
import { UserSliceAction } from '../slice/UserSlice';

/** ActionCreators */
// механизм асинхронного запроса данных
export const fetchUserAuth = createAsyncThunk(
	'entities/fetchUserAuth', // название
	async (options: any, thunkAPI) => {
		const { login, password } = options;
		console.log('Sending a request');
		try {
			const body = JSON.stringify({
				login,
				password,
			});
			const response = await instance.post<any>('/login', body);

			if (!response.data) throw new Error();

			// thunkAPI.dispatch(UserSliceAction.setAuthData(response.data));

			return response.data;
		} catch (error) {
			// обработка ошибок в AsyncThunk
			console.log(error);
			return thunkAPI.rejectWithValue('Ошибка загрузки данных');
		}
	}
);
