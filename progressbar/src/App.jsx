import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progressbar from './components/Progressbar'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
setInterval(()=>{
setCount((prev)=>prev+1)
},100)
  },[])
  return (
    <div className='app'>
      <Progressbar count={count}/>
    </div>
  )
}

export default App
