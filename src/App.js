import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound';
import Login from './views/Login'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='*' element={<NotFound /> } />
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
