import React from 'react'
import Maintop from '../Components/Maintop'
import Everything from '../components/Everything'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <main>
        <Maintop/>
      </main>
      <Everything/>
      <Footer/>
    </div>
  )
}

export default Home