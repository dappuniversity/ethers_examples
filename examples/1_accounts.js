const { ethers } = require("ethers");

// const INFURA_ID = "3eaee57df35f4e3e9f41c609cf6d774b";

const provider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/3eaee57df35f4e3e9f41c609cf6d774b'
);

const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const main = async () => {
  const balance = await provider.getBalance(address);

  console.log(
    `\n ETH Balance of ${address} --> ${ethers.utils.formatEther(
      balance
    )} ETH\n`
  );
};

main();
