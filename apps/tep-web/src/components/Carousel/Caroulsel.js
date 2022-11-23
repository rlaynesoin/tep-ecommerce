/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

import { client, urlFor } from '../../utils/sanityClient'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slider = () => {
  const [banners, setBanners] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    getServerSideProps()
    switchBanner()
  }, [])

  const getServerSideProps = async () => {
    const query = '*[_type == "banner"]'
    const result = await client.fetch(query)

    setBanners(result)
  }

  const switchBanner = () => {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      count + 1 < banners?.length ? setCount(count + 1) : setCount(0)
    }, 5000)
  }

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      cssMode
      navigation
      pagination
      mousewheel
      keyboard
      modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {banners.map(
        (banner, index) =>
          index < 5 && (
            <SwiperSlide>
              <img
                src={urlFor(banner?.image?.asset?._ref)}
                alt={banner?.name}
              />
            </SwiperSlide>
          )
      )}
    </Swiper>
  )
}

export default Slider
