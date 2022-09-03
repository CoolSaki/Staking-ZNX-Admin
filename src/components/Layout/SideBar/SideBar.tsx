import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { SideBarStyles } from "./SideBarStyles";
import { logoutUser } from "../../../store/auth";
import { useAppDispatch } from "../../../store/hooks";
import { sidebarUrl } from "../../../config/constant";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { IconButton } from "@material-ui/core";

export default function Header() {
  const classes = SideBarStyles();
  const navigate = useNavigate();
  const [selectedUrl, setSelectedUrl] = useState(0);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const handlestakinglog = () => {
    navigate("/");
    setShowMobileSidebar(false);
  };

  const handlestakingmanagement = () => {
    navigate("/manage");
    setShowMobileSidebar(false);
  };

  const handlelogout = async () => {
    await dispatch(logoutUser());
    navigate("/login");
  };

  const handleSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  useEffect(() => {
    location.pathname === "/" && setSelectedUrl(sidebarUrl.stakinglog);
    location.pathname === "/manage" &&
      setSelectedUrl(sidebarUrl.stakingmanagement);
  }, [location]);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.logContent}>
          <Link to='/' className={classes.logoContent}>
            <img src={"/logo.png"} className={classes.logo} alt='symbol' />
            <span className={classes.logoName}>Zilionixx</span>
          </Link>
        </div>
        <div className={classes.sidebarContent}>
          <div
            className={clsx(
              classes.sidebarBtn,
              selectedUrl === sidebarUrl.stakinglog && classes.plusBorder
            )}
            onClick={handlestakinglog}>
            Promoter Log
          </div>
          <div
            className={clsx(
              classes.sidebarBtn,
              selectedUrl === sidebarUrl.stakingmanagement && classes.plusBorder
            )}
            onClick={handlestakingmanagement}>
            StakingManagement
          </div>
          <div className={classes.sidebarBtn} onClick={handlelogout}>
            Logout
          </div>
        </div>
      </div>
      <div className={classes.mobileRoot}>
        <IconButton size='small' onClick={handleSidebar}>
          <DehazeIcon className={classes.iconMobile} />
        </IconButton>
        <div
          className={
            showMobileSidebar
              ? classes.sidebarMobileContainer
              : classes.displayNone
          }>
          <div className={classes.logContent}>
            <Link to='/' className={classes.logoContent}>
              <img src={"/logo.png"} className={classes.logo} alt='symbol' />
              <span className={classes.logoName}>Zilionixx</span>
            </Link>
          </div>
          <div className={classes.sidebarContent}>
            <div
              className={clsx(
                classes.sidebarBtn,
                selectedUrl === sidebarUrl.stakinglog && classes.plusBorder
              )}
              onClick={handlestakinglog}>
              Promoter Log
            </div>
            <div
              className={clsx(
                classes.sidebarBtn,
                selectedUrl === sidebarUrl.stakingmanagement &&
                  classes.plusBorder
              )}
              onClick={handlestakingmanagement}>
              StakingManagement
            </div>
            <div className={classes.sidebarBtn} onClick={handlelogout}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
