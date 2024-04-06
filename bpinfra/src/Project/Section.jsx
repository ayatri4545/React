import './Section.css'
import Image1 from "./Image/p1.webp"
import Image2 from "./Image/color.png"
import Image3 from "./Image/philips.png"
import { useNavigate } from 'react-router-dom'
import Image4 from "./Image/cel.jpg"
import Image5 from "./Image/kp.jpg"
import Footer from "./Footer"
const Section = () => {
  const navigate= useNavigate
  
  return (
   
    <div className='card'>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={Image1} class="card-img-top" height={400}  onClick={()=>navigate('/Deals')} alt="..."></img>
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image2} height={400}  class="card-img-top" alt="..."></img>
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image3} height={400} class="card-img-top" alt="..."></img>
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  </div>
    <div className="side">
    
    <div className="right"><img src={Image4} height={600} width={"100%"} alt="" />
   </div>
    
    <div className="do">
      <p>CELLING LIGHT</p>
    <div className="left"><img src={Image5} height={600} width={"100%"}alt="" /></div>
    </div>
  
  </div>
  
  <p className='dec'>Decorate Your With <br></br> Hanging Lights </p>
  
 
  
  
  <Footer/>
</div>

    
  
        
  )
}

export default Section
