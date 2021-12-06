import { Fragment } from 'react';
import './App.css';
import Landing from './components/User/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRegister from './components/Admin/auth/AdminReg';
import Navbar from './components/User/layout/Navbar';
import Login from './components/User/auth/Login';
import Register from './components/User/auth/Register';
import Posts from './components/Admin/post/AdminPosts';
import PostForm from './components/Admin/post/PostForm';
import PostItem from './components/Admin/post/PostItem';
import AdminLanding from './components/Admin/AdminLayout/AdminLanding';
import UserLanding from './components/User/layout/UserLanding';
import AdminPosts from './components/User/post/Posts';

function App() {
	return (
		<Router>
			<Fragment>
				<Routes>
					<Route exact path='/' element={<Landing />} />
					<Route exact path='admin/landing' element={<AdminLanding />} />
					<Route exact path='user/landing' element={<UserLanding />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/admin/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/admin/register' element={<AdminRegister />} />
					<Route exact path='/posts' element={<Landing />} />
					<Route exact path='/adminposts' element={<AdminPosts />} />
					<Route exact path='/postItem/:postid' element={<PostItem />} />
					<Route exact path='/createpost' element={<PostForm />} />
					<Route element={Routes} />
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
