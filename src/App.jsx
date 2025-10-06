// import './App.css'
import About from './Components/About'
import ContactUs from './Components/contactUS'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Service from './Components/Service'
import Slider from './Components/Slider'
import WhyChooseUs from './Components/WhyChooseUS'

function App() {

  return (
<div className='bg-white'>
  <Home/>
  <Service/>
  <Slider/>
  <About/>
  <WhyChooseUs/>
  <ContactUs/>
  <Footer/>
</div>
  )
}

export default App
