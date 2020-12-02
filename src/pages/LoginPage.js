import React, { useState } from 'react';
import {
	useHistory,
	useLocation
} from 'react-router-dom';
import auth from '../Authentication';

const LoginPage = () => {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };

	const [credentials, setCredentials] = useState({login: '', password: ''});

	const handleSubmit = (e) => {
		e.preventDefault();
		logIn(credentials);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;

		setCredentials({
			...credentials,
			[name]: value
		});
	}
	
	let logIn = (credentials) => {
		auth.login(() => { 
			alert(JSON.stringify(location.state));
			history.replace(from);
		}, credentials);
	}

	const { login, password } = credentials;

	return ( 
		<div id='login-page-container' class='wrapper'>
		<div class="login-page-border">
			<h3>Please login into Website</h3>
			<form onSubmit={handleSubmit}>
				<div class="input-box">
					<label htmlFor="">Login:</label>
					<input type="text" name="login" placeholder="Enter login" value={login} onChange={handleChange} />
				</div>
				<div class="input-box">
					<label htmlFor="">Password:</label>
					<input type="text" name="password" placeholder="Enter password" value={password} onChange={handleChange} />
				</div>
				<div class="btnjobs-container">
					<button class="btn-jobs" type="submit">Login</button>		
				</div>
			</form>
			{JSON.stringify(credentials, null, 2)}
		</div>
		</div>
	);
}

export default LoginPage;