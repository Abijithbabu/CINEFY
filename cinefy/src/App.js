import { Route, Routes } from 'react-router';
import Account from './pages/account' 
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/account' element={<Account/>} />
    </Routes>
  </>
  ) 
} 

export default App;  
