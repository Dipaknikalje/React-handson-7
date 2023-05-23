import React from 'react'
import { Routes ,Route, BrowserRouter} from 'react-router-dom'
import ContactUs from './Components/Pages/ContactUs'
import Home from './Components/Pages/Home'
import StudentList from './Components/Pages/StudentList'
import StudentForm from './Components/Pages/StudentForm'

function RouterComp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/student"} element={<StudentList/>}/>
            <Route path={"/contactUs"} element={<ContactUs/>}/>
            <Route path="/editStudent/:studentId" element={<StudentForm />} />
        <Route path="/addStudent" element={<StudentForm />} />
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default RouterComp