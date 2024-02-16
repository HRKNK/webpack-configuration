
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import style from "./App.module.scss";

const App = () => {
	return (
		<>
			<Link to={'/about'}>About</Link>
			<Link to={'/store'}>Store</Link>
			<div className="wrapper">
				<p className={style.color}>Main</p>
			</div>
			{/* Вставка children навигации */}
			<Outlet/> 
		</>
	);
};

export default App;