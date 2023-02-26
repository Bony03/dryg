import React from 'react'
import s from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMenu, setActiveBasket } from '../../../store/activeSlice'
import Basket from '../Basket/Basket'
const Menu = () => {
  const counter = useSelector((state) => state.basket.count)
  const active = useSelector((state) => state.active)
  const dispatch = useDispatch()
  return (
    <>
      <nav
        className={active.menu ? `${s.headerMenu} ${s.active}` : s.headerMenu}
      >
        <ul
          className={
            active.theme === 'black' ? `${s.menuList} ${s.black}` : s.menuList
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
                dispatch(setActiveBasket())
              }}
            >
              Basket
            </a>
          </li>
        </ul>
        <Basket />
        <div
          className={
            active.theme === 'black' ? `${s.menuIcon} ${s.black}` : s.menuIcon
          }
          onClick={() => {
            dispatch(setActiveMenu())
          }}
        >
          <span></span>
        </div>
      </nav>
    </>
  )
}

export default Menu
