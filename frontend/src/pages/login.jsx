import React from "react"
// import {
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import LayoutAuth from "../components/layoutAuth";


const Login = ({history, location, match, authenticated}) => {

  return (
    <LayoutAuth title="Sign in to your account">
      <form className="space-y-6" action="#" method="POST">
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

	      <div className="flex items-center justify-between">
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
	      </div>

	      <div>
	        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
	          Sign in
	        </button>
	      </div>
	    </form>
    </LayoutAuth>
  );
}

export default Login;
