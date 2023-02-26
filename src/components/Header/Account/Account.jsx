import { useDispatch } from 'react-redux'
import s from './Account.module.css'
import { setActiveFrom } from '../../../store/activeSlice'
const Account = ({ active }) => {
  const dispatch = useDispatch()

  return (
    <div
      className={
        active === 'black' || active.menu
          ? `${s.account} ${s.black}`
          : s.account
      }
      onClick={() => {
        dispatch(setActiveFrom())
      }}
    >
      <span className={s.basket}>
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
  )
}

export default Account
