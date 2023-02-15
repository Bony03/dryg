import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BackgroundImage from './BackgroundImage/BackgroundImage'
import Products from './Products/Products'
import './ScreenSlider.css'
const documentSizes = {
  height: window.innerHeight,
  width: window.innerWidth,
}

const ScreenSlider = ({ themeColor, setThemeColor, store }) => {
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
          if (swiper.activeIndex > 0) {
            setThemeColor('black')
          } else {
            setThemeColor('white')
          }
        }}
      >
        <SwiperSlide style={{ padding: '0px 0px' }}>
          <BackgroundImage />
        </SwiperSlide>
        <SwiperSlide>
          <Products store={store} />
        </SwiperSlide>
        <SwiperSlide>asdasd</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ScreenSlider
