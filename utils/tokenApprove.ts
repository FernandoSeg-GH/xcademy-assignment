import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);

const tokenAddress = "0xCfD9F58d0E9F035890DB489B9785d5c230Da01Ba";
const tokenAbi = [
  "function approve(address spender, uint256 amount) public returns (bool)",
];

export const tokenApprove = () => {};
