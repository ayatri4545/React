import Imagae from './Image/logo.jpg'
import './Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='Nav'>
        <nav>
            <article>
                <div className="left">
                    <a href="#home"><img className='logo' src={Imagae} height={120} width={150} ></img></a>
                     <p>BPINFRA</p>
                </div>
                <div className="right">
                <label for="check" className="checked"><i class="fa-solid fa-bars"></i></label>
            <input type="checkbox"  id="check"></input>
            <div className="Link">
                   
                    <Link className="link" to={'/'}>Home</Link> 
                    <Link className="link" to={'/About'}>About</Link>
                    <Link className="link" to={'/Gallery'}>Gallery</Link> 
                <Link className="link" to={'/Deals '}>Deals In</Link>   
                <Link className="link" to={'/Contact '}>Contact Us</Link> 
                <label for="check" class="checked"><i class="fa-solid fa-bars"></i></label>
            <input type="checkbox"  id="check"></input>
                    
                </div>
                </div>

            </article>
        </nav>

      
    </div>
  )
}

export default Navbar
