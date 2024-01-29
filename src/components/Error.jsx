import React from 'react'

const Error = ({error}) => {
  return (
    <div>
        <h1>Opps..Something went wrong 😢</h1>
        <h2>{error}</h2>
    </div>
  );
}

export default Error;