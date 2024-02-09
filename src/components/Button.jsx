import React from 'react'

const Button = (props) => {
  const { type, title, className, value, onClick } = props;
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {title} {value}
      </button>
    </>
  );
}

export default Button