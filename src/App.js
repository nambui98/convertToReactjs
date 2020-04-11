import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useRouteMatch } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Footer from './component/Footer';
import Error from './page/Error';
import Menu from './component/Header';
import ProductsPreview from './component/ProductsPreview';
import SubscribeNewsletter from './component/SubscribeNewsletter';
import './App.css';

function App() {
	let location = useLocation();
	let classMain = location.pathname === '/' ? ' home-wrap' : '';
	return (
		<div className="wrapper">
			<main className={classMain}>
				<Menu key="menu" />
				<Switch>
					<Route path="/about">
						<About key="about" />
					</Route>
					{/* <Route path="" exact>
					<Home />
				</Route> */}
					<Route path="/" exact>
						<Home key="home" />
					</Route>
					<Route component={Error} />
				</Switch>
				<Footer />
				<div id="to-top-mb" className="to-top mb">
					{' '}
					<i className="fa fa-arrow-circle-o-up" />{' '}
				</div>
			</main>
			<ProductsPreview />
			<SubscribeNewsletter />
		</div>
	);
	// return (
	// 	<div className={classMain}>
	// 		{/* WRAPPER */}
	// 		<Menu />
	// 		<Home />
	// 		{/* Product Preview Popup */}

	// 		{/* Subscribe Popup-Dark */}

	// 		{/* / Subscribe Popup-Dark */}
	// 	</div>
	// );
}

export default App;
