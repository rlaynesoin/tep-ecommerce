/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import TEP from '../assets/img/TEP_NB.png'
import Kliniu from '../assets/img/kliniu logo.png'
import Saeta from '../assets/img/Logo_SAETA.png'
import MundoFutsal from '../assets/img/Mundo Futsal.png'
import Ritter from '../assets/img/ritter-sport.png'
import GravityPro from '../assets/img/GravityPro_Logo.png'

const Brands = () => {
  const array = [TEP, Kliniu, Saeta, MundoFutsal, Ritter, GravityPro]
  return (
    <div css={styles}>
      <h2>Nuestras marcas</h2>
      <p>
        En este apartado te mostramos nuestro catalogo por las diferentes marcas
        que manejamos.{' '}
      </p>
      <div className="row">
        {array.map(brand => (
          <div className="column">
            <Link to="/brand">
              <button type="button" onClick={brand}>
                <img src={brand} alt="img" className="img-button" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = css`
  .row {
    padding: 50px;
  }
  .row:after {
    content: '';
    display: table;
    clear: both;
  }

  .column {
    float: left;
    width: 33%;
  }

  .column button {
    background: #fff;
    border: none;
    border-radius: 20px;
    width: 300px;
    height: 200px;
    margin: 2%;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .column button:hover {
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
