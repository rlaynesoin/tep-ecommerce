/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const SlugBrand = () => {
  return (
    <div css={styles}>
      <h2>Marca</h2>
      <div className="carousel-container" />
      <p>Descripcion de la marca</p>
      <div className="div-container">
        <h4>Ofertas</h4>
        <div className="ofter-container" />
      </div>
      <div className="div-container">
        <h4>Ultimas productos</h4>
        <div className="new-product-container" />
      </div>
      <div className="div-container">
        <h4>Departamentos</h4>
      </div>
    </div>
  )
}

const styles = css`
  .div-container {
    margin: 20px;
  }

  .carousel-container {
    width: 100%;
    height: 120px;
    border: none;
    border-radius: 25px;
    background: red;
    margin: 10px 0px;
  }
  .ofter-container {
    width: 100%;
    height: 180px;
    border: none;
    border-radius: 25px;
    background: red;
    margin: 10px 0px;
  }
  .new-product-container {
    width: 100%;
    height: 180px;
    border: none;
    border-radius: 25px;
    background: red;
    margin: 10px 0px;
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
