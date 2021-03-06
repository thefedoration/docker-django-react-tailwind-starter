
import { postRequest, getRequest } from '../utils/axios';


export const authService = {
    login,
    logout,
    refresh,
    fetchUser,
};

function login(username, password, onSuccess, onError) {
  return postRequest(
    '/api/token/',
    {'username': username, 'password': password},
    (response) => {
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // fetch user config
      fetchUser()

      if (onSuccess){
        onSuccess(response)
      }
    },
    (error, response) => {
      if (onError){
        onError(error, response)
      }
    }
  )
}

function refresh(onSuccess, onError) {
  localStorage.setItem('refreshingAccessToken', true);
  return postRequest(
    '/api/token/refresh/',
    {'refresh': localStorage.getItem('refreshToken')},
    (response) => {
      const accessToken = response.data.access;
      localStorage.setItem('accessToken', accessToken);
      localStorage.removeItem('refreshingAccessToken');

      if (onSuccess){
        onSuccess(response)
      }
    },
    (error, response) => {
      if (onError){
        onError(error, response)
      }
    }
  )
}

function fetchUser(onSuccess, onError) {
  return getRequest(
    '/api/v1/user-config/',
    (response) => {
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      if (onSuccess){
        onSuccess(response)
      }
    },
    (error, response) => {
      if (onError){
        onError(error, response)
      }
    }
  )
}

function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('currentUser');
}