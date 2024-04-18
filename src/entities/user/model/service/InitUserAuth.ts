import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/shared/API/instance';
import { UserSliceAction } from '../slice/UserSlice';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/const';

/** ActionCreators */
// механизм асинхронного запроса данных
export const initUserAuth = createAsyncThunk(
	'entities/initUserAuth', // название
	async (_, thunkAPI) => {
		console.log('Sending a request');
		try {
			const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
			if (!token) throw new Error();

			const headers = {
				'auth-token': `Bearer ${token}`,
			};
			const response = await instance.post<any>('/check', { headers });
			thunkAPI.dispatch(UserSliceAction.setAuthData(response.data));

			return response.data;
		} catch (error) {
			// обработка ошибок в AsyncThunk
			console.log(error);
			return thunkAPI.rejectWithValue('Ошибка загрузки данных');
		}
	}
);
