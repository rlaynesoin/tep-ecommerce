/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <div css={styles}>
      <div>
        <p>
          <small>Copywrite © {year} Merakai Studio</small>
        </p>
      </div>
    </div>
  )
}

const styles = css`
  color: #324d67;
  text-align: center;
  margin-top: 20px;
  padding: 30px 10px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;

  @media (min-width: 960px) {
  }

  @media (min-width: 576px) {
  }
`

export default Footer
