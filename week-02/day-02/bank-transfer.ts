'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

//this function identifies the position of the object within the array that includes the account number in question:
function indexOfAccount(number: number) {
  let checkOfAccounts: boolean[] = accounts.map(obj => obj.accountNumber === number);
  return checkOfAccounts.indexOf(true);
}

function getNameAndBalance(numberOfAccount: number) {
  if (indexOfAccount(numberOfAccount) === -1) {
    console.log('404 - account not found');
  } else {
    let NameAndBalance: any[] = [accounts[indexOfAccount(numberOfAccount)]['clientName'], accounts[indexOfAccount(numberOfAccount)]['balance']];
    console.log(NameAndBalance);
  }
}

getNameAndBalance(11234543);

function transferAmount(array, fromAccount, toAccount, number) {
  if (indexOfAccount(fromAccount) === -1 || indexOfAccount(toAccount) === -1) {
    console.log('404 - account not found');
  } else {
    array[indexOfAccount(fromAccount)]['balance'] -= number;
    array[indexOfAccount(toAccount)]['balance'] += number;
  }
}

transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};




