import React from 'react';
import { Link } from 'react-router-dom';
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
	);
};
export default Landing;
