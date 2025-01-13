
import React from 'react'
import { BrowserRouter,Route,Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Header from './Header'
import Footer from './Footer'


const App = () => {

  let location = useLocation()
 
  let currenctPage = location.pathname === "/singup" || location.pathname === "/login"

  return (
   <>
     {/* { console.log(location)} */}

   
   
   {!currenctPage && <Header/>}
     <Routes>
        <Route  index element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/service' element={<Service/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/signup' element={<Signup/>} />
       
     </Routes>
     {!currenctPage && <Footer/>}
   
   

   
   
   
   </>
  )
}

export default App