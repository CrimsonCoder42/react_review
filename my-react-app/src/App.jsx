import Navbar from './tutorial/04-project-structure/starter/navbar/Navbar';
import './App.css'
import Home from './tutorial/04-project-structure/starter/Pages/Home';
import About from './tutorial/04-project-structure/starter/Pages/About';



function App() {
  return (
    <div className='container'>
      <Navbar />
      <Home />
      <About />

    </div>
  );
}

export default App;
