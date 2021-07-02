import React from 'react'
import {Navbar} from "./components/"
import {BrowserRouter as Router}  from  'react-router-dom'
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Navbar/>
     <Home/>
    </Router>
  );
}

export default App;
