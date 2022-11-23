/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Pagination } from '@mui/material'

import Product from '../components/Home/Product'

import { getCustomProducts, getTotalProducts } from '../utils/useProducts'
import Spinner from '../components/Spinner/Spinner'

const Department = () => {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const { id } = useParams()

  useEffect(() => {
    getProducts()
    totalProducts()
  }, [id])

  const getProducts = async () => {
    const data = {
      type: id,
      status: true,
    }
    const result = await getCustomProducts(data)

    setProducts(result)
  }

  const totalProducts = async () => {
    const result = await getTotalProducts(id)

    setTotal(result)
  }

  const totalPagination = Math.round(products.length / total)

  return (
    <div css={styles}>
      <div className="products-heading">
        <h2>Resultado</h2>
        <br />
        <hr />
        <p>{total} productos</p>
      </div>
      <div className="products-container">
        {products ? (
          products?.map(product => (
            // eslint-disable-next-line no-underscore-dangle
            <Product key={product._id} product={product} />
          ))
        ) : (
          <Spinner size={350} />
        )}
      </div>
      <div className="pagination">
        <Pagination count={totalPagination} size="large" />
      </div>
    </div>
  )
}

const styles = css`
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
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    width: 100%;
  }

  // PAGINATION STYLES
  .pagination {
    margin-top: 10px;
    float: right;
  }
`

export default Department
