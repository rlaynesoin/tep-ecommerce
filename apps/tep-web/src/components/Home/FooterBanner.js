/* eslint-disable no-underscore-dangle */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'

import { client, urlFor } from '../../utils/sanityClient'
import Spinner from '../Spinner/Spinner'

const FooterBanner = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    getTypes()
  }, [])

  const getTypes = async () => {
    const query = `*[_type == "types"]`
    const result = await client.fetch(query)
    setTypes(result)
  }
  return (
    <div css={styles}>
      <Grid container spacing={1}>
        {types ? (
          types.map(typ => (
            <Grid key={typ._id} item md={4} sm={6} xs={12}>
              <Link key={typ._id} to={`department/${typ._id}`}>
                <div className="department-div">
                  <div className="title-department">
                    <h3>{typ.name}</h3>
                  </div>
                  <img src={urlFor(typ?.image?.asset?._ref)} alt={typ.name} />
                </div>
              </Link>
            </Grid>
          ))
        ) : (
          <Spinner size={100} />
        )}
      </Grid>
    </div>
  )
}

const styles = css`
  .department-div {
    position: relative;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-content: center;
    text-align: center;
    transform: scale(1, 1);
    transition: transform 0.5s ease;

    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
  }

  .department-div:hover {
    transform: scale(1.1, 1.1);
  }

  .title-department {
    position: absolute;
    width: 100%;
    height: 60px;
    top: 50%;
    margin-top: -30px;
    left: 0;
    z-index: 100;
    background-color: #000;
    opacity: 0.7;
    color: white;

    h3 {
      opacity: 1;
      margin: 15px 0 auto 0;
    }
  }

  @media screen and (max-width: 800px) {
  }
`

export default FooterBanner
