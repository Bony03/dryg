import React from 'react'
import s from './Form.module.css'
import MyButton from '../MyButton/MyButton'
const Form = ({ method, labels, button, onclick }) => {
  return (
    <form method={method}>
      {labels.map((item, index) => {
        return (
          <div className={s.formBlock} key={index}>
            <input
              className={s.input}
              type={item == 'repeat password' ? 'password' : item}
              placeholder=" "
            ></input>
            <label className={s.label} type={item}>
              {item}
            </label>
          </div>
        )
      })}
      <MyButton>{button}</MyButton>
    </form>
  )
}

export default Form
