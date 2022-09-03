import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const isStarted = (state: RootState) => state.stakinginfo.isStarted;
export const currentRound = (state: RootState) => state.stakinginfo.currentRound;
export const roundActive = (state: RootState) => state.stakinginfo.roundActive;
export const claimedReward = (state: RootState) => state.stakinginfo.claimedReward;
export const roundCharge = (state: RootState) => state.stakinginfo.roundCharge;
export const roundEndedData = (state: RootState) => state.stakinginfo.roundEndedData;
export const roundUserAddedData = (state: RootState) => state.stakinginfo.roundUserAddedData;
export const roundUserRemoved = (state: RootState) => state.stakinginfo.roundUserRemoved;
export const withdrawData = (state: RootState) => state.stakinginfo.withdrawData;
export const totalRounds = (state: RootState) => state.stakinginfo.totalRounds;
export const depositData = (state: RootState) => state.stakinginfo.depositData;