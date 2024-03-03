import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchComponent } from '../service/fetchComponent';

interface ProductState {
	isLoading: boolean;
	error?: unknown;

	data: any[];
	count: number;
}

const initialState: ProductState = {
	isLoading: false, // для манипуляций над состоянием компонентов
	error: false,

	data: [],
	count: 0,
};

// Создает action-ы (сам Reducer в контексте Toolkit)
export const ComponentSlice = createSlice({
	name: 'ComponentSlice', // уникальное имя
	initialState, // дэфолтное состояние стейта
	reducers: {
		counter(state, action: PayloadAction<number>) {
			state.count += action.payload;
		},
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		// асинхронные редюсоры (зарезервировано для AsyncThunk)
	// 		.addCase(fetchComponent.pending, (state) => {
	// 			state.isLoading = true;
	// 			state.error = false;
	// 		})
	// 		.addCase(fetchComponent.rejected, (state, action) => {
	// 			state.isLoading = false;
	// 			state.error = action.payload;
	// 		})
	// 		.addCase(fetchComponent.fulfilled, (state, action: PayloadAction<any>) => {
	// 			state.isLoading = false;
	// 			state.data = action.payload;
	// 			state.error = false;
	// 		});
	// },
});

export const { reducer: ComponentSliceReducer, actions: ComponentSliceAction } = ComponentSlice;
