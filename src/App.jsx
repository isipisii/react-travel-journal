import React from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import data from './data'

function App() {

  const cards = data.map(item =>{
    return(
      <Cards
        key = {item}
        {...item}
      />
    )
  })

  return(
    <div className='container'>
      <Navbar />
      <section className='card-container '>
          {cards}
      </section>
      <Footer />
    </div>
  )
}

export default App
