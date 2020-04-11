import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

RandomProducts.propTypes = {};

function RandomProducts(props) {
	return (
		<section className=" sec-space-bottom">
			<div className="pattern">
				<img alt="" src="img/icons/white-pattern.png" />
			</div>
			<div className="section-icon">
				<img alt="" src="img/icons/icon-1.png" />
				<div className="pt-15 icon">
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<span className="light-font"> a taste of </span> <strong>real food</strong>
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
				</div>
			</div>
			<div className="container">
				{/* Random Products */}
				<div className="row">
					<div className="col-md-4 pt-50">
						<h4 className="sub-title-sm"> NEW FROM THE FARM </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<span className="light-font">organic </span> <strong>new arrivals </strong>{' '}
						</h2>
						<OwlCarousel
							className="nav-1"
							dots={false}
							loop={true}
							autoplay={true}
							autoplayHoverPause={true}
							smartSpeed={100}
							nav={true}
							margin={30}
							navText={[
								"<i class='fa fa-long-arrow-left'></i>",
								"<i class='fa fa-long-arrow-right'></i>"
							]}
							responsive={{
								0: { items: 1 },
								1024: { items: 1 },
								768: { items: 2 }
							}}
						>
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-1.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>blackberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-2.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>peach </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-3.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>redberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-4.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>strawberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-5.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>mushroom </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-6.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>apple </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
					<div className="col-md-4 pt-50">
						<h4 className="sub-title-sm"> Best Seller </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<span className="light-font">organic </span> <strong>popular </strong>{' '}
						</h2>
						<OwlCarousel
							className="nav-1"
							dots={false}
							loop={true}
							autoplay={true}
							autoplayHoverPause={true}
							smartSpeed={100}
							nav={true}
							margin={30}
							navText={[
								"<i class='fa fa-long-arrow-left'></i>",
								"<i class='fa fa-long-arrow-right'></i>"
							]}
							responsive={{
								0: { items: 1 },
								1024: { items: 1 },
								768: { items: 2 }
							}}
						>
							{/* <div id="best-seller" className="nav-1"> */}
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-4.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>strawberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-5.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>mushroom </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-6.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>apple </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-7.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>grapes </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-1.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>blackberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-8.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>beans </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
							{/* </div> */}
						</OwlCarousel>
					</div>

					<div className="col-md-4 pt-50">
						<h4 className="sub-title-sm"> Customer Needs </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<span className="light-font">organic </span> <strong>random </strong>{' '}
						</h2>
						<OwlCarousel
							className="nav-1"
							dots={false}
							loop={true}
							autoplay={true}
							autoplayHoverPause={true}
							smartSpeed={100}
							nav={true}
							margin={30}
							navText={[
								"<i class='fa fa-long-arrow-left'></i>",
								"<i class='fa fa-long-arrow-right'></i>"
							]}
							responsive={{
								0: { items: 1 },
								1024: { items: 1 },
								768: { items: 2 }
							}}
						>
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-7.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>grapes </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-1.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>blackberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-8.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>beans </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-1.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>blackberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-2.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>peach </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-3.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link href="#">
												{' '}
												<span className="light-font">organic </span> <strong>redberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
				{/* Banner */}
				<div className="row">
					<div className="col-md-6">
						<div className="prod-banner green-banner">
							<h4 className="title">
								{' '}
								<span className="light-font"> FRESH FROM OUR FARM : </span>{' '}
								<strong> GREEN OLIVE </strong>{' '}
							</h4>
							<div className="banner-box">
								<div className="banner-content">
									<h3 className="title-sec">Vegetable</h3>
									<h2 className="section-title">
										{' '}
										<span className="light-font">GREEN </span> <strong>OLIVE </strong>{' '}
									</h2>
									<h4 className="sub-title"> 35% OFF IN JUNE-JULY </h4>
									<Link href="#" className="btn">
										{' '}
										<span> shop now </span> <i className="fa fa-long-arrow-right" />{' '}
									</Link>
								</div>
							</div>
							<img src="img/extra/banner-1.png" alt="" className="top-img" />
							<img src="img/extra/banner-2.png" alt="" className="bottom-img" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="prod-banner orange-banner">
							<h4 className="title">
								{' '}
								<span className="light-font"> FRESH SUMMER </span> <strong>FRUITS </strong>{' '}
							</h4>
							<div className="banner-box">
								<div className="banner-content">
									<h3 className="title-sec">Fruits</h3>
									<h2 className="section-title">
										{' '}
										<span className="light-font">ALL</span> <strong>SUMMER </strong>{' '}
									</h2>
									<h4 className="sub-title"> 35% OFF IN JUNE-JULY </h4>
									<Link href="#" className="btn">
										{' '}
										<span> shop now </span> <i className="fa fa-long-arrow-right" />{' '}
									</Link>
								</div>
							</div>
							<img src="img/extra/banner-3.png" alt="" className="bottom-img" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default RandomProducts;
