import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Footer.propTypes = {};

function Footer(props) {
	return (
		<footer className="page-footer">
			<section className="sec-space light-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-12 footer-widget">
							<div className="main-logo">
								<Link href="index.html">
									{' '}
									<img alt="" src="img/logo/main-logo.png" />
								</Link>
								<span className="medium-font">ORGANIC STORE</span>
							</div>
							<span className="divider-2" />
							<div className="text-widget">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
									euismod tincidunt ut laoreet dolore magna.
								</p>
								<ul>
									<li>
										{' '}
										<i className="fa fa-map-marker" />{' '}
										<span>
											{' '}
											<strong>100 highland ave,</strong> california, united state{' '}
										</span>{' '}
									</li>
									<li>
										{' '}
										<i className="fa fa-envelope-square" />{' '}
										<span>
											<Link href="#">contact@naturix.com</Link>{' '}
										</span>{' '}
									</li>
									<li>
										{' '}
										<i className="fa fa-phone-square" />{' '}
										<span>
											<Link href="#">www.naturix.com</Link>{' '}
										</span>{' '}
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-4 footer-widget">
							<h2 className="title-1">
								{' '}
								<span className="light-font">naturix</span> <strong>information </strong>{' '}
							</h2>
							<span className="divider-2" />
							<ul className="list">
								<li>
									{' '}
									<Link href="#"> about our shop </Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#"> top sellers </Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#"> our blog </Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#"> new products </Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#"> secure shopping </Link>{' '}
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-4 footer-widget">
							<h2 className="title-1">
								{' '}
								<span className="light-font">my</span> <strong>account </strong>{' '}
							</h2>
							<span className="divider-2" />
							<ul className="list">
								<li>
									{' '}
									<Link href="my-account.html"> my account </Link>{' '}
								</li>
								<li>
									<Link href="account-information.html"> Account Information </Link>
								</li>
								<li>
									<Link href="address-book.html"> Address Books</Link>
								</li>
								<li>
									<Link href="order-history.html"> Order History</Link>
								</li>
								<li>
									<Link href="review-rating.html"> Reviews and Ratings</Link>
								</li>
								<li>
									<Link href="return.html"> Returns Requests</Link>
								</li>
								<li>
									<Link href="newsletter.html"> Newsletter</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-4 footer-widget">
							<h2 className="title-1">
								{' '}
								<span className="light-font">photo</span> <strong>instagram </strong>{' '}
							</h2>
							<span className="divider-2" />
							<ul className="instagram-widget">
								<li>
									{' '}
									<Link href="#">
										{' '}
										<img src="img/extra/80x80-1.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#">
										{' '}
										<img src="img/extra/80x80-2.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#">
										{' '}
										<img src="img/extra/80x80-3.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#">
										{' '}
										<img src="img/extra/80x80-4.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#">
										{' '}
										<img src="img/extra/80x80-5.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link href="#">
										{' '}
										<img src="img/extra/80x80-6.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="footer-bottom">
				<div className="pattern">
					<img alt="" src="img/icons/white-pattern.png" />
				</div>
				<div id="to-top" className="to-top">
					{' '}
					<i className="fa fa-arrow-circle-o-up" />{' '}
				</div>
			</section>
		</footer>
	);
}

export default Footer;
