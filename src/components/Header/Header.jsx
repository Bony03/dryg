import React from 'react'
import s from './Header.module.css'
import { useSelector } from 'react-redux'
import RegLoginForm from './RegLoginForm/RegLoginForm'
import Menu from './Menu/Menu'
import Account from './Account/Account'
const Header = () => {
  const active = useSelector((state) => state.active)
  return (
    <div>
      <div className={active.menu ? `${s.header} ${s.active}` : s.header}>
        <div className={s.headerContainer}>
          <div
            className={
              active.theme === 'black'
                ? `${s.headerLogo} ${s.black}`
                : s.headerLogo
            }
          >
            Dryg
          </div>
          <div className={s.menuElements}>
            <Menu active={active} />
            <Account active={active.theme} />
          </div>

          <RegLoginForm form={active.form} />
        </div>
      </div>
    </div>
  )
}

export default Header
