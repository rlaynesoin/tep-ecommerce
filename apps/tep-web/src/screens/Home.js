/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import FooterBanner from '../components/Home/FooterBanner'
import HeroBanner from '../components/Home/HeroBanner'
import Product from '../components/Home/Product'

import productList from '../assets/products.json'

const Home = () => {
  return (
    <div css={styles}>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {productList?.map(product => (
          <Product key={product.id} product={product} />
        ))}
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
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    width: 100%;
  }
`

export default Home
