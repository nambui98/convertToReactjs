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
					<span className="light-font"> Hương vị </span> <strong>sản phẩm tốt</strong>
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
				</div>
			</div>
			<div className="container">
				{/* Random Products */}
				<div className="row">
					<div className="col-md-4 pt-50">
						<h4 className="sub-title-sm"> Sản phẩm mới </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<span className="light-font">Sản phẩm </span> <strong>mới về </strong>{' '}
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
						<h4 className="sub-title-sm">Giảm giá tốt </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<span className="light-font">Sản phẩm </span> <strong>phổ biến </strong>{' '}
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
						<h4 className="sub-title-sm"> Ngẫu nhiên </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<span className="light-font" /> <strong>Ngẫu nhiên </strong>{' '}
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
											<Link to="#">
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
								<span className="light-font"> TƯƠI TỚI TỪ TRANG TRẠNG : </span>{' '}
								<strong>Ô liu xanh </strong>{' '}
							</h4>
							<div className="banner-box">
								<div className="banner-content">
									<h3 className="title-sec">Rau</h3>
									<h2 className="section-title">
										{' '}
										<span className="light-font">Xanh </span> <strong>OLIVE </strong>{' '}
									</h2>
									<h4 className="sub-title"> 35% VÀO THỨ 4 </h4>
									<Link to="#" className="btn">
										{' '}
										<span> cửa hàng </span> <i className="fa fa-long-arrow-right" />{' '}
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
								<span className="light-font"> MÙA HÈ VỚI </span> <strong>HOA QUẢ </strong>{' '}
							</h4>
							<div className="banner-box">
								<div className="banner-content">
									<h3 className="title-sec">Hoa quả</h3>
									<h2 className="section-title">
										{' '}
										<span className="light-font">Tất cả</span> <strong>Mùa hè </strong>{' '}
									</h2>
									<h4 className="sub-title"> 35% VÀO THỨ 4 </h4>
									<Link to="#" className="btn">
										{' '}
										<span> cửa hàng </span> <i className="fa fa-long-arrow-right" />{' '}
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
