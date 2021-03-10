
import axios from 'axios';
import { authService } from "../services/auth";

const BASE_URL = process.env.NODE_ENV === 'production' ? `https://${process.env.REACT_APP_RENDER_API_SERVICE}.onrender.com` : 'http://localhost:8000';
const allowed401s = ['/api/token/', '/api/token/refresh/']; // most 401s should take user to /login/. add valid 401s here


// set interceptors to pass auth token if we have it in the local storage
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token){
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// if response is 401 and it's not a retry, refresh access token
axios.interceptors.response.use((response) => {
   return response
}, 
function (error, response) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry && !allowed401s.includes(originalRequest.url.replace(BASE_URL, ''))) {
    originalRequest._retry = true;
    return postRequest(
      '/api/token/refresh/',
      {'refresh': localStorage.getItem('refreshToken')},
      (response) => {
        const accessToken = response.data.access;
        localStorage.setItem('accessToken', accessToken);
        return axios(originalRequest);
      },
      (error, response) => {
        // should we do anything here?
        // if (onError){
        //   console.log("returnign onerror")
        //   return onError(error, response)
        // }
      }
    )
  }

  // return Error object with Promise
  return Promise.reject(error, error.response.data);
})


const getRequest = (url, successCallback, errorCallback) => {
  return axios.get(BASE_URL + url)
    .then(response => {
        if (successCallback){
            return successCallback(response)
        }
    })
    .catch((error) => {
      // take user to login if they just made an invalid 401 request
      if (error.response && error.response.status === 401 && !allowed401s.includes(url)){
        window.location = `/login/?next=${window.location.href}`;
      } else {
        if (errorCallback){
          return errorCallback(error)
        }
      }
    });
}

const postRequest = (url, data, successCallback, errorCallback) => {
  return axios.post(BASE_URL + url, data)
    .then((response) => {
        if (successCallback){
            return successCallback(response)
        }
    })
    .catch((error) => {
      // take user to login if they just made an invalid 401 request
      if (error.response && error.response.status === 401 && !allowed401s.includes(url)){
        window.location = `/login/?next=${window.location.href}`;
      } else {
        if (errorCallback){
          return errorCallback(error)
        }
      }
    });
}

export {
  getRequest,
  postRequest,
}