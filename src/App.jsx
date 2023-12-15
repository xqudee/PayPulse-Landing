import { useState } from 'react'
import './App.css'
import styles, { layout } from './style'
import { Hero, Navbar } from './components'

function App() {

  return (
    <div className='bg-white w-full overflow-hidden'>
      <div>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App
