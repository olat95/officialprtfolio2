import './app.scss'
import Intro from './components/Intro/Intro'
import Topbar from './components/Topbar/Topbar'
import Portfolio from './components/Portfolio/Portfolio'
import Works from './components/Works/Works'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import { useState } from 'react'
import Menu from './components/Menu/Menu'

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <div className='App'>
      <Topbar open={menu} close={setMenu} />
      <Menu open={menu} close={setMenu} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  )
}

export default App
