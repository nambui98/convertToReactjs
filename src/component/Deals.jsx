import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

Deals.propTypes = {};

function Deals(props) {
	return (
		<section className="deals sec-space light-bg">
			<img alt="" src="img/extra/sec-img-3.png" className="right-bg-img" />
			<img alt="" src="img/extra/sec-img-4.png" className="left-bg-img" />
			<div className="container">
				<div className="row">
					<div className="col-sm-5 text-right">
						<h4 className="sub-title"> NATURIX DEAL OF THE DAY </h4>
						<h2 className="section-title">
							{' '}
							<span className="light-font">organic goods </span> <strong>50% </strong>{' '}
							<span className="light-font">off</span>{' '}
						</h2>
					</div>
					<div className="col-sm-2 text-center no-padding">
						<img alt="" src="img/extra/deal.png" />
					</div>
					<div className="col-sm-5">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
							tincidunt ut laoreet dolore magna aliquam erat volutpat.{' '}
						</p>
					</div>
				</div>
				<div className="deal-count">
					<div className="countdown-wrapper">
						<div id="defaultCountdown" className="countdown" />
					</div>
				</div>
				<OwlCarousel
					className="dots-2"
					items={6}
					dots={true}
					loop={true}
					autoplay={false}
					autoplayHoverPause={true}
					smartSpeed={100}
					nav={false}
					margin={30}
					responsive={{
						0: { items: 1 },
						1500: { items: 2 },
						1200: { items: 2 },
						992: { items: 2 }
					}}
				>
					{/* <OwlCarousel className="deal-slider dots-2"> */}
					<div className="item">
						<div className="deal-item">
							<div className="deal-icons">
								<Link to="#" className="fa fa-heart" />
								<Link to="#" className="fa fa-shopping-basket" />
								<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
							</div>
							<div className="deal-content">
								<div className="text-right">
									<span className="prod-tag tag-1">new</span>{' '}
									<span className="prod-tag tag-2">sale</span>
								</div>
								<div className="deal-text">
									<h4 className="sub-title"> ORGANIC FRUITS </h4>
									<h2 className="fsz-30 pb-15">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">fresh </span> <strong>rasberry </strong>{' '}
										</Link>{' '}
									</h2>
									<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
									<div className="price pt-15">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="deal-img">
									{' '}
									<img alt="" src="img/extra/deal-1.png" />{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="deal-item">
							<div className="deal-icons">
								<Link to="#" className="fa fa-heart" />
								<Link to="#" className="fa fa-shopping-basket" />
								<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
							</div>
							<div className="deal-content">
								<div className="text-right">
									<span className="prod-tag tag-1">new</span>{' '}
									<span className="prod-tag tag-2">sale</span>
								</div>
								<div className="deal-text">
									<h4 className="sub-title"> ORGANIC FRUITS </h4>
									<h2 className="fsz-30 pb-15">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">fresh </span> <strong>pineapple </strong>{' '}
										</Link>{' '}
									</h2>
									<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
									<div className="price pt-15">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="deal-img">
									{' '}
									<img alt="" src="img/extra/deal-2.png" />{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="deal-item">
							<div className="deal-icons">
								<Link to="#" className="fa fa-heart" />
								<Link to="#" className="fa fa-shopping-basket" />
								<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
							</div>
							<div className="deal-content">
								<div className="text-right">
									<span className="prod-tag tag-1">new</span>{' '}
									<span className="prod-tag tag-2">sale</span>
								</div>
								<div className="deal-text">
									<h4 className="sub-title"> ORGANIC FRUITS </h4>
									<h2 className="fsz-30 pb-15">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">fresh </span> <strong>rasberry </strong>{' '}
										</Link>{' '}
									</h2>
									<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
									<div className="price pt-15">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="deal-img">
									{' '}
									<img alt="" src="img/extra/deal-1.png" />{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="deal-item">
							<div className="deal-icons">
								<Link to="#" className="fa fa-heart" />
								<Link to="#" className="fa fa-shopping-basket" />
								<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
							</div>
							<div className="deal-content">
								<div className="text-right">
									<span className="prod-tag tag-1">new</span>{' '}
									<span className="prod-tag tag-2">sale</span>
								</div>
								<div className="deal-text">
									<h4 className="sub-title"> ORGANIC FRUITS </h4>
									<h2 className="fsz-30 pb-15">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">fresh </span> <strong>pineapple </strong>{' '}
										</Link>{' '}
									</h2>
									<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
									<div className="price pt-15">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="deal-img">
									{' '}
									<img alt="" src="img/extra/deal-2.png" />{' '}
								</div>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</section>
	);
}

export default Deals;
