/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import TEP from '../assets/img/TEP_NB.png'
import Menu from './Menu'

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
          <Menu />
        </div>
        <ul className="nav-links">
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/brands">Marcas</Link>
            </li>
            <li>
              <Link to="/starup">Empredimiento</Link>
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
    display: flex;
  }
  .img-logo {
    width: 50px;
    height: 30px;
    margin-right: 10px;
  }

  /* NAVBAR MENU */
  .menu {
    display: none;
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
    display: none;
    gap: 1em;
    font-size: 14px;
  }
  .menu2 li:hover a {
    color: #b4bec9;
  }
  .menu2 li {
    padding: 5px 0px;
  }

  // Dropdown styles

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

  @media (min-width: 650px) {
    .menu {
      display: flex;
    }
    .menu2 {
      display: flex;
    }
  }
`

export default Navbar
