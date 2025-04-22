import { useBaseStore } from "@/base/stores/useBaseStore";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: FC = () => {
  const navigate = useNavigate();
  const { logout } = useBaseStore();
  const isAuthenticated = useBaseStore((store) => store.isAuthenticated());

  useEffect(() => {
    logout();
    navigate("/login");
  }, [isAuthenticated]);

  return null;
};

export default Logout;
