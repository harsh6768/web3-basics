const Web3=require('web3');

// connecting to local private ethereum blockchain using Ganache 

let localUrl='HTTP://127.0.0.1:7545';

const web3=new Web3(localUrl);

//get account address from Ganache
let localAccountAddress='0x52E9B89FBdbCcd97aDB52915359f021550CE2107';

web3.eth.getBalance(localAccountAddress,(err,balance)=>{
    //Wei is the smallest value in ethereum blockchain
    console.log(`Account Balance in wei : ${balance}`);
    
    let ether= web3.utils.fromWei(balance,'ether');
    console.log(`Account Balance in ether : ${ether}`);

    //When we will deal with gas we will ofthen see Gwei
    let Gwei= web3.utils.fromWei(balance,'Gwei');
    console.log(`Account Balance in Gwei : ${Gwei}`);

})
