import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './Basket.module.css'
import { deleteFromBasket, changeQuantity } from '../../../store/basketSlice'
const Basket = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const basketsElements = useSelector((state) => state.basket.basket)
  const active = useSelector((state) => state.active.basket)
  useEffect(() => {
    if (basketsElements) {
      let k = 0
      basketsElements.map((item) => {
        k = k + item.price * item.quantity
      })
      setTotalPrice(k)
    }
  }, [basketsElements])
  const dispatch = useDispatch()
  const deleleHandler = (id, quantity) => {
    dispatch(deleteFromBasket({ id, quantity }))
  }
  const changeQuantityHandler = (id, quantity) => {
    dispatch(changeQuantity({ id, quantity }))
  }
  return (
    <div className={active ? `${s.container} ${s.active}` : s.container}>
      {basketsElements.length > 0 ? (
        basketsElements.map((item) => {
          return (
            <div className={s.element} key={item.id}>
              <img className={s.image} src={`/products/${item.id}.jpg`}></img>
              <div className={s.dicription}>
                <h1 className={s.title}>Назва: {item.title}</h1>
                <h1 className={s.color}>Колір: {item.color}</h1>
                <h1 className={s.size}>Розмір: {item.size}</h1>
                <h1 className={s.quantity}>
                  Кількість:{' '}
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      changeQuantityHandler(item.id, e.target.value)
                    }
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </h1>
              </div>
              <div
                className={s.icon}
                onClick={() => {
                  deleleHandler(item.id, item.quantity)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  enableBackground="new 0 0 32 32"
                >
                  <g id="trash">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#333333"
                      d="M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001
		c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17
		c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10
		c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002
		c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#333333"
                      d="M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9
		c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#333333"
                      d="M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2
		c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#333333"
                      d="M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2
		c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          )
        })
      ) : (
        <div>Ваша корзина пуста</div>
      )}
      <h1 className={s.total}>Total: {totalPrice} uah</h1>
    </div>
  )
}

export default Basket
