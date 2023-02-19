import React from 'react'
import s from './Menu.module.css'
import { useSelector } from 'react-redux'
import Basket from './Basket/Basket'
const Menu = ({ activeHandler, active, themeColor }) => {
  const counter = useSelector((state) => state.basket.count)
  return (
    <>
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
            <a>Contacts</a>
          </li>
          <li className={s.menuItem}>
            <a>About</a>
          </li>
          <li className={s.menuItem}>
            <a
              className={s.basket}
              counter={counter}
              onClick={() => {
                activeHandler('basket')
              }}
            >
              Basket
            </a>
          </li>
        </ul>
        <Basket active={active} />
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
