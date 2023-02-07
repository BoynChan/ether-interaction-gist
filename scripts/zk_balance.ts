import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log(
    `In Zk Network: ${owner.address} has ${ethers.utils.formatEther(
      await owner.getBalance()
    )} ETH`
  );
  const tx = await owner.sendTransaction({
    to: "0x95ca7de8fedcfa32f05f2bc7d96e5ad9ef96a096",
    data: "0xb6f9de950000000000000000000000000000000000000000000000055c912cea564332330000000000000000000000000000000000000000000000000000000000000080000000000000000000000000660677e325090767efae070d66d9b8a9d0aa24c00000000000000000000000000000000000000000000000000000000063e1a6e400000000000000000000000000000000000000000000000000000000000000020000000000000000000000002313f1aa80b58aafe0523ebb63010cced4eb12740000000000000000000000002e4805d59193e173c9c8125b4fc8f7f9c7a3a3ed",
    value: ethers.utils.parseEther("0.000000000004"),
  });
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
