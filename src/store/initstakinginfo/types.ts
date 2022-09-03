interface Stakingstate {
  isStarted: boolean;
  currentRound: number;
  roundActive: boolean;
  claimedReward: number;
  roundCharge:number;
  totalRounds:number;
  roundEndedData: any;
  roundUserAddedData: any;
  roundUserRemoved: any;
  withdrawData: any;
  depositData: any;
}


export type { Stakingstate };
