import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleBrewery from './pages/SingleBrewery'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/brewery/:id' element={<SingleBrewery />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
