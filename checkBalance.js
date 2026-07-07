import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://ethereum-rpc.publicnode.com"
  );

  const blockNumber = await provider.getBlockNumber();
  console.log("Current block:", blockNumber);
}

main();
