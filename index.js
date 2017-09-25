'use strict'

const BlockBasic       = require( "./block-basic" )
const BlockProofOfWork = require( "./block-proof-of-work" )


module.exports = { basic:       BlockBasic,
                   proofOfWork: BlockProofOfWork }
