import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const UserLanding = () => {
	return (
		<Fragment>
			<Navbar />
			<section className='landing'>
				<div className='dark-overlay'>
					<div className='landing-inner'>
						<h1 className='x-large'>BLOG SYSTEM USERS</h1>
						<p className='lead'>
							Create a Blog, share Blog posts and get reviews from others
						</p>
						<div className='buttons'>
							<Link to='/register' className='btn btn-primary'>
								USER REGISTER
							</Link>
							<Link to='/login' className='btn btn-light'>
								USER LOGIN
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};
export default UserLanding;
