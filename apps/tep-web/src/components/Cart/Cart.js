/* eslint-disable no-underscore-dangle */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  AiOutlineShopping,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai'
import { TiDelete, TiDeleteOutline } from 'react-icons/ti'

import { useStateContext } from '../../utils/useStateContext'
import { urlFor } from '../../utils/sanityClient'

const Cart = () => {
  const cartRef = useRef()
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext()

  //   const handleCheckout = async () => {
  //     const stripe = await getStripe()

  //     const response = await fetch('/api/stripe', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(cartItems),
  //     })

  //     if (response.statusCode === 500) return

  //     const data = await response.json()

  //     toast.loading('Redirecting...')

  //     stripe.redirectToCheckout({ sessionId: data.id })
  //   }

  return (
    <div css={styles}>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-container">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}
          >
            <TiDelete size={30} />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({totalQuantities} items)</span>
          </button>

          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Your shopping bag is empty</h3>
              <Link to="/">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="btn"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map(item => (
                <div className="product" key={item._id}>
                  <img
                    src={urlFor(item?.image[0])}
                    className="cart-product-image"
                    alt="img"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <button
                            type="button"
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, 'dec')
                            }
                          >
                            <AiOutlineMinusCircle />
                          </button>
                          <button type="button" className="num" onClick="">
                            {item.quantity}
                          </button>
                          <button
                            type="button"
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, 'inc')
                            }
                          >
                            <AiOutlinePlusCircle />
                          </button>
                          <button
                            type="button"
                            className="remove-item-movil"
                            onClick={() => onRemove(item)}
                          >
                            <TiDeleteOutline />
                          </button>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <hr />
              <div className="total">
                <br />
                <h3>Subtotal:</h3>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
              {/* <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const styles = css`
  .cart-wrapper {
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    /* will-change: transform; */
    transition: all 1s ease-in-out;
  }
  .cart-container {
    height: 100vh;
    max-width: 600px;
    width: 100%;
    background-color: white;
    float: right;
    padding: 20px 10px;
    position: relative;
  }
  .cart-heading {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    gap: 2px;
    margin-left: 10px;
    border: none;
    background-color: transparent;
  }

  .cart-heading .heading {
    margin-left: 10px;
  }
  .cart-num-items {
    margin-left: 10px;
    color: #f02d34;
  }
  .empty-cart {
    margin: 40px;
    text-align: center;
  }
  .empty-cart h3 {
    font-weight: 600;
    font-size: 20px;
  }
  .cancel {
    cursor: pointer;
  }
  .product-container {
    margin-top: 15px;
    overflow: auto;
    max-height: 70vh;
    padding: 20px 10px;
  }
  .product {
    display: flex;
    gap: 30px;
    padding: 20px;
  }
  .product .cart-product-image {
    width: 180px;
    height: 150px;
    border-radius: 15px;
    background-color: #ebebeb;
  }
  .item-desc .flex {
    display: block;
    justify-content: space-between;
    width: 350px;
    color: #324d67;
  }
  .item-desc .bottom {
    margin-top: 20px;
  }
  .flex h5 {
    font-size: 18px;
  }
  .flex h4 {
    font-size: 16px;
  }
  .total {
    display: flex;
    justify-content: space-between;
  }
  .total h3 {
    font-size: 22px;
  }
  .remove-item {
    font-size: 35px;
    color: #f02d34;
    cursor: pointer;
    background: transparent;
    border: none;
    display: none;
  }
  .remove-item-movil {
    font-size: 35px;
    color: #f02d34;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  .cart-bottom {
    position: absolute;
    bottom: 12px;
    right: 5px;
    width: 100%;
    padding: 30px 65px;
  }

  .btn-container {
    width: 400px;
    margin: auto;
  }
  .btn {
    width: 100%;
    max-width: 400px;
    padding: 10px 12px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    margin-top: 40px;
    text-transform: uppercase;
    background-color: #f02d34;
    color: #fff;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .btn:hover {
    transform: scale(1.1, 1.1);
  }
  .product-detail-container {
    display: flex;
    gap: 40px;
    margin: 40px;
    margin-top: 60px;
    color: #324d67;
  }
  .plus {
    border: none;
    background-color: transparent;
    margin: 0px 10px;
    color: green;
    font-size: 30px;
  }
  .num {
    border: none;
    background-color: transparent;
    font-size: 30px;
  }
  .minus {
    border: none;
    background-color: transparent;
    margin: 0px 10px;
    color: red;
    font-size: 30px;
  }

  @media (min-width: 650px) {
    .cart-wrapper {
      width: 100vw;
    }
    .item-desc .flex {
      display: flex;
    }
    .flex h5 {
      font-size: 24px;
    }
    .flex h4 {
      font-size: 20px;
    }
    .remove-item {
      font-size: 24px;
      display: flex;
    }
    .remove-item-movil {
      display: none;
    }
    .plus {
      font-size: 20px;
    }
    .num {
      font-size: 20px;
    }
    .minus {
      font-size: 20px;
    }
  }
`

export default Cart
