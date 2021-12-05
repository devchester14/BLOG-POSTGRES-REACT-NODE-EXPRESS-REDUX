import React from 'react';
import { Link } from 'react-router-dom';
const AdminLanding = () => {
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>BLOG SYSTEM ADMINS</h1>
					<p className='lead'>
						Create a Blog, share Blog posts and get reviews from others
					</p>
					<div className='buttons'>
						<Link to='/admin/register' className='btn btn-primary'>
							ADMIN REGISTER
						</Link>
						<Link to='/admin/login' className='btn btn-light'>
							ADMIN LOGIN
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AdminLanding;
