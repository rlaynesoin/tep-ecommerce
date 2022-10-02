/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai'

import earphones from '../assets/img/headphones_c_1.webp'
import earphones2 from '../assets/img/headphones_c_2.webp'
import earphones3 from '../assets/img/headphones_c_3.webp'

import productList from '../assets/products.json'

const Product = () => {
  const [index, setIndex] = useState(0)

  const { id } = useParams()

  const product = productList[id]

  const array = [earphones, earphones2, earphones3]

  return (
    <div css={styles}>
      <div>
        <div className="image-container">
          <img
            src={earphones}
            className="product-detail-image"
            alt="img_product"
          />
        </div>
        <div className="small-images-container">
          {array?.map((item, i) => (
            <img
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              src={item}
              className={
                i === index ? 'small-image selected-image' : 'small-image'
              }
              onMouseEnter={() => setIndex(i)}
              alt="img"
            />
          ))}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{product.name}</h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>(20)</p>
        </div>
        <h4>Details: </h4>
        <p>Hola</p>
        <p className="price">${product.price}</p>
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus">
              <AiOutlineMinus />
            </span>
            <span className="num">5</span>
            <span className="plus">
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart">
            Add to Cart
          </button>
          <button type="button" className="buy-now">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = css`
  display: flex;
  gap: 40px;
  margin: 40px;
  margin-top: 60px;
  color: #324d67;

  .product-detail-image {
    border-radius: 15px;
    background-color: #ebebeb;

    width: 400px;
    height: 400px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  .product-detail-image:hover {
    background-color: #f02d34;
  }

  .small-images-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .small-image {
    border-radius: 8px;
    background-color: #ebebeb;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .selected-image {
    background-color: #f02d34;
  }

  .product-detail-desc h4 {
    margin-top: 10px;
  }
  .product-detail-desc p {
    margin-top: 10px;
  }
  .product-detail-desc .price {
    font-weight: 700;
    font-size: 26px;
    margin-top: 30px;
    color: #f02d34;
  }
  .product-detail-desc .quantity {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    align-items: center;
  }
  .product-detail-desc .buttons {
    display: flex;
    gap: 30px;
  }

  .reviews {
    color: #f02d34;
    margin-top: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .price .old-price,
  .product-price .old-price,
  .price .old-price {
    color: gray;
    text-decoration: line-through;
  }

  .quantity-desc {
    border: 1px solid gray;
    padding: 6px;
  }
  .quantity-desc span {
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
  .quantity-desc .minus {
    border-right: 1px solid gray;
    color: #f02d34;
  }
  .quantity-desc .num {
    border-right: 1px solid gray;
    font-size: 20px;
  }
  .quantity-desc .plus {
    color: rgb(49, 168, 49);
  }

  .product-detail-desc .buttons {
    display: flex;
    gap: 30px;
  }
  .buttons .add-to-cart {
    padding: 10px 20px;
    border: 1px solid #f02d34;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    background-color: white;
    color: #f02d34;
    cursor: pointer;
    width: 200px;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .add-to-cart:hover {
    transform: scale(1.1, 1.1);
  }
  .buttons .buy-now {
    width: 200px;

    padding: 10px 20px;
    background-color: #f02d34;
    color: white;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .buy-now:hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    margin: 20px;

    .product-detail-container .product-detail-image {
      width: 350px;
      height: 350px;
    }

    .reviews p {
      color: #324d67;
      margin-top: 0px;
    }

    .buttons .add-to-cart {
      width: 150px;
    }
    .buttons .buy-now {
      width: 150px;
    }
  }
`

export default Product
