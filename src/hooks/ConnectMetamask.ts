import { CHAIN_INFO } from "../config/provider/provider";
import { getProvider } from "./common";

declare var window: any;
var provider: any;
var signer: any;
var loginAddress: string;

export const connectMetamask = async () => {
  if (window.ethereum) {
    provider = getProvider();

    // get current network id
    const { chainId } = await provider.getNetwork();
    let znxChainId: number = parseInt(CHAIN_INFO.TESTNET.chainId, 16);

    // check current chain id is equal to Zilionixx Mainnet
    if (chainId === znxChainId) {
      await getSignerAndAddress();
    } else {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: CHAIN_INFO.TESTNET.chainId }],
        });

        // switch provider and signer to zilionixx network
        provider = getProvider();
        await getSignerAndAddress();
      } catch (switchError: any) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902 || switchError.code === 32603) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: CHAIN_INFO.TESTNET.chainId,
                  chainName: CHAIN_INFO.TESTNET.chainName,
                  rpcUrls: CHAIN_INFO.TESTNET.rpcUrls /* ... */,
                },
              ],
            });

            // switch provider and signer to zilionixx network
            provider = getProvider();
            await getSignerAndAddress();
          } catch (addError) {
            // handle "add" error
            window.alert(
              "Can not add Zilionixx network. Please add Zilionixx network manually."
            );
          }
        }
        // handle other "switch" errors
      }
    }
  } else {
    window.alert(
      "Metamask seem to be not installed. Please install metamask first by clicking install button."
    );
  }
  return loginAddress;
};

const getSignerAndAddress = async () => {
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  loginAddress = await signer.getAddress();
};
