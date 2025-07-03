import { useState } from 'react'
import './App.css'
import {Route, Routes ,BrowserRouter} from 'react-router-dom'
import Home from './components/Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/GoogleBloges" element={<h1>About</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
