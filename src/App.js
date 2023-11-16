import Navbar from './components/NavBar';
import Home from './components/Home';



export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}


