
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://yourrenderappname.onrender.com' : 'http://localhost:8000';

// set interceptors to pass auth token if we have it in the local storage
axios.interceptors.request.use(
  config => {
    // const { origin } = new URL(config.url);
    // const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('accessToken');
    // if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    // }
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
    	if (errorCallback){
    		errorCallback(error, error.response && error.response.data)
    	}
    });
}

export {
  getRequest,
  postRequest,
}