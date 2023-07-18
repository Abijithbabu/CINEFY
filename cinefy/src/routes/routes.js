import { Route, Routes } from 'react-router';
import Account from '../pages/account' 
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import ResetPassword from '../pages/resetPassword';
import Jobs from '../pages/jobs'
import Blogs from '../pages/blogs'
import Profile from '../pages/profile';
import DetailPage from '../pages/detailPage'
function routes() {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/resetPassword' element={<ResetPassword/>} />
    <Route path='/findJobs' element={<Jobs/>} />
    <Route path='/blogs' element={<Blogs/>} />
    <Route path='/account' element={<Account/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/detailPage' element={<DetailPage/>} />
  </Routes>
  )
} 
 
export default routes
  