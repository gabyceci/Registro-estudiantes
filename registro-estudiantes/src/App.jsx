import { useState } from 'react'
import './App.css'
import Registro from './components/registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Registro/>
    </>
  )
}

export default App
