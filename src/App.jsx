import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App