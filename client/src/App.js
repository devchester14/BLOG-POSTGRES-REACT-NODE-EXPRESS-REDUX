import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Landing from './components/User/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRegister from './components/Admin/auth/AdminReg';

import UserLogin from './components/User/auth/UserLogin';
import UserRegister from './components/User/auth/UserRegister';
import AdminPosts from './components/Admin/post/AdminPosts';
import PostForm from './components/Admin/post/PostForm';
import AdminLanding from './components/Admin/AdminLayout/AdminLanding';
import UserLanding from './components/User/layout/UserLanding';
import Posts from './components/User/post/Posts';
import AdminLogin from './components/Admin/auth/AdminLogin';
import PostItemAdmin from './components/Admin/post/PostItemAdmin';
import PostItemUser from './components/User/post/PostItem';
import { Provider } from 'react-redux';
import store from './store';
import { loadAdmin, loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import setAuthToken from './utils/setAuthToken';
import NotFound from './components/User/layout/NotFound';

function App() {
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			// store.dispatch(loadUser() || loadAdmin());
		} else if (!localStorage.token) {
			store.dispatch({ type: LOGOUT });
		}

		//LOG OUT FROM ALL TABS IF LOGGED OUT IN ONE TAB
		window.addEventListener('storage', () => {
			if (!localStorage.token) store.dispatch({ type: LOGOUT });
		});
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Routes>
						<Route exact path='/' element={<Landing />} />
						<Route exact path='/posts' element={<Posts />} />
						<Route exact path='user/landing' element={<UserLanding />} />
						<Route exact path='/user/register' element={<UserRegister />} />
						<Route exact path='/user/login' element={<UserLogin />} />
						<Route exact path='/users/posts' element={<Posts />} />
						<Route
							exact
							path='/userpostitem/:postid'
							element={<PostItemUser />}
						/>
						<Route exact path='admin/landing' element={<AdminLanding />} />
						<Route exact path='/admin/register' element={<AdminRegister />} />

						<Route exact path='/admin/login' element={<AdminLogin />} />

						<Route exact path='/admin/posts' element={<AdminPosts />} />

						<Route exact path='/createpost' element={<PostForm />} />

						<Route
							exact
							path='/adminpostitem/:postid'
							element={<PostItemAdmin />}
						/>
						<Route element={<NotFound />} />
						<Route element={<Routes />} />
					</Routes>
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
