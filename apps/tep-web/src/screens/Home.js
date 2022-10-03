/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'

import FooterBanner from '../components/Home/FooterBanner'
import Product from '../components/Home/Product'
import DemoCarousel from '../components/Carousel'
import { getCustomProducts } from '../utils/useProducts'
import Spinner from '../components/Spinner/Spinner'

const Home = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    getLastProduct()
  }, [])

  const getLastProduct = async () => {
    const data = {
      status: true,
      desc: true,
    }
    const result = await getCustomProducts(data)

    setProducts(result)
  }

  return (
    <div css={styles}>
      <div className="divCarousel">
        <DemoCarousel autoPlay />
      </div>
      <div className="products-heading">
        <h2>Nuevos articulos</h2>
        <p>Te mostramos los últimos articulos ingresados.</p>
      </div>

      <div className="products-container">
        {products ? (
          products?.map(
            (product, index) =>
              // eslint-disable-next-line no-underscore-dangle
              index < 10 && <Product key={product._id} product={product} />
          )
        ) : (
          <Spinner size={100} />
        )}
      </div>

      <div className="products-heading">
        <h2>Departamentos</h2>
        <p>Listado de los diferentes departamentos</p>
      </div>

      <FooterBanner />
    </div>
  )
}

const styles = css`
  .products-heading {
    text-align: center;
    margin: 40px 0px;
    color: #324d67;
  }
  .products-heading h2 {
    font-size: 40px;
    font-weight: 800;
  }
  .products-heading p {
    font-size: 16px;
    font-weight: 200;
  }
  .divCarousel {
    img {
      border-radius: 20px;
      height: 220px;
    }
  }
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    width: 100%;
  }

  @media (min-width: 576px) {
    .divCarousel {
      img {
        border-radius: 20px;
        height: 400px;
      }
    }
  }
`

export default Home
