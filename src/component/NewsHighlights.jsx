import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

NewsHighlights.propTypes = {};

function NewsHighlights(props) {
	return (
		<section className="sec-space">
			<div className="container">
				<div className="title-wrap">
					<h4 className="sub-title"> NATURIX BLOG </h4>
					<h2 className="section-title">
						{' '}
						<span className="light-font">naturix</span> <strong>latest news </strong>{' '}
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="latest-news">
							<div className="news-img">
								<img src="img/blog/blog-sm-1.jpg" alt="" />
							</div>
							<div className="news-caption">
								<h4 className="sub-title-sm"> 26 JUNE 2016 </h4>
								<h2 className="title-2">
									{' '}
									<Link href="#">
										{' '}
										<span className="light-font">5 best foods to make you </span>{' '}
										<strong>fresh &amp; healthy</strong>{' '}
									</Link>{' '}
								</h2>
								<span className="divider-1" />
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
								<Link href="#" className="fsz-12">
									{' '}
									READ ARTICLE <i className="fa fa-long-arrow-right" />{' '}
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="latest-news">
							<div className="news-img">
								<img src="img/blog/blog-sm-2.jpg" alt="" />
							</div>
							<div className="news-caption">
								<h4 className="sub-title-sm"> 26 JUNE 2016 </h4>
								<h2 className="title-2">
									{' '}
									<Link href="#">
										{' '}
										<span className="light-font">5 best foods to make you </span>{' '}
										<strong>fresh &amp; healthy</strong>{' '}
									</Link>{' '}
								</h2>
								<span className="divider-1" />
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
								<Link href="#" className="fsz-12">
									{' '}
									READ ARTICLE <i className="fa fa-long-arrow-right" />{' '}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NewsHighlights;
