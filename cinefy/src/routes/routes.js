import { Route, Routes } from "react-router";
import Account from "../pages/admin/account";
import Login from "../pages/general/login";
import Register from "../pages/general/register";
import Home from "../pages/general/home";
import ResetPassword from "../pages/general/resetPassword";
import Jobs from "../pages/user/jobs";
import Bookmarks from "../pages/user/bookmarked";
import Blogs from "../pages/general/blogs";
import EditProfile from "../pages/user/edit-profile";
import DetailPage from "../pages/user/detailPage";
import Dashboard from '../pages/admin/dashboard' 
import UserManage from "../pages/admin/userManage";
import RecruterManage from "../pages/admin/recruterManage";
import ManagePosts from "../pages/admin/managePosts";
import Error from "../pages/general/404";
import AdminPrivateRoute from "./adminRoutes";
import UserPrivateRoute from "./userRoute";
import RecruiterPrivateRoute from "./recruiterRoutes";
import CreatorDashboard from "../pages/recruiter/creatorDashboard";
import ManageContent from "../pages/recruiter/manageContent";
import ManageApplications from "../pages/recruiter/manageApplications";
import ManageApplicants from "../pages/recruiter/manageApplicants";
import Profile from "../pages/user/public-profile";
import Chat from "../pages/general/chat";
import ViewProfile from "../Components/creator/userProfile/view-profile";
import Premium from "../pages/user/premium";
function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/findJobs" element={<Jobs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/public-profile" element={<Profile />} />
      <Route path="/premium" element={<Premium />} />
      <Route element={<AdminPrivateRoute />}>
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/account" element={<Account />} />
        <Route path="/admin/customers" element={<UserManage />} />
        <Route path="/admin/recruiters" element={<RecruterManage />} />
        <Route path="/admin/manage-posts" element={<ManagePosts />} />
      </Route>
      <Route element={<UserPrivateRoute />}>
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Route>
      <Route element={<RecruiterPrivateRoute />}>
        <Route path="/chat" element={<Chat />} />
        <Route path="/creatorDashboard" element={<CreatorDashboard />} />
        <Route path="/manageContents" element={<ManageContent />} />
        <Route path="/manageApplications" element={<ManageApplications />} />
        <Route path="/manageApplicants" element={<ManageApplicants />} />
        <Route path="/view-profile" element={<ViewProfile />} />
      </Route>
      <Route path="/detailPage" element={<DetailPage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default routes;
