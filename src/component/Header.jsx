import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

Header.propTypes = {};

function Header(props) {
	console.log(props);
	let location = useLocation();
	console.log(location.pathname);

	let classMenu = location.pathname === '/' ? 'main-header' : 'main-header white-bg';
	return (
		<header className={classMenu}>
			<div className="container-fluid rel-div">
				<div className="col-lg-4 col-sm-8">
					<div className="main-logo">
						<Link to="index.html">
							<img alt="" src="img/logo/main-logo.png" />
						</Link>
						<span className="medium-font">ORGANIC STORE</span>
					</div>
				</div>
				<div className="col-lg-6 responsive-menu">
					<div className="responsive-toggle fa fa-bars"> </div>
					<nav className="fix-navbar" id="primary-navigation">
						<ul className="primary-navbar">
							<li className="dropdown active">
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li className="dropdown">
								<Link
									to="#"
									className="dropdown-toggle"
									data-toggle="dropdown"
									role="button"
									aria-haspopup="true"
								>
									Shop
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link to="shop-1.html"> shop </Link>
									</li>
									<li>
										<Link to="shop-2.html"> shop 2 </Link>
									</li>
									<li>
										<Link to="shop-single.html"> shop single </Link>
									</li>
									<li>
										<Link to="my-account.html"> my account </Link>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<Link
									to="#"
									className="dropdown-toggle"
									data-toggle="dropdown"
									role="button"
									aria-haspopup="true"
								>
									Blog
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link to="blog.html"> blog </Link>
									</li>
									<li>
										<Link to="blog-single.html"> blog single </Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to="contact.html">Contact Us</Link>
							</li>
							<li className="dropdown">
								<Link
									to="#"
									className="dropdown-toggle"
									data-toggle="dropdown"
									role="button"
									aria-haspopup="true"
								>
									Pages
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link to="404.html"> Error Page </Link>
									</li>
									<li>
										<Link to="coming-soon.html"> Coming Soon </Link>
									</li>
									<li className="dropdown">
										<Link
											to="#"
											className="dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
										>
											Sub Menu
										</Link>
										<ul className="dropdown-menu">
											<li>
												<Link to="#">Sub Menu 1</Link>
											</li>
											<li>
												<Link to="#">Sub Menu 2</Link>
											</li>
											<li className="dropdown">
												<Link
													to="#"
													className="dropdown-toggle"
													data-toggle="dropdown"
													role="button"
													aria-haspopup="true"
												>
													Sub Menu 3
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link to="#">Sub Menu 4</Link>
													</li>
													<li>
														<Link to="#">Sub Menu 5</Link>
													</li>
													<li>
														<Link to="#">Sub Menu 6</Link>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
				<div className="col-lg-2 col-sm-4 cart-megamenu">
					<div className="cart-hover">
						<Link to="#">
							{' '}
							<img alt="" src="img/icons/cart-icon.png" />{' '}
						</Link>
						<span className="cnt crl-bg">2</span> <span className="price">$2.170.00</span>
						<ul className="pop-up-box cart-popup">
							<li className="cart-list">
								<div className="cart-img">
									{' '}
									<img src="img/extra/cart-sm-1.jpg" alt="" />{' '}
								</div>
								<div className="cart-title">
									<div className="fsz-16">
										<Link to="#">
											{' '}
											<span className="light-font"> organic </span> <strong>almonds</strong>
										</Link>
										<h6 className="sub-title-1">DRY FRUITS</h6>
									</div>
									<div className="price">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="close-icon">
									{' '}
									<i className="fa fa-close clr-txt" />{' '}
								</div>
							</li>
							<li className="cart-list">
								<div className="cart-img">
									{' '}
									<img src="img/extra/cart-sm-2.jpg" alt="" />{' '}
								</div>
								<div className="cart-title">
									<div className="fsz-16">
										<Link to="#">
											{' '}
											<span className="light-font"> organic </span> <strong>pepper</strong>
										</Link>
										<h6 className="sub-title-1">VEGETABLES</h6>
									</div>
									<div className="price">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="close-icon">
									{' '}
									<i className="fa fa-close clr-txt" />{' '}
								</div>
							</li>
							<li className="cart-list">
								<div className="cart-img">
									{' '}
									<img src="img/extra/cart-sm-3.jpg" alt="" />{' '}
								</div>
								<div className="cart-title">
									<div className="fsz-16">
										<Link to="#">
											{' '}
											<span className="light-font"> organic </span> <strong>onion</strong>
										</Link>
										<h6 className="sub-title-1">VAGETABLES</h6>
									</div>
									<div className="price">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="close-icon">
									{' '}
									<i className="fa fa-close clr-txt" />{' '}
								</div>
							</li>
							<li className="cart-list sub-total">
								<div className="pull-left">
									<strong>Subtotal</strong>
								</div>
								<div className="pull-right">
									<strong className="clr-txt">$150.00</strong>
								</div>
							</li>
							<li className="cart-list buttons">
								<div className="pull-left">
									<Link to="cart.html" className="theme-btn-sm-2">
										View Cart
									</Link>
								</div>
								<div className="pull-right">
									<Link to="checkout.html" className="theme-btn-sm-3">
										{' '}
										Checkout{' '}
									</Link>
								</div>
							</li>
						</ul>
					</div>
					<div className="mega-submenu">
						<span className="nav-trigger">
							<Link className="menu-toggle" to="#">
								{' '}
								<img src="img/icons/menu.png" alt="" />{' '}
							</Link>
						</span>
						<div className="mega-dropdown-menu">
							<Link className="menu-toggle fa fa-close" to="#" />
							<OwlCarousel
								dots={false}
								loop={true}
								autoplay={true}
								nav={false}
								margin={1}
								responsive={{
									0: { items: 1 },
									1200: { items: 5 },
									992: { items: 3 },
									768: { items: 3 },
									568: { items: 2 }
								}}
							>
								{/* <div className="slider-mega-menu"> */}
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Fresh </span> <strong>Fruits</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Banana</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Water Melon </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Blackberry </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Orange</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Lemon</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Pineapple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												All Fruits{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-1.png" />
									</div>
								</div>
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Fresh </span> <strong>Vegetables</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Cabbage</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Garlic </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Onion </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Carrot</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Papper</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Mushrome</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												All Vegetables{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-2.png" />
									</div>
								</div>
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Fresh </span> <strong>Dread Juices</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Banana Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Water Melon Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Blackberry Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Orange Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Lemon Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Pineapple Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi Juice</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												All Dread juices{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-3.png" />
									</div>
								</div>
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Fresh </span> <strong>Juices</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Banana Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Water Melon Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Blackberry Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Orange Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Lemon Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Pineapple Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi Juice</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												All Fresh Juices{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-1.png" />
									</div>
								</div>
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Fresh </span> <strong>Breads</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Banana</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Water Melon </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Blackberry </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Orange</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Lemon</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Pineapple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												All Fresh Bread{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-5.png" />
									</div>
								</div>
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Fresh </span> <strong>Tea</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Cabbage</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Garlic </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Onion </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Carrot</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Papper</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Mushrome</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												All Freash Tea{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-6.png" />
									</div>
								</div>
								{/* </div> */}
							</OwlCarousel>
						</div>
					</div>
					<div className="responsive-toggle fa fa-bars"> </div>
				</div>
			</div>
		</header>
	);
}

export default Header;
