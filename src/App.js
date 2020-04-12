import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Menu from './component/Header';
import ProductsPreview from './component/ProductsPreview';
import SubscribeNewsletter from './component/SubscribeNewsletter';
import About from './page/About';
import Error from './page/Error';
import Home from './page/Home';

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
			{/* <Button color="danger" onClick={toggle}>
				Click
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Do Something
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal> */}

			<main className={classMain}>
				<Menu key="menu" />
				<Switch>
					<Route path="/about">
						<About key="about" />
					</Route>
					<Route path="/" exact>
						<Home key="home" handleShow={handleShow} />
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
