'use strict'

const SHA256 = require( "js-sha256" )     // for hash checksum digest function SHA256

class Block {

  constructor(index, data, previousHash) {
    this.index               = index
    this.timestamp           = new Date()
    this.data                = data
    this.previousHash        = previousHash

    // todo/fix: how to assign at-once - possible????
    var res = this.computeHashWithProofOfWork()
    this.nonce = res[0]
    this.hash  = res[1]
  }

  computeHashWithProofOfWork( difficulty="00" ) {
    var nonce = 0
    while( true ) {
      var hash = this.calcHashWithNonce( nonce )
      if( hash.startsWith( difficulty ))
        return [nonce, hash]  // bingo! proof of work if hash starts with leading zeros (00)
      else
        nonce += 1            // keep trying (and trying and trying)
    }
  }

  calcHashWithNonce( nonce=0 ) {
    var sha = SHA256.create()
    sha.update( nonce.toString() + this.index.toString() + this.timestamp.toString() + this.data + this.previousHash )
    return sha.hex()
  }

  calcHash() {
    var sha = SHA256.create()
    sha.update( this.nonce.toString() + this.index.toString() + this.timestamp.toString() + this.data + this.previousHash )
    return sha.hex()
  }


  static first( data="Genesis" ) {    // create genesis (big bang! first) block
    // uses index zero (0) and arbitrary previousHash ("0")
    return new Block( 0, data, "0" )
  }

  static next( previous, data="Transaction Data..." ) {
    return new Block( previous.index+1, data, previous.hash )
  }
}


module.exports = Block
