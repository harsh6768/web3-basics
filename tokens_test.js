const Web3 = require('web3');

const url = 'https://mainnet.infura.io/v3/fb45d7cd293f427082924647bd6fb1fa';

const web3 = new Web3(url);

//Api Of ChainLink Token
const abi = [
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [{ name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ name: '_spender', type: 'address' },
			{ name: '_value', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ name: '_from', type: 'address' },
			{ name: '_to', type: 'address' },
			{ name: '_value', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [{ name: '', type: 'uint8' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ name: '_to', type: 'address' },
			{ name: '_value', type: 'uint256' },
			{ name: '_data', type: 'bytes' },
		],
		name: 'transferAndCall',
		outputs: [{ name: 'success', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ name: '_spender', type: 'address' },
			{ name: '_subtractedValue', type: 'uint256' },
		],
		name: 'decreaseApproval',
		outputs: [{ name: 'success', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ name: '_owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ name: 'balance', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [{ name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ name: '_to', type: 'address' },
			{ name: '_value', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: 'success', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ name: '_spender', type: 'address' },
			{ name: '_addedValue', type: 'uint256' },
		],
		name: 'increaseApproval',
		outputs: [{ name: 'success', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{ name: '_owner', type: 'address' },
			{ name: '_spender', type: 'address' },
		],
		name: 'allowance',
		outputs: [{ name: 'remaining', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: 'from', type: 'address' },
			{ indexed: true, name: 'to', type: 'address' },
			{ indexed: false, name: 'value', type: 'uint256' },
			{ indexed: false, name: 'data', type: 'bytes' },
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: 'owner', type: 'address' },
			{ indexed: true, name: 'spender', type: 'address' },
			{ indexed: false, name: 'value', type: 'uint256' },
		],
		name: 'Approval',
		type: 'event',
	},
];

const contractAddress = '0x514910771AF9Ca656af840dff83E8264EcF986CA';

//Creating new contract

const contract = new web3.eth.Contract(abi, contractAddress);

//will return the token name
contract.methods.name().call((err, tokenName) => {
	console.log(`Token Name : ${tokenName}`);
});

//will return token
contract.methods.symbol().call((err, symbol) => {
	console.log(`Symbol : ${symbol}`);
});

//will return the total number of token really exist
contract.methods.totalSupply().call((err, totalSupply) => {
	console.log(`Total Supply : ${totalSupply}`);
});

//etherscan.io ,go to token >> go to any token>>> select holder >>> select contract address
const accountAddress = '0x514910771af9ca656af840dff83e8264ecf986ca';

//will return the total number of token that a smart contract or account holder has it
contract.methods.balanceO(accountAddress).call((err, balance) => {
	console.log(`Account Balance or total token  : ${balance}`);
});
