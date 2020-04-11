import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

Organic.propTypes = {};

function Organic(props) {
	return (
		<section className="organic-all sec-space-bottom">
			<div className="pattern">
				<img alt="" src="img/icons/white-pattern.png" />
			</div>
			<div className="section-icon">
				<img alt="" src="img/icons/icon-1.png" />
			</div>
			<div className="container">
				<div className="organic-wrap">
					<img className="logo-img" alt="" src="img/logo/logo-1.png" />
					<div className="tabs-box">
						<ul className="theme-tabs">
							<li className="">
								<Link to="#product-tab-1" data-toggle="tab">
									{' '}
									<span className="light-font">organic </span> <strong>fruits </strong>{' '}
								</Link>
							</li>
							<li className="active">
								<Link to="#product-tab-2" data-toggle="tab">
									{' '}
									<span className="light-font">organic </span> <strong>vegetables </strong>{' '}
								</Link>
							</li>
							<li className="">
								<Link to="#product-tab-3" data-toggle="tab">
									{' '}
									<span className="light-font">organic </span> <strong>juices </strong>{' '}
								</Link>
							</li>
							<li className="">
								<Link to="#product-tab-4" data-toggle="tab">
									{' '}
									<span className="light-font">organic </span> <strong>dried fruits </strong>{' '}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="col-md-12">
					<div className="tab-content organic-content row">
						<div id="product-tab-1" className="tab-pane fade active in">
							<OwlCarousel
								className="product-slider-1"
								items={6}
								dots={true}
								loop={false}
								autoplay={false}
								autoplayHoverPause={true}
								smartSpeed={100}
								margin={0}
								responsive={{
									0: { items: 1 },
									1500: { items: 6 },
									1200: { items: 5 },
									992: { items: 3 },
									600: { items: 2 }
								}}
							>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/2.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cabbege</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box active">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/6.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>onion</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/1.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>tomato</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/2.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cabbege</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/6.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>onion</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
							</OwlCarousel>
						</div>
						<div id="product-tab-2" className="tab-pane fade">
							{/* <OwlCarousel className="product-slider-1 dots-1"> */}
							<OwlCarousel
								className="product-slider-1"
								items={6}
								dots={true}
								loop={false}
								autoplay={false}
								autoplayHoverPause={true}
								smartSpeed={100}
								margin={0}
								responsive={{
									0: { items: 1 },
									1500: { items: 6 },
									1200: { items: 5 },
									992: { items: 3 },
									600: { items: 2 }
								}}
							>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/1.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>tomato</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/2.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cabbege</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/6.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>onion</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
							</OwlCarousel>
						</div>
						<div id="product-tab-3" className="tab-pane fade">
							<OwlCarousel
								className="product-slider-1"
								items={6}
								dots={true}
								loop={false}
								autoplay={false}
								autoplayHoverPause={true}
								smartSpeed={100}
								margin={0}
								responsive={{
									0: { items: 1 },
									1500: { items: 6 },
									1200: { items: 5 },
									992: { items: 3 },
									600: { items: 2 }
								}}
							>
								{/* <div className="product-slider-1 dots-1"> */}

								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								{/* </div> */}
							</OwlCarousel>
						</div>
						<div id="product-tab-4" className="tab-pane fade">
							<OwlCarousel
								className="product-slider-1"
								items={6}
								dots={true}
								loop={false}
								autoplay={false}
								autoplayHoverPause={true}
								smartSpeed={100}
								margin={0}
								responsive={{
									0: { items: 1 },
									1500: { items: 6 },
									1200: { items: 5 },
									992: { items: 3 },
									600: { items: 2 }
								}}
							>
								{/* <div className="product-slider-1 dots-1"> */}
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/1.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>tomato</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/2.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cabbege</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box active">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/6.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>onion</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/1.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>tomato</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/2.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cabbege</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/6.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>onion</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<span className="prod-tag tag-1">new</span>{' '}
											<span className="prod-tag tag-2">sale</span>
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span> <strong>salad</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link href="#" className="fa fa-heart" />
												<Link href="#" className="fa fa-shopping-basket" />
												<Link
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link href="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pineapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>
											</div>
										</div>
									</div>
								</div>

								{/* </div> */}
							</OwlCarousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Organic;
