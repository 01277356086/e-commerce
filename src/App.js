 
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Login from './Login';
import Allpage from './Allpage';

function App() {


  return (
    < >
 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={< Allpage />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>


    </ >
  );
}

export default App;
