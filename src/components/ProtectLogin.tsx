import { Navigate, Outlet } from "react-router-dom";
import { selectLoginStatus } from "../store/auth/selectors";
import { useAppSelector } from "../store/hooks";

export default function ProtectLogin() {
  const loginStatus = useAppSelector(selectLoginStatus);
  return !loginStatus ? <Outlet /> : <Navigate to="/" />;
}
