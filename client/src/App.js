import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import './css/style.css'

function App() {
  useEffect(() => {

  })
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
