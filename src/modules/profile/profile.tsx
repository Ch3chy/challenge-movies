import { FC } from "react";
import { Outlet } from "react-router-dom";

const Profile: FC = () => {
  return <div>
    <h1>Profile</h1>
    <Outlet />
  </div>;
};

export default Profile;
