const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();

const bc1 = {
  "chain": [
    {
      "index": 1,
      "timestamp": 1670508752058,
      "transactions": [],
      "nonce": 100,
      "hash": "0",
      "previousBlockHash": "0"
    },
    {
      "index": 2,
      "timestamp": 1670508777157,
      "transactions": [],
      "nonce": 18140,
      "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      "previousBlockHash": "0"
    },
    {
      "index": 3,
      "timestamp": 1670508817194,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "724659a076d811ed833b0fd67089a200",
          "transactionId": "81417e8076d811ed845fc23f1ed1d426"
        },
        {
          "amount": 100,
          "sender": "0FJ0DSF09FH0FH3188FE01H331F",
          "recipient": "APMVDSVV4NVF9S0J0SJ4WV9J0SVJV",
          "transactionId": "8c9f586076d811ed8b3e01a805be4db9"
        },
        {
          "amount": 200,
          "sender": "0FJ0DSF09FH0FH3188FE01H331F",
          "recipient": "APMVDSVV4NVF9S0J0SJ4WV9J0SVJV",
          "transactionId": "8edff99076d811ed835310a5fc17c192"
        },
        {
          "amount": 300,
          "sender": "0FJ0DSF09FH0FH3188FE01H331F",
          "recipient": "APMVDSVV4NVF9S0J0SJ4WV9J0SVJV",
          "transactionId": "9130794076d811ed8af4a853d59bddc2"
        }
      ],
      "nonce": 22328,
      "hash": "0000439bbaaa7e70105ea354135f194e46d27e86bc7802734faf64e6bf277e51",
      "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      "index": 4,
      "timestamp": 1670508854149,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "724659a076d811ed833b0fd67089a200",
          "transactionId": "9919ece076d811ed8f9c6a622aee9882"
        },
        {
          "amount": 400,
          "sender": "0FJ0DSF09FH0FH3188FE01H331F",
          "recipient": "APMVDSVV4NVF9S0J0SJ4WV9J0SVJV",
          "transactionId": "a44e45c076d811ed88f7174031d07e16"
        },
        {
          "amount": 500,
          "sender": "0FJ0DSF09FH0FH3188FE01H331F",
          "recipient": "APMVDSVV4NVF9S0J0SJ4WV9J0SVJV",
          "transactionId": "a64d983076d811ed8bf30d3527176151"
        },
        {
          "amount": 600,
          "sender": "0FJ0DSF09FH0FH3188FE01H331F",
          "recipient": "APMVDSVV4NVF9S0J0SJ4WV9J0SVJV",
          "transactionId": "a83b376076d811ed864b8ae3bcf5a58b"
        }
      ],
      "nonce": 56777,
      "hash": "0000c9ccf3802513a0e741fcab68496ae1a22bb91681e40d0ff671db5a9fb927",
      "previousBlockHash": "0000439bbaaa7e70105ea354135f194e46d27e86bc7802734faf64e6bf277e51"
    }
  ],
  "pendingTransactions": [
    {
      "amount": 12.5,
      "sender": "00",
      "recipient": "724659a076d811ed833b0fd67089a200",
      "transactionId": "af20f6a076d811ed8e4be20dc41f0978"
    }
  ],
  "currentNodeUrl": "http://localhost:3001",
  "networkNodes": []
}

console.log('Valid:', bitcoin.chainIsValid(bc1.chain))


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