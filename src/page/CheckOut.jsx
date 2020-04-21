import React from 'react';
import PropTypes from 'prop-types';

CheckOut.propTypes = {};

function CheckOut(props) {
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
								<a href="#"> Home </a> Checkout
							</li>
						</ol>
					</div>
				</div>
			</section>
			{/*Breadcrumb Section End*/}
			{/* Checkout Starts*/}
			<section className="checkout-wrap sec-space">
				<div className="container">
					<div className="panel-group chk-panel" id="accordion">
						<div className="panel">
							<div className="chk-heading">
								<a
									className="fsz-30"
									data-toggle="collapse"
									data-parent="#accordion"
									href="#collapseOne"
								>
									<span className="light-font">01. checkout </span> <strong>method </strong>
								</a>
							</div>
							<div id="collapseOne" className="panel-collapse collapse in">
								<div className="chk-body pt-15 block-inline">
									<div className="col-md-6">
										<form className="chk-form">
											<h2 className="title-1">check as a guest or register</h2>
											<p>Register with us for future convenience:</p>
											<div className="form-group block-inline ">
												<label className="radio-inline title-1">
													{' '}
													<input type="radio" name="chk" defaultValue />{' '}
													<span> checkt as guest </span>
												</label>
												<label className="radio-inline title-1">
													{' '}
													<input type="radio" name="chk" defaultValue />{' '}
													<span> register </span>
												</label>
											</div>
											<h2 className="title-1"> register and save time ! </h2>
											<p>Register with us for future convenience:</p>
											<ul>
												<li>
													{' '}
													<span className="fa fa-arrow-circle-o-right" /> Fast and easy check
													out{' '}
												</li>
												<li>
													{' '}
													<span className="fa fa-arrow-circle-o-right" /> Easy access to your
													order history and status{' '}
												</li>
											</ul>
											<div className="form-group block-inline text-right">
												<button className="theme-btn-sm-2 btn submit-btn" type="submit">
													{' '}
													<b> Continue </b>{' '}
												</button>
											</div>
										</form>
									</div>
									<div className="col-md-6">
										<form className="registed-form">
											<h2 className="title-1"> already registed ? </h2>
											<p className> Please log in below : </p>
											<div className="form-group block-inline">
												<label>
													{' '}
													Email Address <span className="red-clr"> * </span>{' '}
												</label>
												<input
													required
													type="text"
													title
													data-placement="bottom"
													data-toggle="tooltip"
													defaultValue
													name="cf_name"
													className="form-control name input-your-name"
												/>
											</div>
											<div className="form-group block-inline">
												<label>
													{' '}
													Password <span className="red-clr"> * </span>{' '}
												</label>
												<input
													required
													type="text"
													title
													data-placement="bottom"
													data-toggle="tooltip"
													defaultValue
													name="cf_name"
													className="form-control name input-your-name"
												/>
											</div>
											<label className="red-clr">* Required Filelds</label>
											<div className="form-group block-inline text-right">
												<b className="black-color fpw"> Forgot Your Password ? </b>
												<button className="theme-btn-sm-3 btn submit-btn" type="submit">
													{' '}
													<b> Log In </b>{' '}
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="chk-heading">
								<a
									className="fsz-30"
									data-toggle="collapse"
									data-parent="#accordion"
									href="#collapseTwo"
								>
									<span className="light-font">02. billing </span> <strong>information </strong>
								</a>
							</div>
							<div id="collapseTwo" className="panel-collapse collapse">
								<div className="chk-body pt-15 block-inline">
									<p> BILLING INFORMATION HERE </p>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="chk-heading">
								<a
									className="fsz-30"
									data-toggle="collapse"
									data-parent="#accordion"
									href="#collapseThree"
								>
									<span className="light-font">03. shipping </span> <strong>information </strong>
								</a>
							</div>
							<div id="collapseThree" className="panel-collapse collapse">
								<div className="chk-body pt-15 block-inline">
									<p> SHIPPING INFORMATION HERE </p>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="chk-heading">
								<a
									className="fsz-30"
									data-toggle="collapse"
									data-parent="#accordion"
									href="#collapseFour"
								>
									<span className="light-font">04. shipping </span> <strong>method </strong>
								</a>
							</div>
							<div id="collapseFour" className="panel-collapse collapse">
								<div className="chk-body pt-15 block-inline">
									<p> SHIPPING METHOD HERE </p>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="chk-heading">
								<a
									className="fsz-30"
									data-toggle="collapse"
									data-parent="#accordion"
									href="#collapseFive"
								>
									<span className="light-font">05. payment </span> <strong>information </strong>
								</a>
							</div>
							<div id="collapseFive" className="panel-collapse collapse">
								<div className="chk-body pt-15 block-inline">
									<p> PAYMENT INFORMATION HERE </p>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="chk-heading">
								<a
									className="fsz-30"
									data-toggle="collapse"
									data-parent="#accordion"
									href="#collapseSix"
								>
									<span className="light-font">02. order </span> <strong>review </strong>
								</a>
							</div>
							<div id="collapseSix" className="panel-collapse collapse">
								<div className="chk-body pt-15 block-inline">
									<p> ORDER REVIEW HERE </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default CheckOut;
