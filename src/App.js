import React, { Component } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom' 
import Home from './Pages';
import Signi from './Pages/Signin';
import NotFound from './Pages/NotFound';
class App extends Component {
  state = {  } 
  render() { 
    return (
      <BrowserRouter className='app'>
        
        <Routes>

          <Route path='/' element={<Home />} exact />
          <Route path='/signin' element={<Signi/>} exact />
          <Route path='/notfound' element={<NotFound/>}/>
          <Route path='*' element={<Navigate to='/notfound' replace={true} />}/>
        </Routes>
      </BrowserRouter>
      
    );
  }
}
 
export default App;