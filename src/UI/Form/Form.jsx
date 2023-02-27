import React from 'react'
import s from './Form.module.css'
import MyButton from '../MyButton/MyButton'
const Form = ({ method, labels, button, onclick, action, value, onchange }) => {
  console.log(value)
  return (
    <form method={method}>
      {labels.map((item, index) => {
        return (
          <div className={s.formBlock} key={index}>
            <input
              className={s.input}
              type={item == 'repeat password' ? 'password' : item}
              placeholder=" "
              value={value}
              onChange={(e) => onchange(e.target.value)}
            ></input>
            <label className={s.label} type={item}>
              {item}
            </label>
          </div>
        )
      })}
      <MyButton onclick={onclick}>{button}</MyButton>
    </form>
  )
}

export default Form
