import './styles.css'

export const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <h2>{process.env.NODE_ENV}</h2>
      <h2>{process.env.name}</h2>
    </>
  )
}
