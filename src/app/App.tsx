import { Link, Outlet } from 'react-router-dom';
import './style/style.css';
import style from './style/style.module.scss';

import Logo_jpg from '@/shared/assets/cloud-fog.jpg';
import Logo_png from '@/shared/assets/cloud-fog.jpg';
import Logo_svg from '@/shared/assets/cloud-fog.svg';
import Component from '@/components/Component';
import User from '@/entities/user/User';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { useEffect } from 'react';
import { initUserAuth } from '@/entities/user/model/service/InitUserAuth';

const App = () => {
	const { _init } = useAppSelector((state) => state.UserSliceReducer);
	const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	void dispatch(initUserAuth());
	// }, [dispatch]);

	// if (!_init) {
	// 	return (
	// 		<div className="wrapper-main">
	// 			<div>Loading!</div>
	// 		</div>
	// 	);
	// }

	return (
		<div className="wrapper-main">
			<p className={style.color}>Main</p>
			<div className="navigation">
				<p>Navigation</p>
				<Link to={'/about'}>About</Link>
				<Link to={'/store'}>Store</Link>
				{/* Вставка children навигации */}
				<Outlet />
			</div>
			<div className="logos">
				<p>Logo</p>
				<img width={50} height={50} src={Logo_png} alt="" />
				<img width={50} height={50} src={Logo_jpg} alt="" />
				<Logo_svg style={{ color: 'red' }} width={50} height={50} />
			</div>
			<div>
				<p>Components</p>
				<Component />
				<User />
			</div>
		</div>
	);
};

export default App;
