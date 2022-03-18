// import logo from './logo.svg';
// import './App.css';


// My Pages

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Privacy from './pages/Privacy';


// Navigation
import NavBar from './NavBar';

// Footer
import Footer from './pages/Footer';

// BootStrap Stuff

import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Routing Stuff

import {
	BrowserRouter,
    Routes,
	Route
} from 'react-router-dom';


function App() {
  return (
    // this is mark-up inside JavaScript, it's "JSX", cornerstone of React
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/privacy" element={<Privacy/>} exact />
          <Route path="*" element={<NotFoundPage/>} exact />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
