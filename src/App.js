import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'



function App() {

  return (
 <>
<header><Navbar/></header>
<main><Home/></main>
<footer className='bt'><Footer/></footer>
 </>
  );
}

export default App;
