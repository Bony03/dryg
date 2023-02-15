import React from 'react'
import s from './ProductCard.module.css'
import BuyButton from '../../../UI/MyButton/BuyButton/BuyButton'

const ProductCard = ({ id, title, colors, sizes, styles, setCounter }) => {
  return (
    <div className={s.container}>
      <img src={`./products/${id}.jpg`} className={s.image} alt={title}></img>
      <h1 className={s.title}>{title}</h1>
      <hr className={s.hr} />
      <h2>Colors: {colors}</h2>
      <h2>Style: {styles}</h2>
      <h2>Sizes: {sizes}</h2>
      <BuyButton onclick={setCounter}>Buy</BuyButton>
    </div>
  )
}

export default ProductCard
