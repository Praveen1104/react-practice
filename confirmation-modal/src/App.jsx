import { useState } from 'react'
import './App.css'
import ConfirmationModal from './components/ConfirmationModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConfirmationModal />
    </>
  )
}

export default App
