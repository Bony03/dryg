import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import s from './Products.module.css'
import ProductCard from './ProductCard'

const Products = (props) => {
  return (
    <div className={s.container}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        direction="horizontal"
        init={false}
        className="secondSwiper"
        spaceBetween={10}
        onSlideNextTransitionEnd={(swiper) => {
          console.log('next')
        }}
        onSlidePrevTransitionEnd={(swiper) => {
          console.log('prev')
        }}
        lazy={true}
        breakpoints={{
          550: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
      >
        {props.store.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductCard
                id={item.id}
                title={item.title}
                sizes={item.sizes}
                colors={item.colors}
                styles={item.styles}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Products
