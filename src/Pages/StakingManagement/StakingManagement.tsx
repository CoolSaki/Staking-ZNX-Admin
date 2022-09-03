import { useEffect, useState } from "react";
import { LargeTitle } from "../../components/Base/Text/Text";
import wallet from "../../assets/images/wallet.png";
import { useStyles } from "./StakingManagementStyles";
import { useAppDispatch } from "../../store/hooks";
import { showAlert } from "../../store/alert";
import { connectMetamask } from "../../hooks/ConnectMetamask";
import { adminAddress, managementTab } from "../../config/constant";
import { CHAIN_INFO } from "../../config/provider/provider";
import General from "./General/General";
import UserStatistics from "./UserStatistics/UserStatistics";
import WithdrawAndDeposit from "./WithdrawAndDeposit/WithdrawAndDeposit";
import Detail from "./Detail/Detail";
import { useLocation, useNavigate } from "react-router-dom";

declare var window: any;

const StakingManagement = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginAddress, setLoginAddress] = useState(adminAddress);
  const [tab, setTab] = useState("");

  const query = new URLSearchParams(location.search);

  const handleTabClick = (search: string) => {
    query.set("tab", search);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  window.ethereum.on("accountsChanged", function (account: Array<string>) {
    setLoginAddress(account[0]);
  });

  window.ethereum.on("chainChanged", function (chainId: string) {
    let projectChainId = parseInt(CHAIN_INFO.TESTNET.chainId, 16);
    let changedChainId = parseInt(chainId, 16);
    if (changedChainId !== projectChainId) {
      handleSignin();
    }
  });

  const handleSignin = async () => {
    let address = await connectMetamask();
    if (address === "") {
      dispatch(
        showAlert({
          message: "You have to connect metamask.",
          severity: "error",
        })
      );
    }
    setLoginAddress(address);
  };

  useEffect(() => {
    handleSignin();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginAddress]);

  useEffect(() => {
    if (query.get("tab") === null) {
      setTab(managementTab.userstatistics);
      return;
    }
    if (query.get("tab") === managementTab.userstatistics) {
      setTab(managementTab.userstatistics);
    } else if (query.get("tab") === managementTab.withdrawdeposite) {
      setTab(managementTab.withdrawdeposite);
    } else {
      setTab(managementTab.detail);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className={classes.stakingManageRoot}>
        <LargeTitle>
          Staking Management
          <div className={classes.adminBtnRoot}>
            {loginAddress ? (
              <div className={classes.connectedwalletbtn}>
                {loginAddress.slice(0, 10)}
              </div>
            ) : (
              <div className={classes.connectwalletbtn}>
                Connect Wallet
                <img
                  src={wallet}
                  alt='wallet'
                  className={classes.walletconnection}
                />
              </div>
            )}
          </div>
        </LargeTitle>
        <div className={classes.container}>
          <General metaAddress={loginAddress} />
          <div className={classes.tablesRoot}>
            <div className={classes.tablesTabsRoot}>
              <div
                className={
                  tab === managementTab.userstatistics
                    ? classes.focusedTab
                    : classes.tab
                }
                onClick={(e) => handleTabClick(managementTab.userstatistics)}>
                User Statistics
              </div>
              <div
                className={
                  tab === managementTab.withdrawdeposite
                    ? classes.focusedTab
                    : classes.tab
                }
                onClick={(e) => handleTabClick(managementTab.withdrawdeposite)}>
                Withdraw & Deposite
              </div>
              <div
                className={
                  tab === managementTab.detail
                    ? classes.focusedTab
                    : classes.tab
                }
                onClick={(e) => handleTabClick(managementTab.detail)}>
                WithDraw / Deposite Detail
              </div>
            </div>
            <div className={classes.tableContent}>
              <div
                className={
                  tab === managementTab.userstatistics
                    ? classes.tableItem
                    : classes.displayNone
                }>
                <UserStatistics />
              </div>
              <div
                className={
                  tab === managementTab.withdrawdeposite
                    ? classes.tableItem
                    : classes.displayNone
                }>
                <WithdrawAndDeposit />
              </div>
              <div
                className={
                  tab === managementTab.detail
                    ? classes.tableItem
                    : classes.displayNone
                }>
                <Detail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingManagement;
