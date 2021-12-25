import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import AdminUserList from "./Components/AdminUser/AdminUserList";
import AddAdminUser from "./Components/AdminUser/AddAdminUser";
import UserList from "./Components/ManageUser/UserList";
import AddUser from "./Components/ManageUser/AddUser";
import LeaderList from "./Components/ManageLeader/LeaderList";
import AddLeader from "./Components/ManageLeader/AddLeader";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import GroupList from "./Components/ManageGroup/GroupList";
import AddGroup from "./Components/ManageGroup/AddGroup";
import ManageCreatedTemplate from "./Components/ManageCreatedTemplate/ManageCreatedTemplate";
import VideoList from "./Components/ManageVideo/VideoList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/*Manage admin */}
        <Route path="/admin-user-list" element={<AdminUserList />} />
        <Route path="/add-admin" element={<AddAdminUser />} />

        {/*Manage User */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />

        {/*Manage Leader */}
        <Route path="/leader-list" element={<LeaderList />} />
        <Route path="/add-leader" element={<AddLeader />} />

        {/*Manage Created Template */}
        <Route path="/template-list" element={<ManageCreatedTemplate />} />

        {/*Manage Password */}
        <Route path="/change-password" element={<ChangePassword />} />

        {/*Manage Group */}
        <Route path="/group-list" element={<GroupList />} />
        <Route path="/add-group" element={<AddGroup />} />

        {/*Manage Video */}
        <Route path="/video-list" element={<VideoList />} />
      </Routes>
    </>
  );
}

export default App;
