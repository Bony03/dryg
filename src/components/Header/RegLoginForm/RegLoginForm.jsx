import MyButton from '../../../UI/MyButton/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import s from './RegLoginForm.module.css'
import { login, registration } from '../../../API/userAPI'
import { setEmail, setPassword, loginFetch } from '../../../store/authSlice'
const RegLoginForm = ({ form }) => {
  const [changeForm, setChangeForm] = useState(false)
  const [passMatch, setPassMatch] = useState(false)
  const click = async (email, password) => {
    if (changeForm) {
      const response = await registration(email, password)
      console.log(response)
    } else {
      const response = await login(email, password)
      console.log(response)
      return response
    }
  }
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.inputs)
  const onchangeEmail = (str) => {
    dispatch(setEmail(str))
  }
  const onchangePass = (str) => {
    dispatch(setPassword(str))
  }
  function repeatPassword(value) {
    if (user.password !== value) {
      setPassMatch(true)
    }
  }

  return (
    <div className={form ? `${s.container} ${s.active}` : s.container}>
      <div className={s.card}>
        {changeForm ? (
          <div>
            <h1>Register</h1>
            <form>
              <div className={s.formBlock}>
                <input
                  className={s.input}
                  placeholder=" "
                  value={user.email}
                  onChange={(e) => onchangeEmail(e.target.value)}
                  type="email"
                ></input>
                <label className={s.label}>Email</label>
              </div>
              <div className={s.formBlock}>
                <input
                  className={s.input}
                  placeholder=" "
                  value={user.password}
                  onChange={(e) => onchangePass(e.target.value)}
                  type="password"
                ></input>
                <label className={s.label}>Password</label>
              </div>
              <div className={s.formBlock}>
                <input
                  className={s.input}
                  placeholder=" "
                  type="password"
                  onBlur={(e) => {
                    repeatPassword(e.target.value)
                  }}
                ></input>
                <label className={s.label}>Repeat Password</label>
                {passMatch && (
                  <h3 style={{ color: 'red' }}>Пароли не совпадают</h3>
                )}
              </div>
              <MyButton
                onclick={(e) => {
                  e.preventDefault()
                  click(user.email, user.password)
                }}
              >
                Register
              </MyButton>
            </form>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form>
              <div className={s.formBlock}>
                <input
                  className={s.input}
                  placeholder=" "
                  value={user.email}
                  onChange={(e) => onchangeEmail(e.target.value)}
                  type="email"
                ></input>
                <label className={s.label}>Email</label>
              </div>
              <div className={s.formBlock}>
                <input
                  className={s.input}
                  placeholder=" "
                  value={user.password}
                  onChange={(e) => onchangePass(e.target.value)}
                  type="password"
                ></input>
                <label className={s.label}>Password</label>
              </div>
              <MyButton
                onclick={(e) => {
                  e.preventDefault()
                  dispatch(
                    loginFetch({ email: user.email, password: user.password })
                  )
                }}
              >
                Login
              </MyButton>
            </form>
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
