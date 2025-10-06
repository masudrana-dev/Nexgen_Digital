// import './App.css'
import About from './Components/About'
import ContactUsSection from './Components/contactUS'
import FooterSection from './Components/Footer'
import Home from './Components/Home'
import Service from './Components/Service'
import Slider from './Components/Slider'
import WhyChooseUsSection from './Components/WhyChooseUS'

function App() {

  return (
<div className='bg-white'>
  <Home/>
  <Service/>
  <Slider/>
  <About/>
  <WhyChooseUsSection/>
  <ContactUsSection/>
  <FooterSection/>
</div>
  )
}

export default App
