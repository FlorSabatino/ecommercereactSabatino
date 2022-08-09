
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Detail from './pages/Detalle';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';

function App() 

{
  return (
    <CartProvider>
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={ <Contacto />}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/category/:idCategory" element={<Productos/>}/>
        <Route path="*" element={<h3>Error 404 - Pagina no encontrada</h3>}/>
        <Route path="/productos/:id" element={<Detail/>} />
        <Route path='/cart' element={<Checkout/>}/>
      </Routes>
      <div className='main-container'>


      
      
      </div>
      </BrowserRouter>
      </CartProvider>
      );
}

export default App;
