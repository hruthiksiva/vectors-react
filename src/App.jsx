import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Homepage from './Pages/Home'
import ServicePage from './Pages/ServicePage'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import NotFound from './Pages/NotFound'
import CaseStudyPage1 from './Pages/CaseStudyPage1'
import CaseStudyPage2 from './Pages/CaseStudyPage2'
import Marketing from './Pages/Marketing'
import WebD from './Pages/WebD'
import Design from './Pages/Design'
import ArtificialIntelligence from './Pages/AI'
import CaseStudyPage3 from './Pages/CaseStudyPage3'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/casestudy1' element={<CaseStudyPage1 />}/>
      <Route path='/casestudy2' element={<CaseStudyPage2 />}/>
      <Route path='/casestudy3' element={<CaseStudyPage3 />}/>
      <Route path='/marketing' element={<Marketing/>}/>
      <Route path='/design' element={<Design/>}/>
      <Route path='/web-development' element={<WebD/>}/>
      <Route path='/artificial-intelligence' element={<ArtificialIntelligence/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App