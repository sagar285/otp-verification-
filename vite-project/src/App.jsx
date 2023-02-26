import React from 'react'
import Page from './component/Page'
import Email from './component/Email'
import Otp from './component/Otp'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Email/>}  />
          <Route path='/otp' element={<Otp/>}  />
          <Route path='/page' element={<Page/>}  />
        </Routes>
      </Router>
    </div>
  )
}

export default App