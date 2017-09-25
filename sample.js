'use strict'

const BlockBasic       = require( "./block-basic" )
const BlockProofOfWork = require( "./block-proof-of-work" )


{
  // try basic blocks

  let Block = BlockBasic

  let b0 = Block.first( 'Genesis' )
  let b1 = Block.next( b0, 'Transaction Data...' )
  let b2 = Block.next( b1, 'Transaction Data......' )
  let b3 = Block.next( b2, 'More Transaction Data...' )

  let blockchain = [b0, b1, b2, b3]

  console.log( blockchain )
}


{
  // try proof of work blocks

  let Block = BlockProofOfWork

  let b0 = Block.first( "Genesi" )
  let b1 = Block.next( b0, "Transaction Data..." )
  let b2 = Block.next( b1, "Transaction Data......" )
  let b3 = Block.next( b2, "More Transaction Data..." )

  let blockchain = [b0, b1, b2, b3]

  console.log( blockchain )
}


{
  // try adding transactions

  let Block = BlockBasic

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

  let blockchain = [b0, b1, b2]

  console.dir( blockchain, { depth: 3 } )
}
