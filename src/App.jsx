import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import StudentRoute from './routes/StudentRoute'
import InstructorRoute from './routes/InstructorRoute'
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Router>
<ToastContainer/>
        <Routes>
          <Route path='/*' element={<StudentRoute/>}/>
          <Route path='/instructor/*' element={<InstructorRoute/>}/>
        </Routes>
        </Router>
    </>
  )
}

export default App
