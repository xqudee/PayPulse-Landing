import { useState } from 'react'
import './App.css'
import styles, { layout } from './style'
import { About, Benefits, Blog, Cta, Faq, Features, Footer, Hero, Navbar, Testimonial } from './components'

function App() {

  return (
    <div className='bg-white w-full'>
      {/* <div>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div> */}

      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Cta />
        <Testimonial />
        <Faq />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App
