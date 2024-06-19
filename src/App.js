import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Login from './components/login/Login';
// function App() {

//   return (
//  <>
 
// <header><Navbar/></header>
// <main><Home/></main>
// <footer className='bt'><Footer/></footer>
//  </>
//   );
// }
function App() {
  return (
<>

<BrowserRouter>
    <header><Navbar/></header>
    <main>

    <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
      
    </main>
    <footer className='bt'><Footer/></footer>
    </BrowserRouter>
   </>
  );
}

export default App;
