/* eslint-disable no-underscore-dangle */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'

import { urlFor } from '../utils/sanityClient'
import getCustomBrands from '../utils/useBrands'
import Spinner from '../components/Spinner/Spinner'

const Brands = () => {
  const [brands, setbrands] = useState([])

  useEffect(() => {
    getBrands()
  }, [])

  const getBrands = async () => {
    const data = {
      status: true,
      asc: true,
    }
    const result = await getCustomBrands(data)
    setbrands(result)
  }

  return (
    <div css={styles}>
      <h2>Nuestras marcas</h2>
      <p>
        En este apartado te mostramos nuestro catalogo por las diferentes marcas
        que manejamos.{' '}
      </p>
      <Grid container spacing={3} style={{ marginTop: '30px' }}>
        <>
          {brands ? (
            brands.length > 0 &&
            brands.map(brand => (
              <Grid key={brand._id} item md={4} sm={6} xs={12}>
                <Link to={`/brands/${brand._id}`}>
                  <button type="button" className="brand-div">
                    <img
                      src={urlFor(brand.image)}
                      alt="img"
                      className="img-button"
                    />
                  </button>
                </Link>
              </Grid>
            ))
          ) : (
            <>
              <Spinner size={250} />
            </>
          )}
        </>
      </Grid>
    </div>
  )
}

const styles = css`
  h2 {
    color: #0b2b40;
    font-size: 25px;
  }
  p {
    font-size: 17px;
    color: #0b2b40;
  }
  .brand-div {
    background: #fff;
    border: none;
    border-radius: 20px;
    width: 100%;
    height: 250px;
    max-height: 250px;
    margin: 2%;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .brand-div:hover {
    background: #f2f2f2;
    transform: scale(1.1, 1.1);
  }

  .img-button {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`

export default Brands
