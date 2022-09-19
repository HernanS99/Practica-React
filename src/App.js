import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound';
import Register from './views/Register'
import Login from './views/Login';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='*' element={<NotFound /> } />
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
