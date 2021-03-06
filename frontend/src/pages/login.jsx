import React, { useState } from "react"

import LayoutAuth from "../components/layoutAuth";

import { authService } from "../services/auth";


const Login = ({history, location, match, authenticated }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const submitForm = (e) => {
		e.preventDefault();  // to not post to the current url
		setLoading(true);

		authService.login(
			e.target.elements['email'].value,
			e.target.elements['password'].value,
			(response) => {
				setError(null);
				history.push('/');  // take user to the application
				//setLoading(false);  // no need, wait for redirect
			},
			(error, response) => {
				setError(response && response.detail ? response.detail : 'could not log in');
				setLoading(false);
			}
		)
	}

  return (
    <LayoutAuth title="Sign in to your account">
      <form className="space-y-6" action="#" onSubmit={submitForm}>

      	{error ? (
      		<div className="rounded-md bg-red-50 p-4">
					  <div className="flex">
					    <div className="flex-shrink-0">
					      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
					      </svg>
					    </div>
					    <div className="ml-3">
					      <h3 className="text-sm font-medium text-red-800">
					        {error}
					      </h3>
					    </div>
					  </div>
					</div>
      	) : ''}

	      <div>
	        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
	          Email address
	        </label>
	        <div className="mt-1">
	          <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
	        </div>
	      </div>

	      <div>
	        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
	          Password
	        </label>
	        <div className="mt-1">
	          <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
	        </div>
	      </div>

	      {/*<div className="flex items-center justify-between">
	      	
	        <div className="flex items-center">
	          <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
	          <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
	            Remember me
	          </label>
	        </div>

	        <div className="text-sm">
	          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
	            Forgot your password?
	          </a>
	        </div>
	      </div>*/}

	      <div>
	        <button type="submit" className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	        	disabled={loading}
	        >
	          {loading ? 'Signing in...' : 'Sign in'}
	        </button>
	      </div>
	    </form>
    </LayoutAuth>
  );
}

export default Login;
