

import AppNav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import End from './End';
import Home from './Home';
import Scroll from './Scroll';
  
 function App() {


  return (
    < >


      < AppNav />
           <Routes>
         <Route path='/' element={< Home/>} />
        <Route path='/Products' element={<Products />} />
        <Route path='/cart'  element={<Cart />} />
        
       </Routes>
        {/* <End /> */}
      {/* <Scroll />  */}


    </ >
  );
}

export default App;
