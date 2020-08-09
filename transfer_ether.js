const Web3 = require('web3');

//Ganache Local memory blockchain
const url = 'http://127.0.0.1:7545';
const web3 = new Web3(url);


//Take account from Ganache 
const account1 = '0x52E9B89FBdbCcd97aDB52915359f021550CE2107';
const account2 = '0x029b36683DAA854FcbcF553f579B396Aa5Be21f5';

web3.eth.getBalance(account1, (err, balance) => {
	console.log(`Account 1 Balanace in wei : ${balance}`);
});

//transfer amount
web3.eth.sendTransaction(
	{ from: account1, to: account2, value: web3.utils.toWei('1', 'ether') },
	(err, transactionId) => {
		console.log(`Transaction Id is : ${transactionId}`);
	}
);
//check account balance
web3.eth.getBalance(account2, (err, balance) => {
	console.log(`Account 2 Balanace in wei : ${balance}`);
});
