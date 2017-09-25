'use strict'

const SHA256 = require( "js-sha256" )     // for hash checksum digest function SHA256

class Block {

  constructor(index, data, previousHash ) {
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
                this.data.toString() +
                this.previousHash )
    return sha.hex()
  }

  static first( ...args ) {    // create genesis (big bang! first) block
    // note: unwrap (e.g. don't use an array if only one item/arg passed in)
    var data = args.length == 1 ? args[0] : args
    // uses index zero (0) and arbitrary previousHash ("0")
    return new Block( 0, data, "0" )
  }

  static next( previous, ...args ) {
    // note: unwrap (e.g. don't use an array if only one item/arg passed in)
    var data = args.length == 1 ? args[0] : args
    return new Block( previous.index+1, data, previous.hash )
  }
}

module.exports = Block
