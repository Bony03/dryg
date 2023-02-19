import React from 'react'
import s from './ProductCard.module.css'
import BuyButton from '../../../UI/MyButton/BuyButton/BuyButton'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../../store/reducerBasket'

const ProductCard = ({ id, title, colors, sizes, styles, price }) => {
  const dispatch = useDispatch()
  function addToBasketHandler(id, title, price, color, size, quantity = 1) {
    dispatch(addToBasket({ id, title, price, color, size, quantity }))
  }
  return (
    <div className={s.container}>
      <img src={`./products/${id}.jpg`} className={s.image} alt={title}></img>
      <h1 className={s.title}>{title}</h1>
      <hr className={s.hr} />
      <h2>Colors: {colors}</h2>
      <h2>Style: {styles}</h2>
      <h2>Sizes: {sizes}</h2>
      <BuyButton
        onclick={() => {
          addToBasketHandler(id, title, price, colors, sizes)
        }}
      >
        Buy
      </BuyButton>
    </div>
  )
}

export default ProductCard
