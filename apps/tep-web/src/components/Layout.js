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
      <footer>
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
`

export default Layout
