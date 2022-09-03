import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import ActionButton from "../../../components/Base/ActionButton/ActionButton";
import { adminAddress } from "../../../config/constant";
import { addCommas } from "../../../config/utils";
import { nextRound, startStaking } from "../../../hooks/Interactznxstake";
import { showAlert } from "../../../store/alert";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setStakinginfo } from "../../../store/initstakinginfo";
import {
  roundActive,
  isStarted,
  currentRound,
  claimedReward,
  totalRounds,
  roundCharge,
} from "../../../store/initstakinginfo/selectors";
import { useStyles } from "./GeneralStyles";

interface GeneralProps {
  metaAddress: string;
}

const General = ({ metaAddress }: GeneralProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [statusStartBtn, setStatusStartBtn] = useState(false);
  const [statusNextBtn, setStatusNextBtn] = useState(true);
  const stakingStatus = useAppSelector(isStarted);
  const roundStatus = useAppSelector(roundActive);
  const roundNum = useAppSelector(currentRound);
  const claimed = useAppSelector(claimedReward);
  const allRoundCount = useAppSelector(totalRounds);
  const perReward = useAppSelector(roundCharge);

  const handleStartStaking = async () => {
    let result = await startStaking();
    if (result === true) {
      dispatch(
        showAlert({
          message: "Staking start order is successfully published.",
          severity: "success",
        })
      );
    } else {
      dispatch(
        showAlert({
          message: "Staking start order isn't published.",
          severity: "error",
        })
      );
    }
    await dispatch(setStakinginfo());
  };

  const handleNextBtn = async () => {
    let result = await nextRound();
    if (result === true) {
      dispatch(
        showAlert({
          message: "Next Round start order is successfully published.",
          severity: "success",
        })
      );
    } else {
      dispatch(
        showAlert({
          message: "Next Round start order isn't published.",
          severity: "error",
        })
      );
    }
    await dispatch(setStakinginfo());
  };

  useEffect(() => {
    if (metaAddress.toLowerCase() !== adminAddress.toLowerCase()) {
      setStatusStartBtn(true);
      setStatusNextBtn(true);
      dispatch(
        showAlert({
          message: "This address isn't admin address.",
          severity: "error",
        })
      );
    } else {
      if (stakingStatus === false) {
        setStatusStartBtn(false);
        setStatusNextBtn(true);
      } else {
        setStatusStartBtn(true);
        if (roundStatus === true) {
          setStatusNextBtn(true);
        } else {
          setStatusNextBtn(false);
        }
      }
    }
  }, [roundStatus, stakingStatus, metaAddress]);

  return (
    <>
      <div className={classes.generalTitle}>General</div>
      <div className={classes.content}>
        <Grid container className={classes.itemRoot}>
          <Grid item container xs={12} sm={12} md={12} className={classes.item}>
            <Grid item xs={12} sm={4} md={4} className={classes.itemTitle}>
              <div className={classes.itemDot}></div>
              Staking Started
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.itemStatus}>
              {!stakingStatus ? "No" : "Yes"}
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <ActionButton
                color='lightblue'
                className={classes.startBtn}
                disable={statusStartBtn}
                statusClick={handleStartStaking}>
                Start Staking
              </ActionButton>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} className={classes.item}>
            <Grid item xs={12} sm={4} md={4} className={classes.itemTitle}>
              <div className={classes.itemDot}></div>
              Current Round
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.itemStatus}>
              {roundNum}
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} className={classes.item}>
            <Grid item xs={12} sm={4} md={4} className={classes.itemTitle}>
              <div className={classes.itemDot}></div>
              Round Status
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.itemStatus}>
              {roundStatus ? "Ongoing" : "Ended"}
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <ActionButton
                color='lightblue'
                className={classes.startBtn}
                statusClick={handleNextBtn}
                disable={statusNextBtn}>
                Next Round
              </ActionButton>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} className={classes.item}>
            <Grid item xs={12} sm={4} md={4} className={classes.itemTitle}>
              <div className={classes.itemDot}></div>
              Total Round
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.itemStatus}>
              {allRoundCount} Rounds
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} className={classes.item}>
            <Grid item xs={12} sm={4} md={4} className={classes.itemTitle}>
              <div className={classes.itemDot}></div>
              Reward Per Round
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.itemStatus}>
              {perReward} ZNX
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} className={classes.item}>
            <Grid item xs={12} sm={4} md={4} className={classes.itemTitle}>
              <div className={classes.itemDot}></div>
              Total Reward
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.itemStatus}>
              {allRoundCount * perReward} ZNX
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} className={classes.item}>
            <Grid item xs={12} sm={4} md={4} className={classes.itemTitle}>
              <div className={classes.itemDot}></div>
              Claimed Reward
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.itemStatus}>
              {addCommas(claimed)} ZNX
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default General;
