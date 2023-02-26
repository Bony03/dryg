import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BackgroundImage from './BackgroundImage/BackgroundImage'
import Products from './Products/Products'
import './ScreenSlider.css'
import { useDispatch, useSelector } from 'react-redux'
import { setBlackTheme, setWhiteTheme } from '../../store/activeSlice'
const documentSizes = {
  height: window.innerHeight,
  width: window.innerWidth,
}

const ScreenSlider = ({ setThemeColor, store }) => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.active.theme)
  return (
    <div style={{ overflow: 'hidden' }}>
      <Swiper
        modules={[Pagination, Mousewheel]}
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
        className={theme === 'black' ? 'black' : 'white'}
        onActiveIndexChange={(swiper) => {
          if (swiper.activeIndex > 0) {
            dispatch(setBlackTheme())
          } else {
            dispatch(setWhiteTheme())
          }
        }}
      >
        <SwiperSlide style={{ padding: '0px 0px' }}>
          <BackgroundImage />
        </SwiperSlide>
        <SwiperSlide>
          <Products store={store} />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ScreenSlider
