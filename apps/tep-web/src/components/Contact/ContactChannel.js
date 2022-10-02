/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Grid } from '@mui/material'

import fb from '../../assets/icons/fb.svg'
import mail from '../../assets/icons/mail.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'

const ContactChannel = () => {
  return (
    <div css={styles}>
      <h4>Nuestros canales de contacto</h4>
      <p>
        Acá te mostramos las diferentes formas en las que puedes contactarnos.
      </p>
      <div className="contact-div">
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <div className="contact-information">
              <div>
                <p>
                  <img
                    src={whatsapp}
                    alt="Whatsapp-icon"
                    className="whatsapp-icon"
                  />
                  (+506) 8888 - 8888
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="contact-information">
              <div className="fb-div">
                <p>
                  <img src={fb} alt="Facebook-icon" className="fb-icon" />

                  <a href="https://google.com">TEP CR</a>
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="contact-information">
              <div>
                <p>
                  <img src={mail} alt="Mail-icon" className="mail-icon" />
                  sales@tepcr.com
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
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

  .contact-div {
    position: relative;
    height: auto;
    overflow: auto;
    border: solid 1px transparent;
    border-radius: 15px;
    box-shadow: #000 0px 0.5px 5px 0px;
    padding: 10px;
    margin: 40px 0px 20px 0px;

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

export default ContactChannel
