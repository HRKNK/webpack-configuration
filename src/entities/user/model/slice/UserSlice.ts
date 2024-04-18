import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserAuth } from '../service/fetchUserAuth';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/const';

interface IUserSlice {
	isLoading: boolean;
	error?: unknown;

	_init: boolean;
	data: { token: string };
}

const initialState: IUserSlice = {
	isLoading: false, // для манипуляций над состоянием компонентов
	error: false,

	_init: false,
	data: { token: null },
};

// Создает action-ы (сам Reducer в контексте Toolkit)
export const UserSlice = createSlice({
	name: 'UserSlice', // уникальное имя
	initialState, // дэфолтное состояние стейта
	reducers: {
		setAuthData: (state, action: PayloadAction<any>) => {
			state.data.token = action.payload;
			state._init = true;
			localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			// асинхронные редюсоры (зарезервировано для AsyncThunk)
			.addCase(fetchUserAuth.pending, (state) => {
				state.isLoading = true;
				state.error = false;
				state._init = false;
			})
			.addCase(fetchUserAuth.rejected, (state, action) => {
				state.isLoading = false;
				state._init = true;
				state.error = action.payload;
			})
			.addCase(fetchUserAuth.fulfilled, (state, action: PayloadAction<any>) => {
				state.data.token = action.payload;
				state.isLoading = false;
				state.error = false;
				state._init = true;
			});
	},
});

export const { reducer: UserSliceReducer, actions: UserSliceAction } = UserSlice;
