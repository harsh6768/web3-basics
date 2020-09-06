/*
  We will learn how to create transaction ,sign the transaction (unlock the transaction)
  and how to broadcast the transaction to ropsten test blockchain network 
  We will also check transaction status in ropsten.etherscan.io
*/

const Tx = require('ethereumjs-tx').Transaction;

const Web3 = require('web3');
const dotenv = require('dotenv');

dotenv.config();

// infura rapsten test network url
const url = 'https://ropsten.infura.io/v3/fb45d7cd293f427082924647bd6fb1fa';

//creating new node in rospten test network
const web3 = new Web3(url);

const account1 = '0xD00fa94f727e2B7F81ff918414722B40Ce9E9575';
const account2 = '0xA8aB96567b1eD20953dD44762d892b21361fd012';

const privateKey1 = process.env.PRIVATE_KEY_1;
const privateKey2 = process.env.PRIVATE_KEY_2;

// console.log(privateKey1);

//We need to convert private key into bite code
const pKey1 = Buffer.from(privateKey1, 'hex');
const pKey2 = Buffer.from(privateKey2, 'hex');

web3.eth.getTransactionCount(account1, (err, txCount) => {
	let txObject = {
		nonce: web3.utils.toHex(txCount),
		to: account2,
		value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
		gasLimit: web3.utils.toHex(21000),
		gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')), //we provide gwei value in gasPrice
	};

	//creating transaction object
	//need to specify network to make work the transaction broadcast
	const tx = new Tx(txObject, { chain: 'ropsten' });
	//Sign the transaction
	tx.sign(pKey1);

	// serialize transaction
	const serializedTransaction = tx.serialize();
	const raw = '0x' + serializedTransaction.toString('hex');

	//Broadcast the transaction from one account to another account
	web3.eth.sendSignedTransaction(raw, (err, result) => {
		console.log(`Transaction Hash : ${result}`);
	});

	// web3.eth.sendSignedTransaction(raw).on('receipt', console.log);
});
