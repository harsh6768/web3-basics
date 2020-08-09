const Web3=require('web3');

//url of etheum remote server 
//check infura.io to connect with remote ethere network
//create new project to get url of remote server
const url='https://mainnet.infura.io/v3/fb45d7cd293f427082924647bd6fb1fa';

const web3=new Web3(url);

// we will get the account balance 
// checkout etherscan to get accountAddress etherscan.io/accounts
const accountAddress='0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
// console.log(web3);

web3.eth.getBalance(accountAddress,(err,balance)=>{
    //Wei is the smallest value in ethereum blockchain
    console.log(`Account Balance in wei : ${balance}`);
    
    let ether= web3.utils.fromWei(balance,'ether');
    console.log(`Account Balance in ether : ${ether}`);

    //When we will deal with gas we will ofthen see Gwei
    let Gwei= web3.utils.fromWei(balance,'Gwei');
    console.log(`Account Balance in Gwei : ${Gwei}`);

})

//create new account in ethereum blockchain network 

let newAccount=web3.eth.accounts.create();

console.log(newAccount);

