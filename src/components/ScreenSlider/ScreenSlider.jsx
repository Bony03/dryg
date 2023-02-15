import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import Products from '../Products/Products'
import s from '../Header/Header.module.css'
import './ScreenSlider.css'

const documentSizes = {
  height: window.innerHeight,
  width: window.innerWidth,
}

const ScreenSlider = (props) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel]}
        slidesPerView={1}
        direction="vertical"
        height={documentSizes.height}
        width={documentSizes.width}
        init={false}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        mousewheel={true}
        onActiveIndexChange={(swiper) => {
          console.log(swiper)
          const headerContainer = document.querySelector(
            `.${s.headerContainer}`
          )
          const swiperItems = document.querySelector('.swiper')
          if (swiper.activeIndex > 0) {
            headerContainer.classList.remove(s.white)
            headerContainer.classList.add(s.black)
            swiperItems.classList.add('black')
          } else {
            if (headerContainer.classList.contains(s.black)) {
              headerContainer.classList.remove(s.black)
              headerContainer.classList.add(s.white)
            }
            swiperItems.classList.remove('black')
          }
        }}
      >
        <SwiperSlide style={{ padding: '0px 0px' }}>
          <BackgroundImage />
        </SwiperSlide>
        <SwiperSlide>
          <Products store={props.store} />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ScreenSlider
