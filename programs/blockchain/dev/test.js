const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();

const previousBlockHash = 'ASDLFKJ52958UGA895423HOAH98Q2H'
const currentBlockData = [
  {
    amount: 10, 
    sender: 'NAFO4290GJ490',
    recipient: 'AD9052JT2T9G'
  },
  {
    amount: 162, 
    sender: 'AG8G2UB0JAF',
    recipient: 'JKJRHE105GJ'
  },
  {
    amount: 4823, 
    sender: 'OIQUTWJVOIBBE',
    recipient: 'WTH8187G4N0B'
  }
];

nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData)
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))



// Example blocks and transactions
// bitcoin.createNewBlock(2389,'OIUOEREDHKHKD','78s97d4x6dsf');
// bitcoin.createNewBlock(2390,'FDAKJFKKFEOWG','48gj4839gh4g');
// bitcoin.createNewBlock(2389,'FKKJFOQNNZIOF','gfd90sk40g9f');
// bitcoin.createNewBlock(2382,'QHFIZOFIJDGWL','sdlgh428gz84');
// bitcoin.createNewBlock(2349,'IFOGIROWOHGNF','ljgr08u25njg');
// bitcoin.createNewBlock(2339,'LHJZGOOGLFKGJ','fakuh3289k49');

// bitcoin.createNewTransaction(100, 'ALEXASDKLJ923408GJF', 'JENAFKJ249G8AH42');
// bitcoin.createNewTransaction(263, 'ALEXASDKLJ923408GJF', 'JENAFKJ249G8AH42');
// bitcoin.createNewTransaction(5743, 'ALEXASDKLJ923408GJF', 'JENAFKJ249G8AH42');
// bitcoin.createNewTransaction(54, 'ALEXASDKLJ923408GJF', 'JENAFKJ249G8AH42');