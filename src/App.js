
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CarWidget from './components/CarWidget/CarWidget';



function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='main-container'>
      <CarWidget/>
      <ItemListContainer/>
      
      
      </div>
      </div>
      );
}

export default App;
