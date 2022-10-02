/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Grid } from '@mui/material'

import DN from '../assets/img/DN.svg'
import moneyIcon from '../assets/icons/dollar-bag.svg'
import teachIcon from '../assets/icons/teach.svg'
import callCenterIcon from '../assets/icons/callcenter.svg'
import ContactChannel from '../components/Contact/ContactChannel'

const Startup = () => {
  return (
    <div css={styles}>
      <h2> Desarrollo de Negocios</h2>
      <Grid container spacing={2} style={{ marginTop: '30px' }}>
        <Grid item md={4} xs={12}>
          <img src={DN} alt="DN Logo" className="dn-logo" />
        </Grid>
        <Grid item md={8} xs={12}>
          <div className="title-content">
            <p>
              El éxito de las relaciones comerciales establecidas en el nuevo
              mercado estará determinado principalmente por la calidad del
              servicio y el seguimiento que se brinda a cada cliente o proyecto
              de manera individual. <br />
              <br />
              La inteligencia empresarial y la mejora continua de la estrategia
              es el nuevo desafío que enfrenta la empresa en la consolidación y
              el crecimiento de su negocio. La experiencia y el conocimiento de
              nuestro equipo le permiten hacer un seguimiento eficiente de cada
              relación comercial establecida, para que su negocio internacional
              El desarrollo empresarial es una experiencia exitosa.
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="support-div">
        <h4>Te brindamos</h4>
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <div className="opt-div">
              <img src={teachIcon} alt="icon" />
              <p>Asesorías</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="opt-div">
              <img src={moneyIcon} alt="icon" />
              <p>Apoyo financiero</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="opt-div">
              <img src={callCenterIcon} alt="icon" />
              <p>Consultoría</p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="contac-channel">
        <ContactChannel />
      </div>
    </div>
  )
}

const styles = css`
  margin: 30px 0px 0px 0px;

  .dn-logo {
    width: 100%;
    height: 300px;
  }
  .title-content {
    margin-top: 30px;
    font-size: 20px;
    color: #0b2b40;
  }
  h2 {
    color: #0b2b40;
    font-size: 25px;
  }
  h4 {
    color: #0b2b40;
    font-size: 22px;
    text-align: center;
    margin: 30px 0px 10px 0px;
  }

  .opt-div {
    justify-content: center;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
    }
    p {
      font-weight: bold;
    }
  }

  .support-div {
    margin: 50px 10px;

    h4 {
      margin-bottom: 10px;
    }
  }

  .contac-channel {
    margin: 40px 10px;
    p {
      text-align: center;
    }
  }
`

export default Startup
