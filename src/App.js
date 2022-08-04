
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Detail from './pages/Detalle';

function App() 

{
  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={ <Contacto />}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/category/sweater" element={<Productos/>}/>
        <Route path="/category/remeras" element={<Productos/>}/>
        <Route path="/category/vestidos" element={<Productos/>}/>
        <Route path="*" element={<h3>Error 404 - Pagina no encontrada</h3>}/>
        <Route path="/productos/:id" element={<Detail/>} />
      </Routes>
      <div className='main-container'>


      
      
      </div>
      </BrowserRouter>
      );
}

export default App;
