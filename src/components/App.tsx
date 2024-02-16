
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import style from "./App.module.scss";

const App = () => {
	return (
		<div className="wrapper">
			<p className={style.color}>Main</p>
			<Link to={'/about'}>About</Link>
			<Link to={'/store'}>Store</Link>
			{/* Вставка children навигации */}
			<Outlet/> 
		</div>
	);
};

export default App;