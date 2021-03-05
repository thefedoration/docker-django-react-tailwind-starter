
import { postRequest } from './axios';

// hits jwt token endpoint with username/password
const login = (username, password, successCallback, errorCallback) => {
  return postRequest(
    '/api/token/',
    {'username': username, 'password': password},
    successCallback,
    errorCallback
  )
}

export {
  login,
  // register,
}