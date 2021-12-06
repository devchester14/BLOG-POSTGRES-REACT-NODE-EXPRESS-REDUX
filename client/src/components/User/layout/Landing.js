import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Landing = () => {
	return (
		<Fragment>
			<Navbar />
			<section className='landing'>
				<div className='dark-overlay'>
					<div className='landing-inner'>
						<h1 className='x-large'>BLOG SYSTEM</h1>
						<p className='lead'>
							Create a Blog, share Blog posts and get reviews from others
						</p>
						<div className='buttons'>
							<Link to='/admin/Landing' className='btn btn-primary'>
								ADMIN
							</Link>
							<Link to='/user/Landing' className='btn btn-light'>
								USER
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};
export default Landing;
