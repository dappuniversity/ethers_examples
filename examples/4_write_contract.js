const { ethers, Wallet } = require("ethers");

const rpovider = new ethers.JsonRpcProvider("");

// Defining two Ethereum accounts and their private keys.
const account1 = ''; // Your account address 1
const account2 = ''; // Your account address 2

const privateKey1 = ""; // Private key of account 1

// Creating a wallet using the private key and the previously defined provider.
const wallet = new ethers.Wallet(privateKey1, provider);

// Defining an ERC20 token's ABI (Application Binary Interface), specifying functions the contract supports.
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

//fining the address of the ERC20 token contract.
const address = '';

// Creating an instance of the ERC20 token contract using the ABI, address, and provider.
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\n Reading from ${address}\n`);
  console.log(`Balance of sender: ${balance}`);

  const contractWithWallet = await contract.connect(Wallet);

  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait(); //contract mining

  console.log(tx);

  const balanceOfSender = await contract.balanceOf(account1);
  const balanceOfReceiver = await contract.balanceOf(account2);

  console.log(`\nBalance of sender: ${balanceOfSender}`);
  console.log(`Balance of receiver: ${balanceOfReceiver}\n`);
};

main();
