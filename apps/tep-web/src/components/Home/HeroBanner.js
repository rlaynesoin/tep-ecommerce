/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import earphones from '../../assets/img/headphones_c_1.webp'

const HeroBanner = () => {
  return (
    <div css={styles}>
      <div>
        <p className="beats-solo">Hola mundo</p>
        <h3>Hola mundo</h3>
        <h1>Hola</h1>
        <img src={earphones} alt="headphones" className="hero-banner-image" />

        <div>
          <Link to="/product">
            <button type="button">Hola mundo</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Hola mundo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = css`
  padding: 100px 40px;
  background-color: #dcdcdc;
  border-radius: 15px;
  position: relative;
  height: 500px;
  line-height: 0.9;
  width: 100%;

  .beats-solo {
    font-size: 20px;
  }

  button {
    border-radius: 15px;
    padding: 10px 16px;
    background-color: #f02d34;
    color: white;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    z-index: 10000 !important;
  }

  h3 {
    font-size: 4rem;
    margin-top: 4px;
  }

  h1 {
    color: white;
    font-size: 10em;
    margin-left: -20px;
    text-transform: uppercase;
  }

  .hero-banner-image {
    position: absolute;
    top: 0%;
    right: 20%;
    width: 450px;
    height: 450px;
  }

  .desc {
    position: absolute;
    right: 10%;
    bottom: 5%;
    width: 300px;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    color: #324d67;
  }

  .desc p {
    color: #5f5f5f;
    font-weight: 100;
    text-align: end;
  }

  .desc h5 {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 16px;
    /* color: black; */
    align-self: flex-end;
  }

  @media screen and (max-width: 800px) {
    height: 560px;
    line-height: 1.3;

    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 40px;
    }
    button {
      margin-top: 90px;
      z-index: 10000;
    }

    .hero-banner-image {
      width: 77%;
      height: 62%;
      top: -2%;
      right: -6%;
    }

    .desc {
      bottom: 60px;
    }
  }
`

export default HeroBanner
