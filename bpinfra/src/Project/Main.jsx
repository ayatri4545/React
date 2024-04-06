



import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./Navbar"
import Home from'./Html'
// import Section from './Project/Section'
import Header from "./Header"
// import Footer from "./Project/Footer"
import About from "./About"
import Gallery from "./Gallery"
import Deals from "./Deals"
import Contact from "./Contact"
const App = () => {
   
 
  return (
    
    <div>
      
       <BrowserRouter>
        <Navbar  /> 
        <Header/>
        
        

       <Routes>
        
       <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About/>} ></Route>
        <Route path='/Gallery' element={<Gallery/>} ></Route>
        <Route path='/Deals' element={<Deals />} ></Route>
        <Route path='/Contact' element={<Contact />} ></Route>
       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default App
