import React from 'react'
import s from './MyButton.module.css'
const MyButton = ({ children, onclick }) => {
  return (
    <button onClick={onclick} className={s.button}>
      <p>{children}</p>
      <svg
        strokeWidth="4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  )
}

export default MyButton
