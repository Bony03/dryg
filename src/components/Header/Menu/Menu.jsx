import React from 'react'
import s from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveMenuCreator,
  setActiveBasketCreator,
} from '../../../store/reducerActive'
import Basket from '../Basket/Basket'
const Menu = ({ themeColor }) => {
  const counter = useSelector((state) => state.basket.count)
  const active = useSelector((state) => state.active.menu)
  const dispatch = useDispatch()
  return (
    <>
      <nav className={active ? `${s.headerMenu} ${s.active}` : s.headerMenu}>
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
                dispatch(setActiveBasketCreator())
              }}
            >
              Basket
            </a>
          </li>
        </ul>
        <Basket />
        <div
          className={
            themeColor == 'black' ? `${s.menuIcon} ${s.black}` : s.menuIcon
          }
          onClick={() => {
            dispatch(setActiveMenuCreator())
          }}
        >
          <span></span>
        </div>
      </nav>
    </>
  )
}

export default Menu
