import { ethers } from "hardhat";
import { Usdt__factory } from "../types/ethers-contracts";

async function main() {
  const [owner] = await ethers.getSigners();
  // on polygon
  const uc = await Usdt__factory.connect(
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    owner
  );
  const d = await uc.decimals();
  uc.on(uc.filters.Transfer(), (from, to, value) => {
    console.log(
      `Uc transfer event: from:${from} to:${to} value:${value
        .div(d)
        .toNumber()
        .toFixed(2)}`
    );
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
