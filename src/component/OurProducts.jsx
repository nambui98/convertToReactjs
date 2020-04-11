import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

OurProducts.propTypes = {};

function OurProducts(props) {
	return (
		<section className="organic-product sec-space">
			<div className="container">
				<div className="row sec-space-top">
					<div className="col-lg-6 col-sm-12">
						<div className="row">
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-1.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link href="#">
											{' '}
											<span className="light-font">organic </span> <strong> fruits</strong>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" href="#">
										{' '}
										<i> 52 items </i>{' '}
									</Link>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-2.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link href="#">
											{' '}
											<span className="light-font">fresh </span> <strong> vegetables</strong>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" href="#">
										{' '}
										<i> 35 items </i>{' '}
									</Link>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-3.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link href="#">
											{' '}
											<span className="light-font">organic </span> <strong> breads</strong>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" href="#">
										{' '}
										<i> 23 items </i>{' '}
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="organic-prod-info">
							<h4 className="sub-title"> FRESH FROM OUR FARM </h4>
							<h2 className="section-title ptb-15">
								{' '}
								<span className="light-font">220+ </span> <strong>fruits, vegetables </strong>{' '}
								<span className="light-font"> &amp; </span> <strong> lot more</strong>{' '}
							</h2>
							<p className="fsz-16">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
								quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
								consequat.{' '}
							</p>
						</div>
					</div>
				</div>
				<div className="row sec-space-top">
					<div className="col-lg-6 col-sm-12">
						<div className="organic-prod-info">
							<h4 className="sub-title"> FRESH FROM OUR FARM </h4>
							<h2 className="section-title ptb-15">
								{' '}
								<span className="light-font">115+ </span> <strong>organic juices </strong>{' '}
								<span className="light-font"> and </span> <strong> organic tea</strong>{' '}
							</h2>
							<p className="fsz-16">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
								quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
								consequat.{' '}
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="row">
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-4.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link href="#">
											{' '}
											<span className="light-font">organic </span> <strong> juices</strong>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" href="#">
										{' '}
										<i> 26 items </i>{' '}
									</Link>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-5.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link href="#">
											{' '}
											<span className="light-font">dried </span> <strong> juices</strong>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" href="#">
										{' '}
										<i> 31 items </i>{' '}
									</Link>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-6.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link href="#">
											{' '}
											<span className="light-font">organic </span> <strong> tea</strong>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" href="#">
										{' '}
										<i> 17 items </i>{' '}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurProducts;
