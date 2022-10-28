import './App.css';
import Sliderr from './Slider';
import Navbar from './components/Navbar';
import Category from './components/Category';
import LastPart from './components/LastPart';





function App() {
  return (
    <div className="App">
      <Navbar />
     <Sliderr/>
     <Category />
     <LastPart />
    </div>
  );
}

export default App;
