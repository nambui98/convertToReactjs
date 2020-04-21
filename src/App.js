import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Menu from './component/Header';
import ProductsPreview from './component/ProductsPreview';
import SubscribeNewsletter from './component/SubscribeNewsletter';
import About from './page/About';
import Error from './page/Error';
import Shop from './page/Shop';
import Home from './page/Home';
import ContactUs from './page/ContactUs';
import Blog from './page/Blog';
import Cart from './page/Cart';
import CheckOut from './page/CheckOut';
import Contact from './component/Contact';

function App(props) {
	let location = useLocation();
	let classMain = location.pathname === '/' ? ' home-wrap' : '';
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { buttonLabel, className } = props;

	const [ modal, setModal ] = useState(false);

	const toggle = () => setModal(!modal);
	return (
		<div className="wrapper">
			<main className={classMain}>
				{location.pathname === '/home' || location.pathname === '/' || location.pathname === '/about' ? (
					''
				) : (
					<Contact />
				)}
				<Menu key="menu" />
				<Switch>
					<Route path="/" exact>
						<Home key="home" handleShow={handleShow} />
					</Route>
					<Route path="/convertToReactjs" exact>
						<Home key="home" handleShow={handleShow} />
					</Route>
					<Route path="/about" exact>
						<About key="about" />
					</Route>

					<Route path="/shop" exact>
						<Shop key="shop" handleShow={handleShow} />
					</Route>
					<Route path="/blog" exact>
						<Blog key="blog" />
					</Route>
					<Route path="/contact" exact>
						<ContactUs key="contact" />
					</Route>
					<Route path="/cart" exact>
						<Cart key="cart" />
					</Route>
					<Route path="/checkout" exact>
						<CheckOut key="checkout" />
					</Route>
					<Route component={Error} />
				</Switch>
				<Footer />
				<div id="to-top-mb" className="to-top mb">
					{' '}
					<i className="fa fa-arrow-circle-o-up" />{' '}
				</div>
			</main>
			<ProductsPreview show={show} toggle={handleClose} />
			{/* <SubscribeNewsletter /> */}
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
