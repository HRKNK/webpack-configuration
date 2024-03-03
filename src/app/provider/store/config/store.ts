import { ComponentSliceReducer } from '@/components/model/slice/ComponentSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// объединение всех Reducer (исполнителей) ИЛИ обычный объект без combineReducers (просто объявление Reducer-а)
const rootReducer = combineReducers({
	ComponentSliceReducer,
});

// Конфигурация Redux-хранилища
export const setupStore = () => {
	return configureStore({
		reducer: rootReducer, // корневой Reducer
	});
};

// Типизация хранилища (основные типы)
export type RootState = ReturnType<typeof rootReducer>; // тип состояния
export type AppStore = ReturnType<typeof setupStore>; // тип хранилища
export type AppDispatch = AppStore['dispatch']; // тип dispatch
