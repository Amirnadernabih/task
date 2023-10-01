import React from 'react'
import './App.css'
import Navbar from './components/nav/Navbar.jsx'
import Search from './components/search&filter/Search.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rightside from './components/rightside/Rightside';

const App = () => {
  return (
    <main>
     <Navbar />
     <Search />
     <Rightside />
    </main>
  )
}

export default App