/* eslint-disable no-underscore-dangle */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../../utils/sanityClient'
import { getCustomProducts, getProductsByBrand } from '../../utils/useProducts'

import Product from '../Home/Product'
import Spinner from '../Spinner/Spinner'

const SlugBrand = () => {
  const [brand, setBrand] = useState([])
  const [products, setProducts] = useState([])
  const [productsOfter, setProductsOfter] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getBrand()
    getProductsOfter()
    getProducts()
  }, [])

  const getBrand = async () => {
    const query = `*[_type == "brands" && _id == "${id}"]`
    const result = await client.fetch(query)
    setBrand(result[0])
  }

  const getProductsOfter = async () => {
    const data = {
      id: null,
      status: true,
      ofter: true,
      type: null,
      brand: id,
      genre: null,
    }
    const result = await getCustomProducts(data)
    setProductsOfter(result)
  }

  const getProducts = async () => {
    const xproducts = await getProductsByBrand(id)
    setProducts(xproducts)
  }

  const emptyMsg = <p>No hay productos en esta categoria</p>

  const { name, details } = brand

  return (
    <div css={styles}>
      <div className="products-heading">
        <h2>{name}</h2>
        <br />
        <p>{details}</p>
      </div>
      <div className="div-container">
        <h4>Ofertas</h4>
        <div className="products-container">
          <>
            {productsOfter &&
              (productsOfter.length > 0
                ? productsOfter?.map(
                    (product, index) =>
                      index < 4 && (
                        <Product key={product._id} product={product} />
                      )
                  )
                : emptyMsg)}
            {!productsOfter && <Spinner />}
          </>
        </div>
      </div>
      <div className="div-container">
        <h4>Ultimas productos</h4>
        <div className="products-container">
          {products.length > 0
            ? products?.map(
                (product, index) =>
                  // eslint-disable-next-line no-underscore-dangle
                  index < 4 && <Product key={product._id} product={product} />
              )
            : emptyMsg}
          {!products && <Spinner />}
        </div>
      </div>
      <div className="div-container">
        <h4>Todos los productos</h4>
        <div className="products-container">
          {products.length > 0
            ? products?.map(product => (
                // eslint-disable-next-line no-underscore-dangle
                <Product key={product._id} product={product} />
              ))
            : emptyMsg}
          {!products && <Spinner />}
        </div>
      </div>
    </div>
  )
}

const styles = css`
  .div-container {
    margin: 40px 20px 50px 20px;

    h4 {
      justify-content: center;
      font-size: 22px;
      font-weight: 500;
      color: #324d67;
    }
  }

  .products-heading {
    margin: 40px 0px;
    color: #324d67;
  }
  .products-heading h2 {
    font-size: 30px;
    font-weight: 800;
  }
  .products-heading p {
    font-size: 16px;
    font-weight: 200;
  }

  .carousel-container {
    width: 100%;
    height: 120px;
    border: none;
    border-radius: 25px;
    background: red;
    margin: 10px 0px;
  }
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    width: 100%;
  }
  .contain-container {
    width: 100%;
    height: 180px;
    border: none;
    border-radius: 25px;
    background: red;
    margin: 10px 0px;
  }
`

export default SlugBrand
