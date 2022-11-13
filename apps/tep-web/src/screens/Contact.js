/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Grid } from '@mui/material'

import location from '../assets/icons/location.svg'
import ContactChannel from '../components/Contact/ContactChannel'
import Location from '../components/Contact/Location'

const Contact = () => {
  return (
    <div css={styles}>
      <h2>Contacto</h2>
      <p>
        Tienes alguna duda sobre algo o necesitas más información, acá los
        diferentes medios en que pueden contactarnos
      </p>

      <div className="location-container">
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Location />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="location-div">
              <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                  <img
                    src={location}
                    alt="Location-icon"
                    className="location-icon"
                  />
                </Grid>
                <Grid item md={8} xs={12}>
                  <div className="location-description">
                    <h4>¿Donde estamos ubicados?</h4>
                    <p>
                      <span>&#8226;</span> Provincia: San José
                    </p>
                    <p>
                      <span>&#8226;</span> Canton: San Francisco de 2 Rios
                    </p>
                    <p>
                      <span>&#8226;</span> Dirección: Del parque de la paz 300
                      mts sur carretera a Desamparados.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <ContactChannel />
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
  h4 {
    color: #0b2b40;
    font-size: 22px;
    margin: 0px 0px 10px 0px;
  }

  .location-container {
    margin: 30px 0px 50px 0px;
  }
  .location-div {
    position: relative;
    height: auto;
    overflow: auto;
    border: solid 1px transparent;
    border-radius: 15px;
    box-shadow: #000 0px 0.5px 5px 0px;
    padding: 10px;
    margin: 10% 0px 30px 0px;

    justify-content: center;
    align-content: center;

    .location-icon {
      width: 100%;
      height: 100%;
      padding: 20%;
    }

    .location-description {
      padding: 10px;
      width: 100%;

      span {
        font-size: 25px;
        color: #0b2b40;
      }
      p {
        font-size: 17px;
        color: #0b2b40;
      }
    }
  }

  .contact-div {
    position: relative;
    height: auto;
    overflow: auto;
    border: solid 1px transparent;
    border-radius: 15px;
    box-shadow: #000 0px 0.5px 5px 0px;
    padding: 10px;
    margin: 20px 0px;

    .contact-icon {
      height: 200px;
    }

    .contact-information {
      p {
        font-size: 22px;
      }
      .whatsapp-icon {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .mail-icon {
        width: 47px;
        height: 47px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .fb-icon {
        width: 45px;
        height: 45px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }

    .fb-div {
    }
  }
`

export default Contact
