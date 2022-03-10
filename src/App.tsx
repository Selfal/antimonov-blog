import './style.scss'
import IMG from '../public/logo512.png'

export const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <img src={IMG} alt="logo" />
      <h2>{process.env.NODE_ENV}</h2>
      <h2>{process.env.name}</h2>
    </>
  )
}
