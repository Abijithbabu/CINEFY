import { Route, Routes } from "react-router";
import Account from "../pages/admin/account";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import ResetPassword from "../pages/resetPassword";
import Jobs from "../pages/user/jobs";
import Blogs from "../pages/blogs";
import Profile from "../pages/user/profile";
import DetailPage from "../pages/user/detailPage";
import UserManage from "../pages/admin/userManage";
import RecruterManage from "../pages/admin/recruterManage";
import ManagePosts from '../pages/admin/managePosts'
import Error from "../pages/404";
import AdminPrivateRoute from "./adminRoutes";
import UserPrivateRoute from "./userRoute";
import RecruiterPrivateRoute from "./recruiterRoutes";
import ManageContent from "../pages/recruiter/manageContent";
import ManageApplicants from "../pages/recruiter/manageApplicants";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/findJobs" element={<Jobs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route element={<AdminPrivateRoute />}>
        <Route path="/admin/account" element={<Account />} /> 
        <Route path="/admin/customers" element={<UserManage />} />
        <Route path="/admin/recruiters" element={<RecruterManage />} />
        <Route path="/admin/manage-posts" element={<ManagePosts />} />
      </Route>
      <Route element={<UserPrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<RecruiterPrivateRoute />}>
        <Route path="/manageContents" element={<ManageContent />} />
        <Route path="/manageApplicants" element={<ManageApplicants />} />
      </Route>
      <Route path="/detailPage" element={<DetailPage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default routes;
