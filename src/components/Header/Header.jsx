import React from 'react'
import s from './Header.module.css'
import { useState } from 'react'
import RegLoginForm from './RegLoginForm/RegLoginForm'
import Menu from './Menu/Menu'
import Account from './Account/Account'
const Header = ({ themeColor }) => {
  const [active, setActive] = useState({
    menu: false,
    form: false,
    basket: false,
  })
  function activeHandler(e) {
    if (e === 'menu') {
      setActive({ ...active, menu: !active.menu })
    } else if (e === 'form') {
      setActive({ ...active, form: !active.form })
    } else {
      setActive({ ...active, basket: !active.basket })
    }
  }
  return (
    <div>
      <div className={active.menu ? `${s.header} ${s.active}` : s.header}>
        <div className={s.headerContainer}>
          <div
            className={
              themeColor == 'black'
                ? `${s.headerLogo} ${s.black}`
                : s.headerLogo
            }
          >
            Dryg
          </div>
          <div className={s.menuElements}>
            <Menu
              activeHandler={activeHandler}
              active={active}
              themeColor={themeColor}
            />
            <Account
              activeHandler={activeHandler}
              themeColor={themeColor}
              active={active.menu}
            />
          </div>

          <RegLoginForm form={active.form} />
        </div>
      </div>
    </div>
  )
}

export default Header
