
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://yourrenderappname.onrender.com' : 'http://localhost:8000';

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
    		errorCallback(error)
    	}
    });
}

export {
  getRequest,
  postRequest,
}