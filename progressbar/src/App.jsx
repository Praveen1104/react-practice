import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progressbar from './components/Progressbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Progressbar />
    </>
  )
}

export default App
