import React from 'react'
import Router from './Frontend/Router/Router'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router/>
    </div>
  )
}

export default App