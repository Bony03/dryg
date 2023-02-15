import React from 'react'
import s from './Header.module.css'
import { useState } from 'react'
import RegLoginForm from './RegLoginForm/RegLoginForm'
import Menu from './Menu/Menu'
const Header = ({ themeColor, counter }) => {
  const [active, setActive] = useState({ menu: false, form: false })
  function activeHandler(e) {
    if (e === 'menu') {
      setActive({ ...active, menu: !active.menu })
    } else if (e === 'form') {
      setActive({ ...active, form: !active.form })
    }
  }
  return (
    <div>
      <div className={active.menu ? `${s.header} ${s.active}` : s.header}>
        <div className={s.headerContainer}>
          <Menu
            activeHandler={activeHandler}
            active={active}
            themeColor={themeColor}
            counter={counter}
          />
        </div>
      </div>
      <RegLoginForm form={active.form} />
    </div>
  )
}

export default Header
