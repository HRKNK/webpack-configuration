import React from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { UserSliceAction } from './model/slice/UserSlice';
import { fetchUserAuth } from './model/service/fetchUserAuth';
import { fetchUserLogout } from './model/service/fetchUserLogout';

const User = (): JSX.Element => {
	// Отправитель
	const dispatch = useAppDispatch();
	// Селектор данных-(state) менеджера
	const { data, isLoading, error, _init } = useAppSelector((state) => state.UserSliceReducer);

	// Обработчик
	const onClickLogin = (): void => {
		// dispatch(counter(1));
		dispatch(
			fetchUserAuth({
				login: 'test',
				password: 'test',
			})
		);
	};
	const onClickLogout = (): void => {
		dispatch(fetchUserLogout());
	};

	return (
		<div>
			<h2>User? :{data.token}</h2>
			<h2>{_init.toString()}</h2>
			<button type="button" onClick={onClickLogin}>
				Login!
			</button>
			<button type="button" onClick={onClickLogout}>
				Logout!
			</button>
		</div>
	);
};

export default User;
