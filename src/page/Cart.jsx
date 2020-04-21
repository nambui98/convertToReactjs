import React from 'react';
import PropTypes from 'prop-types';

Cart.propTypes = {};

function Cart(props) {
	return (
		<div>
			<section className="breadcrumb-bg">
				<div className="theme-container container ">
					<div className="site-breadcumb white-clr">
						<h2 className="section-title">
							{' '}
							<strong className="clr-txt">naturix </strong> <span className="light-font">Shop </span>{' '}
						</h2>
						<ol className="breadcrumb breadcrumb-menubar">
							<li>
								{' '}
								<a href="#"> Home </a> Shopping Cart
							</li>
						</ol>
					</div>
				</div>
			</section>
			{/*Breadcrumb Section End*/}
			{/* Cart Starts*/}
			<section className="shop-wrap sec-space">
				<div className="container">
					{/* Shopping Cart Starts */}
					<div className="cart-table">
						<form className="cart-form">
							<table className="product-table">
								<thead className>
									<tr>
										<th>product detail</th>
										<th />
										<th>Product price</th>
										<th>quantity</th>
										<th>total price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="image">
											<div className="white-bg">
												<a className="media-link" href="#">
													<img src="img/extra/cart-1.png" alt="" />
												</a>
											</div>
										</td>
										<td className="description">
											<div className="rating">
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
											</div>
											<h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
											<div className="divider-2" />
											<h3 className="product-title no-margin">
												{' '}
												<a href="#">
													{' '}
													<span className="light-font">organic </span>{' '}
													<strong>almonds </strong>{' '}
												</a>{' '}
											</h3>
											<h6>DRY FRUITS</h6>
										</td>
										<td>
											<div className="price fontbold-2">
												<strong className="fsz-20">$50.00 </strong>{' '}
												<del className="light-font">
													{' '}
													<b>$65.00</b>{' '}
												</del>
											</div>
										</td>
										<td>
											<div className="prod-btns fontbold-2">
												<div className="quantity">
													<button className="btn minus">
														<i className="fa fa-minus-circle" />
													</button>
													<input
														title="Qty"
														placeholder={3}
														className="form-control qty"
														type="text"
													/>
													<button className="btn plus">
														<i className="fa fa-plus-circle" />
													</button>
												</div>
												<div className="sort-dropdown">
													<div className="search-selectpicker selectpicker-wrapper">
														<select
															className="selectpicker input-price"
															data-width="100%"
															data-toggle="tooltip"
														>
															<option>Kilo</option>
															<option>2 Kilo</option>
															<option>3 Kilo</option>
															<option>4 Kilo</option>
															<option>5 Kilo</option>
														</select>
													</div>
												</div>
											</div>
										</td>
										<td>
											<strong className="clr-txt fsz-20 fontbold-2">$50.00</strong>{' '}
											<a href="#" className="remove fa fa-close clr-txt" />
										</td>
									</tr>
									<tr>
										<td className="image">
											<div className="white-bg">
												<a className="media-link" href="#">
													<img src="img/extra/cart-2.png" alt="" />
												</a>
											</div>
										</td>
										<td className="description">
											<div className="rating">
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
											</div>
											<h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
											<div className="divider-2" />
											<h3 className="product-title no-margin">
												{' '}
												<a href="#">
													{' '}
													<span className="light-font">organic </span>{' '}
													<strong>pepper </strong>{' '}
												</a>{' '}
											</h3>
											<h6>VEGETABLE</h6>
										</td>
										<td>
											<div className="price fontbold-2">
												<strong className="fsz-20">$50.00 </strong>{' '}
												<del className="light-font">
													{' '}
													<b>$65.00</b>{' '}
												</del>
											</div>
										</td>
										<td>
											<div className="prod-btns fontbold-2">
												<div className="quantity">
													<button className="btn minus">
														<i className="fa fa-minus-circle" />
													</button>
													<input
														title="Qty"
														placeholder={3}
														className="form-control qty"
														type="text"
													/>
													<button className="btn plus">
														<i className="fa fa-plus-circle" />
													</button>
												</div>
												<div className="sort-dropdown">
													<div className="search-selectpicker selectpicker-wrapper">
														<select
															className="selectpicker input-price"
															data-width="100%"
															data-toggle="tooltip"
														>
															<option>Kilo</option>
															<option>2 Kilo</option>
															<option>3 Kilo</option>
															<option>4 Kilo</option>
															<option>5 Kilo</option>
														</select>
													</div>
												</div>
											</div>
										</td>
										<td>
											<strong className="clr-txt fsz-20 fontbold-2">$50.00</strong>{' '}
											<a href="#" className="remove fa fa-close clr-txt" />
										</td>
									</tr>
									<tr>
										<td className="image">
											<div className="white-bg">
												<a className="media-link" href="#">
													<img src="img/extra/cart-3.png" alt="" />
												</a>
											</div>
										</td>
										<td className="description">
											<div className="rating">
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
												<span className="star active" />
											</div>
											<h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
											<div className="divider-2" />
											<h3 className="product-title no-margin">
												{' '}
												<a href="#">
													{' '}
													<span className="light-font">organic </span> <strong>onion </strong>{' '}
												</a>{' '}
											</h3>
											<h6>VEGETABLE</h6>
										</td>
										<td>
											<div className="price fontbold-2">
												<strong className="fsz-20">$50.00 </strong>{' '}
												<del className="light-font">
													{' '}
													<b>$65.00</b>{' '}
												</del>
											</div>
										</td>
										<td>
											<div className="prod-btns fontbold-2">
												<div className="quantity">
													<button className="btn minus">
														<i className="fa fa-minus-circle" />
													</button>
													<input
														title="Qty"
														placeholder={3}
														className="form-control qty"
														type="text"
													/>
													<button className="btn plus">
														<i className="fa fa-plus-circle" />
													</button>
												</div>
												<div className="sort-dropdown">
													<div className="search-selectpicker selectpicker-wrapper">
														<select
															className="selectpicker input-price"
															data-width="100%"
															data-toggle="tooltip"
														>
															<option>Kilo</option>
															<option>2 Kilo</option>
															<option>3 Kilo</option>
															<option>4 Kilo</option>
															<option>5 Kilo</option>
														</select>
													</div>
												</div>
											</div>
										</td>
										<td>
											<strong className="clr-txt fsz-20 fontbold-2">$50.00</strong>{' '}
											<a href="#" className="remove fa fa-close clr-txt" />
										</td>
									</tr>
								</tbody>
							</table>
							<div className="continue-shopping">
								<div className="left">
									<h6>
										ENTER VOUCHER CODE IF YOU HAVE ONE.{' '}
										<span className="clr-txt-2"> APPLY HERE </span>{' '}
									</h6>
									<div className="coupan-form">
										<input className="form-control" />
										<button className="btn" type="submit">
											{' '}
											APPLY CODE{' '}
										</button>
									</div>
								</div>
								<div className="right">
									{' '}
									<strong className="fsz-20 fontbold-2">
										Subtotal : <span className="clr-txt"> $150.00 </span>{' '}
									</strong>{' '}
								</div>
							</div>
							<div className="shp-btn col-sm-12 text-center">
								<button className="theme-btn-2 btn">
									{' '}
									<b> CONTINUE SHOPPING </b>{' '}
								</button>
								<button className="theme-btn-3 btn">
									{' '}
									<b> CHECKOUT NOW </b>{' '}
								</button>
							</div>
						</form>
					</div>
					{/* / Shopping Cart Ends */}
				</div>
			</section>
		</div>
	);
}

export default Cart;
