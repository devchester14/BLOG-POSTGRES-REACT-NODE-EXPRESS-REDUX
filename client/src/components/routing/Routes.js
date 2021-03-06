import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRegister from '../User/auth/UserRegister';
import UserLogin from '../User/auth/Login';
import AdminPosts from '../Admin/post/AdminPosts';
import Landing from '../User/layout/Landing';
import PostForm from '../postAndComment/PostForm';

import { useParams } from 'react-router';

import PostItemAdmin from '../Admin/post/PostItemAdmin';

const Routes = () => {
	const { postId } = useParams();
	return (
		<section className='container'>
			{/* <Alert /> */}
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route exact path='/user/login' celement={<UserLogin />} />
				<Route exact path='/user/register' element={<UserRegister />} />
				<Route exact path='/admin/register' element={<AdminRegister />} />

				<Route exact path='admin/posts' element={<AdminPosts />} />
				<Route exact path='/createpost' element={<PostForm />} />
				<Route
					exact
					path='/adminpostitem/:postid'
					element={<PostItemAdmin />}
				/>
				<Route exact path='/userpostitem/:postid' element={<PostItemUser />} />
			</Routes>
		</section>
	);
};

export default Routes;
