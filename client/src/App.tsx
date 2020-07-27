import React  from 'react';
import {BrowserRouter} from 'react-router-dom'
import  {createStore} from 'redux' 
import {Provider} from 'react-redux'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import './css/style.css'
import  {mainReducer}  from './redux/reducers';

  
const store=createStore(mainReducer)
console.log(store.getState())





function App() {
  return ( 
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
     </div>
     </Provider>
    )}

export default App;
