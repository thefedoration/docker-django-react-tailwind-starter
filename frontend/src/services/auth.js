import { useJwt, isExpired } from "react-jwt";
import { postRequest, getRequest } from '../utils/axios';
import axios from 'axios';


export const authService = {
    login,
    logout,
    fetchUser,
    tokenNeedsRefresh,
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
        return onSuccess(response)
      }
    },
    (error, response) => {
      if (onError){
        return onError(error, response)
      }
    }
  )
}

function tokenNeedsRefresh(token) {
  return isExpired(token);
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