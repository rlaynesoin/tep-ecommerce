/* eslint-disable no-underscore-dangle */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { client } from '../../utils/sanityClient'

import menu from '../../assets/img/menu.png'

const Menu = () => {
  const [open, setOpen] = useState(false)
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
      <div className="dropdown">
        <button type="button" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu-icon" />
        </button>
        {open && (
          <div className="dropdown-content">
            <div className="menu-movil">
              <Link to="/" onClick={() => setOpen(!open)}>
                Home
              </Link>
              <Link to="/brands" onClick={() => setOpen(!open)}>
                Marcas
              </Link>
              <Link to="/starup" onClick={() => setOpen(!open)}>
                Empredimiento
              </Link>
              <Link to="/about" onClick={() => setOpen(!open)}>
                Nosotros
              </Link>
              <Link to="/contact" onClick={() => setOpen(!open)}>
                Contacto
              </Link>
              <hr />
            </div>
            <h4>Departamentos</h4>
            <hr />
            {types.map(typ => (
              <Link
                key={typ._id}
                to={`department/${typ._id}`}
                onClick={() => setOpen(!open)}
              >
                {typ.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const styles = css`
  .dropdown {
    margin-left: 10px;
    display: inline-block;
    position: relative;
    font-size: 16px;

    button {
      border: none;
      background-color: transparent;

      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .dropdown-content {
    display: none;
    position: absolute;
    width: 300px;
    padding: 5px;
    overflow: auto;
    background-color: #fff;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
    z-index: 20000 !important;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-content a {
    display: block;
    color: #000000;
    padding: 5px;
    text-decoration: none;
  }
  .dropdown-content a:hover {
    color: #ffffff;
    background-color: #0b2b40;
  }
  .menu-movil {
    display: block;
  }

  @media (min-width: 650px) {
    .menu-movil {
      display: none;
    }
  }
`

export default Menu
