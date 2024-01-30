const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/3eaee57df35f4e3e9f41c609cf6d774b"
);

const account1 = "0xecCb2450889B3f68C0cd234FE05420Ef87b0a027"; //sender
const account2 = "0xD43cA3765c530D697fa2ECe322d2d43d993d0651"; //recepient
const privateKey1 =
  "25202a70c90a9d9b1f20d20066b6b67ec95ce231b09f11ef109406a839fc9794"; //sender private key

//creating a wallet of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  const senderBalanceBefore = await provider.getBalance(account1);
  const receiverBalanceBefore = await provider.getBalance(account2);
  // Logging the balances before the transaction in a user-friendly format.
  console.log(
    `\n Sender Balance Before: ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `\n Receiver Balance Before: ${ethers.utils.formatEther(
      receiverBalanceBefore
    )}`
  );

  //send ether
  const tx = await wallet.sendTransaction({
    to: account2,
    from: ethers.utils.parseEther("0.025"), //0.025 ether to WEI
  });

  //Wait for transaction to be mined
  await tx.wait();
  console.log(tx);

  // Getting the balances of the sender and receiver accounts after the transaction.
  const senderBalanceAfter = await provider.getBalance(account1);
  const receiverBalance = await provider.getBalance(account2);

  // Logging the balances after the transaction in a user-friendly format
  console.log(
    `\n Sender Balance After: ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `\n Receiver Balance After: ${ethers.utils.formatEther(
      receiverBalanceAfter
    )}`
  );
};

main();
