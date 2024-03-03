import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/shared/API/instance';

/** ActionCreators */
// механизм асинхронного запроса данных
export const fetchComponent = createAsyncThunk(
	'components/fetchComponent', // название
	async (options: any, thunkAPI) => {
		const { action, params } = options;
		console.log('Sending a request');
		try {
			const body = JSON.stringify({
				action,
				params,
			});
			const response = await instance.post<any>(undefined, body);

			if (!response.data) throw new Error();

			return response.data.result;
		} catch (error) {
			// обработка ошибок в AsyncThunk
			console.log(error);
			return thunkAPI.rejectWithValue('Ошибка загрузки данных');
		}
	}
);
