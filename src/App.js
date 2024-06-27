

// import AppNav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Home from './Home';
// import End from './End';
// import Scroll from './Scroll';
import Login from './Login';
import Allpage from './Allpage';
  
 function App() {


  return (
    < >


  
            <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={< Allpage/>} />
        <Route path='/Products' element={<Products />} />
        <Route path='/cart'  element={<Cart />} />
        {/* <Route path='/Allpage'  element={<Allpage />} /> */}

       </Routes>
      
        {/* <End /> */}
      {/* <Scroll />  */}


    </ >
  );
}

export default App;
