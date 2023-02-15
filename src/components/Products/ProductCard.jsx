import React from 'react'
import s from './ProductCard.module.css'

const ProductCard = ({ id, title, colors, sizes, styles }) => {
  return (
    <div className={s.container}>
      <img src={`./products/${id}.jpg`} className={s.image} alt={title}></img>
      <h1 className={s.title}>{title}</h1>
      <hr className={s.hr} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default ProductCard
