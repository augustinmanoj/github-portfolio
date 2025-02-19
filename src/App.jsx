import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nabvar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    
    </>
  )
}

export default App
