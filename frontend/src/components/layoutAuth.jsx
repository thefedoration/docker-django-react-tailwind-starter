import React from "react";

// layout to be used for Login/Register views
const LayoutAuth = ({ children, title, subtitle }) => (
  <div className="min-h-screen bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        { title }
      </h2>
      {subtitle ? (
        <p className="mt-2 text-center text-sm text-white opacity-50 max-w">
          { subtitle }
        </p>
      ) : ''}
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow rounded-md sm:rounded-lg sm:px-10 mx-4 sm:mx-0">
        { children }
      </div>
    </div>
  </div>
);

export default LayoutAuth;

