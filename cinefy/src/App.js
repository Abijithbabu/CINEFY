import { Route, Routes } from 'react-router';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Account from './pages/account' 
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import ResetPassword from './pages/resetPassword';

function App() {
  return (
  <>
  <ReactNotifications />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/resetPassword' element={<ResetPassword/>} />
      <Route path='/account' element={<Account/>} />
    </Routes>
  </>
  ) 
} 

export default App;  
