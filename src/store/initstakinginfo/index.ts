import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { setStakinginfo } from "./actions";
import type { Stakingstate } from "./types";

const PREFIX = "Stakinginfo";

const initialState: Stakingstate = {
  isStarted: false,
  currentRound: 0,
  roundActive: false,
  claimedReward: 0,
  roundCharge:0,
  totalRounds:0,
  roundEndedData: [],
  roundUserAddedData: [],
  roundUserRemoved: [],
  withdrawData: [],
  depositData: [],
};

const handleStakinginfo = (state: Stakingstate, res: any) => {
  state.isStarted = res.isStarted;
  state.currentRound = Number(res.currentRound);
  state.roundActive = res.roundActive;
  state.claimedReward = Number(ethers.utils.formatUnits(res.claimedReward, 18));
  state.roundCharge = Number(ethers.utils.formatUnits(res.roundCharge, 18));
  state.totalRounds = Number(res.totalRounds);
  state.roundEndedData = res.roundEndedData;
  state.roundUserAddedData = res.roundUserAddedData;
  state.roundUserRemoved = res.roundUserRemoved;
  state.withdrawData = res.withdrawData;
  state.depositData = res.depositData;
};

export const stakinginfoReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setStakinginfo.fulfilled.type,
      (state: Stakingstate, action: PayloadAction<any>) => {
        handleStakinginfo(state, action.payload);
      }
    );
  },
});

export { setStakinginfo };

export default stakinginfoReducer.reducer;
