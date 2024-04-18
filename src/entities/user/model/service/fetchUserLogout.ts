import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/shared/API/instance';
import { UserSliceAction } from '../slice/UserSlice';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/const';

/** ActionCreators */
// механизм асинхронного запроса данных
export const fetchUserLogout = createAsyncThunk(
	'entities/fetchUserLogout', // название
	async (_, thunkAPI) => {
		console.log('Sending a request: Logout');
		try {
			const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
			if (!token) throw new Error();

			const headers = {
				'auth-token': `Bearer ${token}`,
			};
			const response = await instance.post<any>('/logout', {}, { headers });

			if (response.statusText === 'OK') thunkAPI.dispatch(UserSliceAction.logout());

			return response.data;
		} catch (error) {
			// обработка ошибок в AsyncThunk
			console.log(error);
			return thunkAPI.rejectWithValue('Ошибка загрузки данных');
		}
	}
);
