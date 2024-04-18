import React from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { UserSliceAction } from './model/slice/UserSlice';
import { fetchUserAuth } from './model/service/fetchUserAuth';

const User = (): JSX.Element => {
	// Отправитель
	const dispatch = useAppDispatch();
	// Селектор данных-(state) менеджера
	const { data, isLoading, error, _init } = useAppSelector((state) => state.UserSliceReducer);

	// Обработчик
	const onClickHandler = (): void => {
		// dispatch(counter(1));
		dispatch(
			fetchUserAuth({
				login: 'test',
				password: 'test',
			})
		);
	};

	return (
		<div>
			<h2>{data.token}</h2>
			<h2>{_init.toString()}</h2>
			<button type="button" onClick={onClickHandler}>
				Click!
			</button>
		</div>
	);
};

export default User;
