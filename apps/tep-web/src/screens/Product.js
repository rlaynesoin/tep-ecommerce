/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  // AiOutlineMinus,
  // AiOutlinePlus,
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from 'react-icons/ai'

import { urlFor } from '../utils/sanityClient'
import { useStateContext } from '../utils/useStateContext'
import { getCustomProducts } from '../utils/useProducts'
import Spinner from '../components/Spinner/Spinner'

const Product = () => {
  const [product, setProduct] = useState([])
  const [index, setIndex] = useState(0)
  const { id } = useParams()
  const { decQty, incQty, qty, onAdd } = useStateContext()

  useEffect(() => {
    getProduct()
  }, [id])

  const getProduct = async () => {
    const data = {
      id,
      status: true,
    }
    const result = await getCustomProducts(data)
    setProduct(result[0])
  }

  return (
    <div css={styles}>
      {product ? (
        <>
          <div>
            {product?.image && (
              <div className="image-container">
                <img
                  src={urlFor(product?.image && product?.image[index])}
                  className="product-detail-image"
                  alt="img_product"
                />
              </div>
            )}

            <div className="small-images-container">
              {product?.image?.map((item, i) => (
                <img
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  src={urlFor(item)}
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
            <h1>{product?.name}</h1>
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
            <p>{product?.details}</p>
            {product?.ofter ? (
              <div className="div-ofter">
                <p className="old-price">${product?.price}</p>
                <p className="ofter-price">${product?.priceofter}</p>
              </div>
            ) : (
              <p className="price">${product?.price}</p>
            )}
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
              {/* <button type="button" className="buy-now">
            Buy Now
          </button> */}
            </div>
          </div>
        </>
      ) : (
        <Spinner size={250} />
      )}
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

    max-width: 400px;
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
    padding: 5px;
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

  .div-ofter {
    display: flex;
    margin-top: 10px;

    .old-price {
      text-decoration: line-through;
      margin-top: 14px;
    }
    .ofter-price {
      margin-left: 10px;
      font-weight: 800;
      color: red;
      font-size: 20px;
    }
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

    .product-detail-image {
      border-radius: 15px;
      background-color: #ebebeb;

      max-width: 400px;
      width: 100%;
      height: 300px;
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }

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
