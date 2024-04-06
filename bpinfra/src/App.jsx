import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Project/Navbar'
import Home from'./Project/Html'
// import Section from './Project/Section'
import Header from "./Project/Header"
// import Footer from "./Project/Footer"
import About from "./Project/About"
import Gallery from "./Project/Gallery"
import Deals from "./Project/Deals"
import Contact from "./Project/Contact"
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
