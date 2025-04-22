import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";

const ProfileRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
};

export default ProfileRoutes;
