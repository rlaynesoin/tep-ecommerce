/* eslint-disable no-underscore-dangle */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'

import { client, urlFor } from '../../utils/sanityClient'

import arrowLeft from '../../assets/icons/arrow_left.svg'
import arrowRight from '../../assets/icons/arrow_right.svg'

const Carousel = () => {
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

  const handleClick = plus => {
    if (plus) {
      // eslint-disable-next-line no-unused-expressions
      count + 1 < banners?.length ? setCount(count + 1) : setCount(0)
    } else {
      // eslint-disable-next-line no-unused-expressions
      count - 1 >= 0 ? setCount(count - 1) : setCount(banners?.length - 1)
    }
  }

  const handleClickCircle = index => setCount(index)

  return (
    <div css={styles}>
      <div className="banner-container">
        <div className="img-container">
          <button
            className="button-left"
            onClick={() => handleClick()}
            type="button"
          >
            <img src={arrowLeft} alt="arrow_left" />
          </button>

          <button
            className="button-right"
            onClick={() => handleClick(true)}
            type="button"
          >
            <img src={arrowRight} alt="arrow_right" />
          </button>

          <div className="circles-container">
            {banners.map(
              (banner, index) =>
                index < 5 && (
                  // eslint-disable-next-line react/no-array-index-key, jsx-a11y/control-has-associated-label
                  <button
                    type="button"
                    className={`circle-banner${
                      index === count ? '-active' : ''
                    }`}
                    onClick={() => handleClickCircle(index)}
                  />
                )
            )}
          </div>

          {banners[0] && (
            <img
              src={urlFor(banners[count]?.image?.asset?._ref)}
              alt={banners[count]?.name}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const styles = css`
  .img-container {
    height: 200px;
    position: relative;
    transition-property: width;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
    .button-left {
      background-color: transparent;
      border: none;
      position: absolute;
      left: 5px;
      top: 45%;
      width: 35px;
      height: 35px;
      z-index: 1000;
    }
    .button-right {
      background-color: transparent;
      position: absolute;
      border: none;
      top: 45%;
      right: 5px;
      width: 35px;
      height: 35px;
      z-index: 1000;
    }

    .circles-container {
      display: none;
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 100px;
    }

    .circle-banner {
      border-radius: 100px;
      border: none;
      background-color: #bfbfbf;
      width: 15px;
      height: 15px;
      margin: 0 5px;
    }

    .circle-banner-active {
      border-radius: 100px;
      border: none;
      background-color: white;
      width: 15px;
      height: 15px;
      margin: 0 5px;
    }
  }

  @media (min-width: 576px) {
    .img-container {
      height: 400px;
      .button-left {
        background-color: transparent;
        border: none;
        position: absolute;
        left: 5px;
        top: 45%;
        width: 35px;
        height: 35px;
        z-index: 1000;
      }
      .button-right {
        background-color: transparent;
        position: absolute;
        border: none;
        top: 45%;
        right: 5px;
        width: 35px;
        height: 35px;
        z-index: 1000;
      }

      .circles-container {
        display: flex;
      }
    }
  }
`

export default Carousel
