/* eslint-disable no-underscore-dangle */
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useEffect, useState } from 'react'

import { client, urlFor } from '../../utils/sanityClient'
import Spinner from '../Spinner/Spinner'

const DemoCarousel = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    getServerSideProps()
  }, [])

  const getServerSideProps = async () => {
    const query = '*[_type == "banner"]'
    const result = await client.fetch(query)

    setBanners(result)
  }

  return (
    <>
      {banners != null ? (
        <Carousel autoPlay interval={7000} infiniteLoop showThumbs={false}>
          {banners.map((banner, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <img
                src={urlFor(banner?.image?.asset?._ref)}
                alt={banner?.name}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <Spinner size={250} />
      )}
    </>
  )
}
export default DemoCarousel
