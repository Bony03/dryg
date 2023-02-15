import React from 'react'
import s from './Menu.module.css'
import Basket from './Basket/Basket'

const Menu = ({ activeHandler, active, themeColor, counter }) => {
  return (
    <>
      <div
        className={
          themeColor == 'black' ? `${s.headerLogo} ${s.black}` : s.headerLogo
        }
      >
        Dryg
      </div>
      <nav
        className={active.menu ? `${s.headerMenu} ${s.active}` : s.headerMenu}
      >
        <ul
          className={
            themeColor == 'black' ? `${s.menuList} ${s.black}` : s.menuList
          }
        >
          <li className={s.menuItem}>
            <a>Store</a>
          </li>
          <li className={s.menuItem}>
            <a>Galary</a>
          </li>
          <li className={s.menuItem}>
            <a>Contacts</a>
          </li>
          <li className={s.menuItem}>
            <a>About</a>
          </li>
        </ul>
        <Basket
          activeHandler={activeHandler}
          themeColor={themeColor}
          counter={counter}
        />
        <div
          className={
            themeColor == 'black' ? `${s.menuIcon} ${s.black}` : s.menuIcon
          }
          onClick={() => {
            activeHandler('menu')
          }}
        >
          <span></span>
        </div>
      </nav>
    </>
  )
}

export default Menu
