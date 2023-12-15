import { useState } from 'react'
import './App.css'
import styles, { layout } from './style'
import { About, Benefits, Features, Hero, Navbar } from './components'

function App() {

  return (
    <div className='bg-white w-full overflow-hidden'>
      {/* <div>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div> */}

      <div>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Benefits />
        </div>
      </div>
    </div>
  )
}

export default App
