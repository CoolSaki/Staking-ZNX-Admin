import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Layout from "./Layout/Layout";
import StakingLog from "../Pages/PromoterLog/PromoterLog";
import StakingManagement from "../Pages/StakingManagement/StakingManagement";
import Alert from "../components/Base/Alert";
import ProtectLogin from "./ProtectLogin";
import { useAppDispatch } from "../store/hooks";
import { setStakinginfo } from "../store/initstakinginfo";
import { useEffect } from "react";

export default function RouterComponent() {

  const dispatch = useAppDispatch();
  const initSet = async () => {
    await dispatch(setStakinginfo());
  };

  useEffect(() => {
    initSet();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<StakingLog />} />
          <Route path="manage" element={<StakingManagement />} />
        </Route>
        <Route path="/login" element={<ProtectLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Alert />
    </Router>
  );
}
