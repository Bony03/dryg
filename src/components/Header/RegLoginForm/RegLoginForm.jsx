import Form from '../../../UI/Form/Form'
import { useState } from 'react'
import s from './RegLoginForm.module.css'

const RegLoginForm = ({ form }) => {
  const [changeForm, setChangeForm] = useState(false)
  return (
    <div className={form ? `${s.container} ${s.active}` : s.container}>
      <div className={s.card}>
        {changeForm ? (
          <div>
            <h1>Register</h1>
            <Form
              method={'POST'}
              labels={['email', 'password', 'repeat password']}
              button={'Register'}
            />
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <Form
              method={'POST'}
              labels={['email', 'password']}
              button={'Login'}
            />
          </div>
        )}
        <div
          className={s.signup}
          onClick={() => {
            setChangeForm(!changeForm)
          }}
        >
          {changeForm ? 'Login' : 'Register'}
        </div>
      </div>
    </div>
  )
}

export default RegLoginForm
