// File: contracts\cryptopunk\wrapped-punk\UserProxy.sol

pragma solidity ^0.5.0;

contract UserProxy {

    address private _owner;

    /**
     * @dev Initializes the contract settings
     */
    constructor()
        public
    {
        _owner = msg.sender;
    }

    /**
     * @dev Transfers punk to the smart contract owner
     */
    function transfer(address punkContract, uint256 punkIndex)
        external
        returns (bool)
    {
        if (_owner != msg.sender) {
            return false;
        }

        (bool result,) = punkContract.call(abi.encodeWithSignature("transferPunk(address,uint256)", _owner, punkIndex));

        return result;
    }

}
