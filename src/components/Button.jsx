import React from 'react'

const Button = (props) => {
  const { type, title, className, value } = props;
  return (
    <>
      <button type={type} className={className}>
        {title} {value}
      </button>
    </>
  );
}

export default Button