import React from 'react';
import { Link, Redirect } from 'react-router-dom';
const Landing = () => {
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>BLOG SYSTEM</h1>
					<p className='lead'>
						Create a Blog, share Blog posts and get reviews from others
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-primary'>
							Sign Up
						</Link>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Landing;
