import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components'
const apiUrl = process.env.REACT_APP_API_URL;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World in React Js</h1>
    </>
  )
}

export default App
