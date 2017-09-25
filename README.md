# Blockchain Lite (JavaScript Edition)

blockchain-lite library / module - build your own blockchain with crypto hashes - revolutionize the world with blockchains, blockchains, blockchains one block at a time


* home  :: [github.com/openblockchains/blockchain.lite.js](https://github.com/openblockchains/blockchain.lite.js)
* bugs  :: [github.com/openblockchains/blockchain.lite.js/issues](https://github.com/openblockchains/blockchain.lite.js/issues)
* npm   :: [npmjs.com/package/blockchain-lite](https://www.npmjs.com/package/blockchain-lite)


## What's a Blockchain?

> A blockchain is a distributed database with
> a list (that is, chain) of records (that is, blocks)
> linked and secured by digital fingerprints
> (that is, crypto hashes).

See the [Awesome Blockchains](https://github.com/openblockchains/awesome-blockchains) page for more.


## Usage

Let's get started.  Build your own blockchain one block at a time.
Example:

``` js
const Blocks = require( "blockchain-lite" )

// use basic block
let Block = Blocks.basic

let b0 = Block.first( 'Genesis' )
let b1 = Block.next( b0, 'Transaction Data...' )
let b2 = Block.next( b1, 'Transaction Data......' )
let b3 = Block.next( b2, 'More Transaction Data...' )

let blockchain = [b0, b1, b2, b3]

console.log( blockchain )
```

will log something like:

```
[ Block {
    index: 0,
    timestamp: 2017-09-25 17:03:38,
    data: 'Genesis',
    previousHash: '0',
    hash: '08f4fa71628c5bc6b430228738bc8c41afaf508ece0b1cf9c9cac53d02e11829' },
  Block {
    index: 1,
    timestamp: 2017-09-25 17:13:38,
    data: 'Transaction Data...',
    previousHash: '08f4fa71628c5bc6b430228738bc8c41afaf508ece0b1cf9c9cac53d02e11829',
    hash: '740a4aeb3441484c96d1e7f63d31b716220ccee3b6fe94547cae2afbb6010626' },
  Block {
    index: 2,
    timestamp: 2017-09-25 17:23:38,
    data: 'Transaction Data......',
    previousHash: '740a4aeb3441484c96d1e7f63d31b716220ccee3b6fe94547cae2afbb6010626',
    hash: '28b6892a069e2ff7f1c3128ab495d7cd9b9b1636a51a7f69db93a14b1ee6b1a7' },
  Block {
    index: 3,
    timestamp: 2017-09-25 17:33:38,
    data: 'More Transaction Data...',
    previousHash: '28b6892a069e2ff7f1c3128ab495d7cd9b9b1636a51a7f69db93a14b1ee6b1a7',
    hash: '4cc0329b2c0cb32e0451fa3179bd944d4cd0fcf410939172f979e9fd2aa9f5f3' } ]
```


### Blocks

[Basic](#basic) •
[Proof-of-Work](#proof-of-work)

Supported block types / classes for now include:

#### Basic

``` js
class Block {

  constructor(index, data, previousHash) {
    this.index        = index
    this.timestamp    = new Date()
    this.data         = data
    this.previousHash = previousHash
    this.hash         = this.calcHash()
  }

  calcHash() {
    var sha = SHA256.create()
    sha.update( this.index.toString() +
                this.timestamp.toString() +
                this.data +
                this.previousHash )
    return sha.hex()
  }
  ...
}
```

(Source: [block-basic.js](block-basic.js))


#### Proof-of-Work

``` js
class Block {

  constructor(index, data, previousHash) {
    this.index              = index
    this.timestamp          = new Date()
    this.data               = data
    this.previousHash       = previousHash
    [this.nonce,this.hash]  = this.computeHashWithProofOfWork()
  }

  calcHash() {
    var sha = SHA256.create()
    sha.update( this.nonce.toString() +
                this.index.toString() +
                this.timestamp.toString() +
                this.data +
                this.previousHash )
    return sha.hex()
  }
  ...
}
```

(Source: [block-proof-of-work.js](block-proof-of-work.js))


### Transactions

Let's put the transactions from the (hyper) ledger book from [Tulips on the Blockchain!](https://github.com/openblockchains/tulips)
on the blockchain:


| From                | To           | What                      | Qty |
|---------------------|--------------|---------------------------|----:|
| Dutchgrown (†)      | Vincent      | Tulip Bloemendaal Sunset  |  10 |
| Keukenhof (†)       | Anne         | Tulip Semper Augustus     |   7 |
|                     |              |                           |     |
| Flowers (†)         | Ruben        | Tulip Admiral van Eijck   |   5 |
| Vicent              | Anne         | Tulip Bloemendaal Sunset  |   3 |
| Anne                | Julia        | Tulip Semper Augustus     |   1 |
| Julia               | Luuk         | Tulip Semper Augustus     |   1 |
|                     |              |                           |     |
| Bloom & Blossom (†) | Daisy        | Tulip Admiral of Admirals |   8 |
| Vincent             | Max          | Tulip Bloemendaal Sunset  |   2 |
| Anne                | Martijn      | Tulip Semper Augustus     |   2 |
| Ruben               | Julia        | Tulip Admiral van Eijck   |   2 |
|                     |              |                           |     |
| Teleflora (†)       | Max          | Tulip Red Impression      |  11 |
| Anne                | Naomi        | Tulip Bloemendaal Sunset  |   1 |
| Daisy               | Vincent      | Tulip Admiral of Admirals |   3 |
| Julia               | Mina         | Tulip Admiral van Eijck   |   1 |

(†): Grower Transaction - New Tulips on the Market!


``` js
let b0 = Block.first(
        { from: "Dutchgrown", to: "Vincent", what: "Tulip Bloemendaal Sunset", qty: 10 },
        { from: "Keukenhof",  to: "Anne",    what: "Tulip Semper Augustus",    qty: 7  } )

let b1 = Block.next( b0,
        { from: "Flowers", to: "Ruben", what: "Tulip Admiral van Eijck",  qty: 5 },
        { from: "Vicent",  to: "Anne",  what: "Tulip Bloemendaal Sunset", qty: 3 },
        { from: "Anne",    to: "Julia", what: "Tulip Semper Augustus",    qty: 1 },
        { from: "Julia",   to: "Luuk",  what: "Tulip Semper Augustus",    qty: 1 } )

let b2 = Block.next( b1,
        { from: "Bloom & Blossom", to: "Daisy",   what: "Tulip Admiral of Admirals", qty: 8 },
        { from: "Vincent",         to: "Max",     what: "Tulip Bloemendaal Sunset",  qty: 2 },
        { from: "Anne",            to: "Martijn", what: "Tulip Semper Augustus",     qty: 2 },
        { from: "Ruben",           to: "Julia",   what: "Tulip Admiral van Eijck",   qty: 2 } )
...
```

resulting in:

```
[ Block {
    index:     0,
    timestamp: 1637-09-25 17:39:21,
    data:
     [ { from: 'Dutchgrown', to: 'Vincent',  what: 'Tulip Bloemendaal Sunset', qty: 10 },
       { from: 'Keukenhof',  to: 'Anne',     what: 'Tulip Semper Augustus',    qty: 7 } ],
    previousHash: '0',
    hash:         '7cb2df9eee29ca77c99eb4591a25dcbdfa9609aff2bd3558d1a0fe22acd08a51' },
  Block {
    index:     1,
    timestamp: 1637-09-25 17:49:21,
    data:
     [ { from: 'Flowers',  to: 'Ruben',  what: 'Tulip Admiral van Eijck',   qty: 5 },
       { from: 'Vicent',   to: 'Anne',   what: 'Tulip Bloemendaal Sunset',  qty: 3 },
       { from: 'Anne',     to: 'Julia',  what: 'Tulip Semper Augustus',     qty: 1 },
       { from: 'Julia',    to: 'Luuk',   what: 'Tulip Semper Augustus',     qty: 1 } ],
    previousHash: '7cb2df9eee29ca77c99eb4591a25dcbdfa9609aff2bd3558d1a0fe22acd08a51',
    hash:         'a7464e98290039f467e7abf6699180205f5151e76b57a79b39f43acc39d75660' },
  Block {
    index:     2,
    timestamp: 1637-09-25 17:59:21,
    data:
     [ { from: 'Bloom & Blossom', to: 'Daisy',    what: 'Tulip Admiral of Admirals', qty: 8 },
       { from: 'Vincent',         to: 'Max',      what: 'Tulip Bloemendaal Sunset',  qty: 2 },
       { from: 'Anne',            to: 'Martijn',  what: 'Tulip Semper Augustus',     qty: 2 },
       { from: 'Ruben',           to: 'Julia',    what: 'Tulip Admiral van Eijck',   qty: 2 } ],
    previousHash: 'a7464e98290039f467e7abf6699180205f5151e76b57a79b39f43acc39d75660',
    hash:         'b7e4952f801651c1e14d61d77b869d18268b46c468923089f1da33e3959b56b9' },
  ...
]
```


## Install

Add the the module to your package e.g.:

```
$ npm install --save blockchain-lite
```

-or-

```
$ yarn add blockchain-lite
```


## License

![](https://publicdomainworks.github.io/buttons/zero88x31.png)

The `blockchain.lite` scripts are dedicated to the public domain.
Use it as you please with no restrictions whatsoever.
