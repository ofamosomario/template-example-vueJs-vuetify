import axios from 'axios'

export default() => {
	
	// const instance = axios.create({
	// 	baseURL: 'http://localhost:3000', 
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'Access-Control-Allow-Origin': '*'
	// 	}		
	// });

	// instance.interceptors.request.use(function (config) {
	// 	const authHeaders = JSON.parse(window.localStorage.getItem('authHeaders'));

	// 	if( authHeaders ) {
	// 		config.headers[config.method] = {
	// 			'access-token': authHeaders['access-token'],
	// 			'client': authHeaders['client'],
	// 			'uid': authHeaders['uid']
	// 		}
	// 	}

	// 	return config;

	// });

	// instance.interceptors.response.use(function (response) {
		
	// 	if(response.headers['access-token']) {
	// 	  const authHeaders = {
	// 			'access-token': response.headers['access-token'],
	// 			'client': response.headers['client'],
	// 			'uid': response.headers['uid'],
	// 			'expiry': response.headers['expiry'],
	// 			'token-type': response.headers['token-type']
	// 	  };
	// 	  window.localStorage.setItem('authHeaders', JSON.stringify(authHeaders));
	// 	} else {
	// 	  //window.localStorage.removeItem('authHeaders');
	// 	}

	// 	return response;

	//   }, function (error) {
	// 		return Promise.reject(error)
	//   });

	// return instance
}