import { ethers } from "ethers";
import { getProvider } from "./common";
import { znxstakeAddress, znxstakeAbi } from "../config/znxstake";

var provider: any;
var signer: any;

export const startStaking = async () => {
  try {
    provider = getProvider();
    signer = provider.getSigner();

    var znxStakeContract = new ethers.Contract(
      znxstakeAddress,
      znxstakeAbi,
      signer
    );
    await znxStakeContract.startStaking();
    return true;
  } catch (error) {
    return false;
  }
};

export const nextRound = async () => {
  try {
    provider = getProvider();
    signer = provider.getSigner();
    var znxStakeContract = new ethers.Contract(
      znxstakeAddress,
      znxstakeAbi,
      signer
    );
    let nextRoundTx =await znxStakeContract.startNextRound();
    await nextRoundTx.wait();
    return true;
  } catch (error) {
    return false;
  }
};