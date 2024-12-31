import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Homepage from './Pages/Home'
import ServicePage from './Pages/ServicePage'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import NotFound from './Pages/NotFound'
import CaseStudyPage from './Pages/CaseStudyPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/casestudy' element={<CaseStudyPage/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App