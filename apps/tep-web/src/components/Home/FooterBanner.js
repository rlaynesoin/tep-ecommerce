/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import earphones from '../../assets/img/headphones_c_1.webp'

const FooterBanner = () => {
  return (
    <div css={styles} className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>Hola Mundo</p>
          <h3>Como</h3>
          <h3>Estas?</h3>
          <p>bien</p>
        </div>

        <div className="right">
          <p>Hola</p>
          <h3>Hola</h3>
          <p>Hola</p>
          <Link to="/product/">
            <button type="button">Hola</button>
          </Link>
        </div>
        <img src={earphones} alt="img" className="footer-banner-image" />
      </div>
    </div>
  )
}

const styles = css`
  padding: 100px 40px;
  background-color: #f02d34;
  border-radius: 15px;
  position: relative;
  height: 400px;
  line-height: 1;
  color: white;
  width: 100%;
  margin-top: 120px;

  .banner-desc {
    display: flex;
    justify-content: space-between;
  }
  .banner-desc button {
    border-radius: 15px;
    padding: 10px 16px;
    background-color: white;
    color: red;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  .banner-desc .left h3 {
    font-weight: 900;
    font-size: 80px;
    margin-left: 25px;
  }
  .banner-desc .left p {
    margin: 18px;
  }
  .footer-banner-image {
    position: absolute;
    top: -25%;
    left: 25%;
  }
  .banner-desc .right {
    line-height: 1.4;
  }
  .banner-desc .right h3 {
    font-weight: 800;
    font-size: 60px;
  }
  .banner-desc .right p {
    font-size: 18px;
  }
  .banner-desc .right .company-desc {
    font-size: 14px;
    font-weight: 300;
  }

  @media screen and (max-width: 800px) {
    height: 560px;
    margin-top: 80px;

    .banner-desc .left h3 {
      font-weight: 900;
      font-size: 50px;
      margin-left: 5px;
    }
    .banner-desc .left p {
      margin: 18px;
    }
    .banner-desc .right h3 {
      font-size: 45px;
    }
    .banner-desc .right p {
      font-size: 18px;
    }
    .banner-desc .right .company-desc {
      font-size: 14px;
    }
    .banner-desc {
      flex-wrap: wrap;
      gap: 20px;
    }

    .footer-banner-image {
      width: 77%;
      left: 30%;
      top: 6%;
      height: 56%;
    }
  }
`

export default FooterBanner
