
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://yourrenderappname.onrender.com' : 'http://localhost:8000';
const allowed401s = ['/api/token/']; // most 401s should take user to /login/. add valid 401s here


// set interceptors to pass auth token if we have it in the local storage
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const getRequest = (url, successCallback, errorCallback) => {
  return axios.get(BASE_URL + url)
    .then(response => {
    	if (successCallback){
    		successCallback(response)
    	}
    })
    .catch((error) => {
      // take user to login if they just made an invalid 401 request
      if (error.response.status === 401 && !allowed401s.includes(url)){
        return window.location = '/login/';
      }

    	if (errorCallback){
    		errorCallback(error)
    	}
    });
}

const postRequest = (url, data, successCallback, errorCallback) => {
  return axios.post(BASE_URL + url, data)
    .then((response) => {
    	if (successCallback){
    		successCallback(response)
    	}
    })
    .catch((error) => {
      // take user to login if they just made an invalid 401 request
      if (error.response.status === 401 && !allowed401s.includes(url)){
        return window.location = '/login/';
      }

    	if (errorCallback){
    		errorCallback(error, error.response && error.response.data)
    	}
    });
}

export {
  getRequest,
  postRequest,
}