/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import TEP from '../assets/img/TEP_NB.png'

const Navbar = () => {
  return (
    <div css={styles}>
      <nav className="navbar2">
        <ul className="nav-links2">
          <div className="menu2">
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </div>
        </ul>
      </nav>

      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img className="img-logo" src={TEP} alt="logo" />
            <span>TEP</span>
          </Link>
        </div>
        <ul className="nav-links">
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
            <li>
              <Link to="/starup">Starups</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

const styles = css`
  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .navbar {
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: #0b2b40 0px 0.5px 5px 0px;
    border-radius: 0px 0px 15px 0px;
  }
  .navbar2 {
    padding: 0px 25px;
    display: flex;
    float: right;
    justify-content: space-between;
    background-color: #0b2b40;
    color: #fff;
  }

  .nav-links a {
    color: #000;
  }

  .nav-links2 a {
    color: #fff;
  }

  /* LOGO */
  .logo {
    font-size: 32px;
  }
  .img-logo {
    width: 50px;
    height: 30px;
    margin-right: 10px;
  }

  /* NAVBAR MENU */
  .menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
  }
  .menu li:hover {
    background-color: #0b2b40;
    color: #fff;
    border-radius: 5px;
    transition: 0.3s ease;
  }
  .menu li:hover a {
    color: #fff;
    transition: 0.3s ease;
  }
  .menu li {
    padding: 5px 14px;
  }

  .menu2 {
    display: flex;
    gap: 1em;
    font-size: 14px;
  }
  .menu2 li:hover a {
    color: #b4bec9;
  }
  .menu2 li {
    padding: 5px 0px;
  }
`

export default Navbar
