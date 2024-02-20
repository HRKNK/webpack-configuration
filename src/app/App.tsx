import { Link, Outlet } from 'react-router-dom';
import './style.css';
import style from './style.module.scss';

import Logo_jpg from '@/shared/assets/cloud-fog.jpg';
import Logo_png from '@/shared/assets/cloud-fog.jpg';
import Logo_svg from '@/shared/assets/cloud-fog.svg';

const App = () => {
	return (
		<div className="wrapper">
			<p className={style.color}>Main</p>
			<Link to={'/about'}>About</Link>
			<Link to={'/store'}>Store</Link>
			{/* Вставка children навигации */}
			<Outlet />
			<img width={50} height={50} src={Logo_png} alt="" />
			<img width={50} height={50} src={Logo_jpg} alt="" />
			<Logo_svg style={{ color: 'red' }} width={50} height={50} />
		</div>
	);
};

export default App;
