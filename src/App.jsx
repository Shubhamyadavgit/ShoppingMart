import { BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Contact from './Contact'
import Cart from './Cart'
import About from './About'
import { Provider } from 'react-redux'
import {Store} from './Store/Store'

function App() {

  return (
    <>
    <Provider store={Store}>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
