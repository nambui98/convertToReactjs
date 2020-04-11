import React from 'react';
import Loading from '../component/Loading';
import Header from '../component/Header';
import Slider from '../component/Slide';
import Organic from '../component/Organic';
import OrganicFarmfood from '../component/OrganicFarmfood';
import OurProducts from '../component/OurProducts';
import NaturixGoods from '../component/NaturixGoods';
import NewsHighlights from '../component/NewsHighlights';
import Deals from '../component/Deals';
import RandomProducts from '../component/RandomProducts';
import Footer from '../component/Footer';
import SubscribeNewsletter from '../component/SubscribeNewsletter';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			// <div className="App">
			// 	{/* <Loading /> */}
			[
				<Slider />,
				<Organic />,
				<OrganicFarmfood />,
				<OurProducts />,
				// <NaturixGoods />,
				<Deals />,
				<RandomProducts />,

				<NewsHighlights />,
				// <Footer />,

				<div id="to-top-mb" className="to-top mb">
					{' '}
					<i className="fa fa-arrow-circle-o-up" />
				</div>
			]

			// </div>
		);
	}
}

export default Home;
