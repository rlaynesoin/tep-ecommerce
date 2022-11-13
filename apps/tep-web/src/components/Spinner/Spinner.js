import { HashLoader } from 'react-spinners'

const Spinner = ({ color = '#0b2b40', size = 100 }) => {
  const override = {
    display: 'block',
    margin: '0 auto',
  }
  return <HashLoader color={color} cssOverride={override} size={size} />
}

export default Spinner
