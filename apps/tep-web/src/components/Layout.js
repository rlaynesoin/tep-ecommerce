/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Footer from './Footer'
import Navbar from './Navbar'

const Header = () => {
  return <Navbar />
}

const Layout = ({ children }) => {
  return (
    <div css={styles}>
      <header>
        <Header />
      </header>
      <main className="main-container">{children}</main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  )
}

const styles = css`
  .main-container {
    padding: 25px;
    max-width: 1400px;
    margin: auto;
    width: 100%;
  }
  .footer-container {
    margin-top: 30px;
  }
`

export default Layout
