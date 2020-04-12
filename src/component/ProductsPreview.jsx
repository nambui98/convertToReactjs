import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

CartProducts.propTypes = {};

function CartProducts(props) {
	console.log(props);
	const inputRef = useRef();
	const [ indexImage, setIndexImage ] = useState(0);
	const handelChangeImage = (index) => {
		// e.preventdefault();
		inputRef.current.to(index, 1000);
	};
	return (
		<Modal
			show={props.show}
			onHide={props.toggle}
			className="modal fade in"
			dialogClassName=" modal-lg product-modal"
			// onHide={props.handleClose}
			// className="modal fade"
			// id="product-preview"
			// tabIndex={-1}
			// role="dialog"
			// aria-hidden="true"
		>
			{/* <Modal.Dialog className=" modal-lg product-modal"> */}
			{/* <div className="modal-dialog modal-lg product-modal"> */}
			{/* <div className="modal-content"> */}
			<Link
				aria-hidden="true"
				onClick={props.toggle}
				data-dismiss="modal"
				className="sb-close-btn close"
				href="#"
			>
				{' '}
				<i className=" fa fa-close" />{' '}
			</Link>
			<div className="product-single pb-50 clearfix">
				<div className="col-lg-6 col-sm-8 col-sm-offset-2 col-lg-offset-0 pt-50">
					{/* <div className="prod-slider sync1"> */}
					<OwlCarousel
						className="prod-slider sync1"
						ref={inputRef}
						rtl={false}
						dots={false}
						items={1}
						// to=(indexImage, 1000)
						navSpeed={1000}
						nav={false}
						// onChanged={syncPosition}
						responsiveRefreshRate={200}
					>
						<div className="item">
							<img src="img/products/prod-single-1.png" alt="" />
							<Link
								href="img/products/prod-big-1.png"
								data-gal="prettyPhoto[prettyPhoto]"
								title="Product"
								className="caption-link"
							>
								<i className="arrow_expand" />
							</Link>
						</div>
						<div className="item">
							<img src="img/products/prod-single-2.png" alt="" />
							<Link
								href="img/products/prod-big-2.png"
								data-gal="prettyPhoto[prettyPhoto]"
								title="Product"
								className="caption-link"
							>
								<i className="arrow_expand" />
							</Link>
						</div>
						<div className="item">
							<img src="img/products/prod-single-3.png" alt="" />
							<Link
								href="img/products/prod-big-3.png"
								data-gal="prettyPhoto[prettyPhoto]"
								title="Product"
								className="caption-link"
							>
								<i className="arrow_expand" />
							</Link>
						</div>
						<div className="item">
							<img src="img/products/prod-single-1.png" alt="" />
							<Link
								href="img/products/prod-big-1.png"
								data-gal="prettyPhoto[prettyPhoto]"
								title="Product"
								className="caption-link"
							>
								<i className="arrow_expand" />
							</Link>
						</div>
					</OwlCarousel>
					{/* </div> */}
					<OwlCarousel
						className="sync2"
						dots={false}
						rtl={false}
						items={3}
						nav={true}
						navSpeed={500}
						responsive={{
							0: { items: 1 },
							480: { items: 3 }
						}}
						responsiveRefreshRate={200}
						navText={[
							"<i class='fa fa-long-arrow-left'></i> PREV",
							"NEXT <i class='fa fa-long-arrow-right'></i>"
						]}
					>
						{/* <div className="sync2"> */}
						<div className="item">
							{' '}
							<a onClick={() => handelChangeImage(0)}>
								{' '}
								<img src="img/products/thumb-1.png" alt="" />{' '}
							</a>{' '}
						</div>
						<div className="item">
							{' '}
							<a onClick={() => handelChangeImage(1)}>
								{' '}
								<img src="img/products/thumb-2.png" alt="" />{' '}
							</a>{' '}
						</div>
						<div className="item">
							{' '}
							<a onClick={() => handelChangeImage(2)}>
								{' '}
								<img src="img/products/thumb-3.png" alt="" />{' '}
							</a>{' '}
						</div>
						<div className="item">
							{' '}
							<a onClick={() => handelChangeImage(3)}>
								{' '}
								<img src="img/products/thumb-1.png" alt="" />{' '}
							</a>{' '}
						</div>
						{/* </div> */}
					</OwlCarousel>
				</div>

				<div className="col-lg-6 pt-50">
					<div className="product-content block-inline">
						<div className="tag-rate">
							<span className="prod-tag tag-1">new</span> <span className="prod-tag tag-2">sale</span>
							<div className="rating">
								<span className="star active" />
								<span className="star active" />
								<span className="star active" />
								<span className="star active" />
								<span className="star active" />
								<span className="fsz-12"> Based on 25 reviews</span>
							</div>
						</div>
						<div className="single-caption">
							<h3 className="section-title">
								<Link href="#">
									{' '}
									<span className="light-font"> organic </span> <strong>pinapple</strong>
								</Link>
							</h3>
							<span className="divider-2" />
							<p className="price">
								<strong className="clr-txt fsz-20">$50.00 </strong>{' '}
								<del className="light-font">$65.00 </del>
							</p>
							<div className="fsz-16">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adiping elit food sed diam nonummy nibh
									euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.{' '}
								</p>
							</div>
							<div className="prod-btns">
								<div className="quantity">
									<button className="btn minus">
										<i className="fa fa-minus-circle" />
									</button>
									<input title="Qty" className="form-control qty" type="text" />
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
								<div className="form-group">
									<label className="checkbox-inline">
										<input defaultValue type="checkbox" /> <span>Ready in stock</span>
									</label>{' '}
								</div>
							</div>
							<ul className="meta">
								<li>
									{' '}
									<strong> SKU </strong> <span>: AB2922-B</span>{' '}
								</li>
								<li>
									{' '}
									<strong> CATEGORY </strong> <span>: Fruits</span>{' '}
								</li>
								<li className="tags-widget">
									{' '}
									<strong> TAGS </strong>{' '}
									<span>
										: <Link href="#">fruits</Link> <Link href="#">vegetables</Link>{' '}
										<Link href="#">juices</Link>
									</span>{' '}
								</li>
							</ul>
							<div className="divider-full-1" />
							<div className="add-cart pt-15">
								<Link href="#" className="theme-btn btn">
									{' '}
									<strong> ADD TO CART </strong>{' '}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
			{/* </div> */}
			{/* </Modal.Dialog> */}
		</Modal>
	);
}

export default CartProducts;
