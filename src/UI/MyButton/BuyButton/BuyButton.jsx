import React from 'react'
import s from './BuyButton.module.css'
const BuyButton = ({ children, onclick, id }) => {
  return (
    <button
      onClick={(e) => {
        onclick()
      }}
      className={s.button}
      number={id}
    >
      <p cssattr={children}>{children}</p>
      <svg
        width="67"
        height="53"
        viewBox="0 0 67 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 2.00001C11.5 2.00001 8.5 0.999986 11.5 9.99999M11.5 9.99999L19 43H38H56L65 9.99999C65 9.99999 47 9.99999 38 9.99999C29 9.99999 11.5 9.99999 11.5 9.99999ZM22.5 51.5H32M54.5 51.5H44.5" />
      </svg>
    </button>
  )
}

export default BuyButton
