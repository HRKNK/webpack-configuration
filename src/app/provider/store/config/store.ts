import { ComponentSliceReducer } from '@/components/model/slice/ComponentSlice';
import { ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './stateSchema';

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

// // Конфигурация Redux-хранилища
// export const createReduxStore = () => {
// 	// объединение всех Reducer (исполнителей) ИЛИ обычный объект без combineReducers (просто объявление Reducer-а)
// 	const rootReducer: ReducersMapObject<StateSchema> = {
// 		component: ComponentSliceReducer,
// 	};

// 	const reducerManager = createReducerManager(rootReducer);

// 	const store = configureStore<StateSchema>({
// 		reducer: rootReducer, // корневой Reducer
// 	});

// 	// @ts-ignore
// 	store.reducerManager = reducerManager;

// 	return store;
// };

// Типизация хранилища (основные типы)
export type RootState = ReturnType<typeof rootReducer>; // тип состояния
export type AppStore = ReturnType<typeof setupStore>; // тип хранилища
export type AppDispatch = AppStore['dispatch']; // тип dispatch
