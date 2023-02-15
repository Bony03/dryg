import React from 'react'
import s from './Header.module.css'
import { useState } from 'react'
import RegLoginForm from '../RegLoginForm/RegLoginForm'
const Header = () => {
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
        <div className={`${s.headerContainer} ${s.white}`}>
          <div className={s.headerLogo}>Dryg</div>
          <nav
            className={
              active.menu ? `${s.headerMenu} ${s.active}` : s.headerMenu
            }
          >
            <ul className={s.menuList}>
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
            <div
              className={s.account}
              onClick={() => {
                activeHandler('form')
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="white"
                >
                  <g id="_01_align_center" data-name="01 align center">
                    <path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z" />
                    <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" />
                  </g>
                </svg>
              </span>
            </div>
            <div
              className={s.menuIcon}
              onClick={() => {
                activeHandler('menu')
              }}
            >
              <span></span>
            </div>
          </nav>
        </div>
      </div>
      <RegLoginForm form={active.form} />
    </div>
  )
}

export default Header
