import { Route, Routes } from 'react-router';
import Account from '../pages/account' 
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import ResetPassword from '../pages/resetPassword';
import Jobs from '../pages/jobs'
function routes() {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/resetPassword' element={<ResetPassword/>} />
    <Route path='/findJobs' element={<Jobs/>} />
    <Route path='/account' element={<Account/>} />
  </Routes>
  )
}
 
export default routes
 