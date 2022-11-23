/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import { urlFor } from '../../utils/sanityClient'

const Product = ({
  product: { image, name, _id, price, ofter, priceofter, priceSymbol },
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
              <span>
                {priceSymbol ?? ''}
                {price}
              </span>{' '}
              - {priceSymbol ?? ''}
              {priceofter}
            </p>
          ) : (
            <p className="product-price">
              {priceSymbol ?? ''}
              {price}
            </p>
          )}
        </div>
      </Link>
    </div>
  )
}

const style = css`
  .product-card {
    cursor: pointer;
    width: 240px;
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
    display: block;
    border-radius: 15px;
    justify-content: center;
    margin: auto;
    background-color: #ebebeb;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }

  .product-name {
    font-weight: 500;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
    padding: 5px;
  }
  .product-price {
    font-weight: 800;
    margin-top: 6px;
    color: black;
    padding: 5px;

    span {
      color: red;
      text-decoration: line-through;
      font-weight: normal;
    }
  }
`

export default Product
