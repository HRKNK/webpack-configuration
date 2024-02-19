
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import style from "./App.module.scss";

import Logo_jpg from '@/assets/cloud-fog.jpg';
import Logo_png from '@/assets/cloud-fog.jpg';
import Logo_svg from '@/assets/cloud-fog.svg';

const App = () => {
	return (
		<div className="wrapper">
			{__ENV}
			<p className={style.color}>Main</p>
			<Link to={'/about'}>About</Link>
			<Link to={'/store'}>Store</Link>
			{/* Вставка children навигации */}
			<Outlet/> 
			<img width={50} height={50} src={Logo_png} alt="" />
			<img width={50} height={50} src={Logo_jpg} alt="" />
			<Logo_svg style={{color: 'red'}} width={50} height={50}/>
		</div>
	);
};

export default App;