import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import StudentRoute from './routes/StudentRoute'
import InstructorRoute from './routes/InstructorRoute'
import AdminRoute from './routes/AdminRoute'
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
          <Route path='/admin/*' element={<AdminRoute/>}/>
        </Routes>
        </Router>
    </>
  )
}

export default App
