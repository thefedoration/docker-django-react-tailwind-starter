import React from "react";

import Header from "./header";

const Layout = ({ children, title }) => (
  <React.Fragment>
    <div className="bg-gray-800 pb-32">
      <Header />
      
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>
        </div>
      </header>
    </div>
    <main className="-mt-32">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6" style={{minHeight: '300px'}}>
          {children}
        </div>
        {/* /End replace */}
      </div>
    </main>
  </React.Fragment>
);

export default Layout;

