
import './App.css';
import Navbar from './componentes/Navbar'
import CardsProps from './componentes/CardProps';





function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='cards'>
        <CardsProps />
      </div>
    </div>
  );
}

export default App;