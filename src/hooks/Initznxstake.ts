import { ethers } from "ethers";
import { CHAIN_INFO } from "../config/provider/provider";
import { znxstakeAddress, znxstakeAbi } from "../config/znxstake";

const provider = new ethers.providers.JsonRpcProvider(
  CHAIN_INFO.TESTNET.rpcUrls[0]
);

const znxstakeContract = new ethers.Contract(
  znxstakeAddress,
  znxstakeAbi,
  provider
);

const getNeedData = (array: any) => {
  let result: any = [];
  for (let i = 0; i < array?.length; i++) {
    result.push(array[i]?.args);
  }
  return result;
};

export const useInitZnxStake = async () => {
  var promises = [];
  promises.push(znxstakeContract.isStarted());
  promises.push(znxstakeContract.getRoundStatus());
  promises.push(znxstakeContract.claimedReward());
  promises.push(znxstakeContract.roundCharge());
  promises.push(znxstakeContract.totalRounds());
  let filterRoundEnded = znxstakeContract.filters.RoundEnded();
  let logsRoundEnded = await znxstakeContract.queryFilter(
    filterRoundEnded,
    -2000,
    "latest"
  );
  promises.push(getNeedData(logsRoundEnded));

  let filterRoundUserAdded = znxstakeContract.filters.RoundUserAdded();
  let logsRoundUserAdded = await znxstakeContract.queryFilter(
    filterRoundUserAdded,
    -2000,
    "latest"
  );
  promises.push(getNeedData(logsRoundUserAdded));

  let filterRoundUserRemoved = znxstakeContract.filters.RoundUserRemoved();
  let logsRoundUserRemoved = await znxstakeContract.queryFilter(
    filterRoundUserRemoved,
    -2000,
    "latest"
  );
  promises.push(getNeedData(logsRoundUserRemoved));

  let filterWithDraw = znxstakeContract.filters.Withdraw();
  let logsWithDraw = await znxstakeContract.queryFilter(
    filterWithDraw,
    -2000,
    "latest"
  );
  promises.push(getNeedData(logsWithDraw));

  let filterDeposit = znxstakeContract.filters.Deposit();
  let logsDeposit = await znxstakeContract.queryFilter(
    filterDeposit,
    -2000,
    "latest"
  );
  promises.push(getNeedData(logsDeposit));
  
  const txPromises = await Promise.all(promises);

  const StakeInfo = {
    isStarted: txPromises[0],
    currentRound: txPromises[1][0].toString(),
    roundActive: txPromises[1][1],
    claimedReward: txPromises[2].toString(),
    roundCharge: txPromises[3].toString(),
    totalRounds: txPromises[4].toString(),
    roundEndedData: txPromises[5],
    roundUserAddedData: txPromises[6],
    roundUserRemoved: txPromises[7],
    withdrawData: txPromises[8],
    depositData: txPromises[9],
  };

  return StakeInfo;
};
