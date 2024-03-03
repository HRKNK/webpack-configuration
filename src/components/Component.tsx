import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { ComponentSliceAction } from './model/slice/ComponentSlice';

const Component = (): JSX.Element => {
	// Отправитель
	const dispatch = useAppDispatch();
	// Селектор данных-(state) менеджера
	const { count, data, isLoading, error } = useAppSelector((state) => state.ComponentSliceReducer);
	// Синхронный Reducer менеджера
	const { counter } = ComponentSliceAction;

	// Обработчик
	const onClickHandler = (): void => {
		dispatch(counter(1));
	};

	return (
		<div>
			<h2>{count}</h2>
			<button type="button" onClick={onClickHandler}>
				Click!
			</button>
		</div>
	);
};

export default Component;
