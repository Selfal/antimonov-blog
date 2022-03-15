import './style.scss'
import IMG from '../public/logo512.png'
import { Button } from '@components'

export const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <img src={IMG} alt="logo" />
      <h2>{process.env.NODE_ENV}</h2>
      <h2>{process.env.name}</h2>
      <h3>Test .env: {process.env.REACT_APP_ENV}</h3>
      <h3>Test .env.*: {process.env.REACT_APP_MODE}</h3>
      <Button />
    </>
  )
}
