import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/" className="tracking-widest">
        LoginPage
      </Link>
    </div>
  );
}

export default PageNotFound;