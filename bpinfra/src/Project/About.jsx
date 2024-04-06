import React from './Footer'
import './About.css'
import Image1 from "./Image/phillips.jpeg"
import Image2 from "./Image/signify.jpg"
import Image3 from "./Image/hue.png"
import Image4 from "./Image/eco.jpeg"
const About = () => {
  return (
    <>
    <h2 className='Head'>About us</h2>
    <div className='About'>
    <h2 className='we'>Welcome To,</h2>
    <p className='info'> <b className='hw'>BP INFRA</b>, your premier destination for top-quality lighting solutions, electrical products, fans, and home decorative items. With a commitment to excellence and a passion for innovation, we strive to illuminate and enhance every space, bringing comfort, style, and functionality to your home or business.</p>

<p className='info'>At <b>BP INFRA</b> , we understand the importance of creating an ambiance that reflects your unique style and personality. Whether you're looking to brighten up your living room with elegant chandeliers, modernize your workspace with energy-efficient LED lighting, or add a touch of sophistication to your outdoor area with stylish fans, we have the perfect solutions to meet your needs.</p>
 
<p className='info'>With years of experience in the industry, our team of experts curates a diverse selection of products from leading brands known for their superior quality and reliability. We believe in offering our customers not only products but also peace of mind, knowing that they are investing in solutions that are built to last.</p>
 
<p className='info'>Customer satisfaction is at the heart of everything we do. Our dedicated team is here to provide personalized assistance and guidance every step of the way, from product selection to installation and beyond. We believe in building lasting relationships with our customers, earning their trust through honesty, integrity, and exceptional service.</p>
 
<p className='info'>At <b>BP INFRA</b>, we are more than just a retailer – we are your partners in creating spaces that inspire, delight, and enhance your everyday life. Explore our extensive range of lighting, electrical, fan, and home decorative products, and let us help you turn your vision into reality.</p>
 
<p className='info'>Thank you for choosing <b>BP INFRA</b>. We look forward to serving you and exceeding your expectations.</p>


      
      
    </div>

    <div className="company">
     <marquee behavior="" direction="left">
      <img src={Image1} height={150} width={150} alt="" />
      </marquee>
      <marquee behavior="" direction="left">
      <img src={Image2} height={150} width={150}alt="" />
      </marquee>
      <marquee behavior="" direction="left">
      <img src={Image3} height={150} width={150}alt="" />
      </marquee>
      <marquee behavior="" direction="left">
      <img src={Image4} height={150} width={150}alt="" />
       </marquee>
       <marquee behavior="" direction="left">
      <img src={Image4} height={150} width={150}alt="" />
      </marquee>
      <marquee behavior="" direction="left">
      <img src={Image4} height={150} width={150}alt="" />
      </marquee>
    </div>
    <React/>
    </>
  )
}

export default About
