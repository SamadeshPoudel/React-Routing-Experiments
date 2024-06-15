import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/landing' element={<Landing />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
