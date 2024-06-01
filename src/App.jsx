import './App.css';
import Mains from './components/Mains';
import color from './DATA/Data.js';

function App() {
  return (
    <>
      <Mains colors={color} />
    </>
  );
}

export default App;
