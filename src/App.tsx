import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';


const App = () => {

  return (
  <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/store" element={<Store />}/>
      </Routes>
    </Container>
  </ShoppingCartProvider>
  )
}

export default App
