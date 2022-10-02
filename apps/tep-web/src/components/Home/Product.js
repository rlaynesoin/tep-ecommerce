/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import productImg from '../../assets/img/TEP/nike_mercurial.jpg'

const Product = ({ product: { name, id, price } }) => {
  return (
    <div css={style}>
      <Link to={`/product/${id}`}>
        <div className="product-card">
          <img
            src={productImg}
            width={250}
            height={250}
            className="product-image"
            alt="img"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

const style = css`
  .product-card {
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
    color: #324d67;
  }
  .product-card:hover {
    transform: scale(1.1, 1.1);
  }
  .product-image {
    border-radius: 15px;
    background-color: #ebebeb;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }

  .product-name {
    font-weight: 500;
  }
  .product-price {
    font-weight: 800;
    margin-top: 6px;
    color: black;
  }
`

export default Product
