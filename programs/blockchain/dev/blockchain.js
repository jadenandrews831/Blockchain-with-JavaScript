const sha256 = require('sha256');
const uuid = require('uuidv1')

const currentNodeUrl = process.argv[3];

function Blockchain () {
  this.chain = [];
  this.pendingTransactions = [];
  this.currentNodeUrl = currentNodeUrl;
  this.networkNodes = [];
  this.createNewBlock(100, '0', '0');
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1]
}

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient,
    transactionId: uuid().split('-').join('')
  }

  return newTransaction
}

Blockchain.prototype.addTransactionToPendingTransactions = function (newTransaction) {
  this.pendingTransactions.push(newTransaction);
  return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== '0000') {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    // console.log(hash);
  }
  return nonce
}

Blockchain.prototype.chainIsValid = function(blockchain) {
  let validChain = true;

  const genesisBlock = blockchain[0];
  const correctNonce = genesisBlock.nonce === 100;
  const correctPreviousBlockHash = genesisBlock.previousBlockHash === '0';
  const correctHash = genesisBlock.hash === '0';
  const correctTransactions = genesisBlock.transactions.length === 0
  if (!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;

  for (var i = 1; i < blockchain.length; i++)
  {
    const currentBlock = blockchain[i];
    const lastBlock = blockchain[i - 1];
    const blockHash = this.hashBlock(lastBlock.hash, {transactions: currentBlock.transactions, index: currentBlock.index}, currentBlock.nonce);
    if(currentBlock.previousBlockHash !== lastBlock.hash) validChain = false;
    if(!blockHash.startsWith('0000')) validChain = false;
    console.log('previousBlockHash =>', lastBlock.hash)
    console.log('currentBlockHash =>', currentBlock.hash)
  }
  return validChain;
}

Blockchain.prototype.getBlock = function(blockHash) {
  let correctBlock = null;
  this.chain.forEach(block => {
    if (block.hash == blockHash) correctBlock = block;
  });
  return correctBlock;
}

Blockchain.prototype.getTransaction = function(transactionId) {
  let correctTransaction = null;
  let correctBlock = null;
  this.chain.forEach(block => {
    let transactions = block.transactions
    transactions.forEach(transaction => {
      if (transaction.transactionId === transactionId) {
        correctTransaction = transaction;
        correctBlock = block;
      }
    });
  });
  return {
    transaction: correctTransaction,
    block: correctBlock
  }
}

Blockchain.prototype.getAddressData = function(address){
  const addressTransactions = [];
  this.chain.forEach(block => {
    block.transactions.forEach(transaction => {
      const sender = transaction.sender;
      const recipient = transaction.recipient;
      if (sender == address || recipient == address) addressTransactions.push(transaction)
    });
  });
  
  let balance = 0;
  addressTransactions.forEach(transaction => {
    if (transaction.recipient == address) balance += transaction.amount;
    else if (transaction.sender) balance -= transaction.amount;
  });
  return {
    addressTransactions: addressTransactions,
    addressBalance: balance
  }
}

module.exports = Blockchain;