const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/3eaee57df35f4e3e9f41c609cf6d774b"
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract

//creating an instance of the contract

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = contract.name();
  const symbol = contract.symbol();
  const totalSupply = contract.totalSupply();

  console.log(`\n Reading from ${address}\n`);
  console.log(`Name : ${name}`);
  console.log(`Symbol : ${symbol}`);
  console.log(`TotalSupply : ${totalSupply}`);

  const balance = await contract.balanceOf(
    "0x6c6Bc977E13Df9b0de53b251522280BB72383700"
  );

  console.log(`Balance returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}`); // converting DAI to Ethers format
};

