/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import { urlFor } from '../../utils/sanityClient'

const Product = ({
  product: { image, name, _id, price, ofter, priceofter },
}) => {
  return (
    <div css={style}>
      <Link to={`/product/${_id}`} relative="path">
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={200}
            height={200}
            className="product-image"
            alt="img"
          />
          <p className="product-name">{name}</p>
          {ofter ? (
            <p className="product-price">
              <span>${price}</span> - ${priceofter}
            </p>
          ) : (
            <p className="product-price">${price}</p>
          )}
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
    border: solid 2px #f2f1f0;
    border-radius: 15px;
    padding: 5px;
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

    span {
      color: red;
      text-decoration: line-through;
      font-weight: normal;
    }
  }
`

export default Product
