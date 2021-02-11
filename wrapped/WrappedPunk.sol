// File: contracts\cryptopunk\wrapped-punk\WrappedPunk.sol

pragma solidity ^0.5.0;



contract WrappedPunk is Ownable, ERC721Full, Pausable {

    event ProxyRegistered(address user, address proxy);

    // Instance of cryptopunk smart contract
    ICryptoPunk private _punkContract;

    // Mapping from user address to proxy address
    mapping(address => address) private _proxies;

    /**
     * @dev Initializes the contract settings
     */
    constructor(address punkContract)
        public
        ERC721Full("Wrapped Cryptopunks", "WPUNKS")
    {
        _punkContract = ICryptoPunk(punkContract);
    }

    /**
     * @dev Gets address of cryptopunk smart contract
     */
    function punkContract()
        public
        view
        returns (address)
    {
        return address(_punkContract);
    }

    /**
     * @dev Sets the base URI for all token
     */
    function setBaseURI(string memory baseUri)
        public
        onlyOwner
    {
        _setBaseURI(baseUri);
    }

    /**
     * @dev Triggers smart contract to stopped state
     */
    function pause()
        public
        onlyOwner
    {
        _pause();
    }

    /**
     * @dev Returns smart contract to normal state
     */
    function unpause()
        public
        onlyOwner
    {
        _unpause();
    }

    /**
     * @dev Registers proxy
     */
    function registerProxy()
        public
    {
        address sender = _msgSender();

        require(_proxies[sender] == address(0), "PunkWrapper: caller has registered the proxy");

        address proxy = address(new UserProxy());

        _proxies[sender] = proxy;

        emit ProxyRegistered(sender, proxy);
    }

    /**
     * @dev Gets proxy address
     */
    function proxyInfo(address user)
        public
        view
        returns (address)
    {
        return _proxies[user];
    }

    /**
     * @dev Mints a wrapped punk
     */
    function mint(uint256 punkIndex)
        public
        whenNotPaused
    {
        address sender = _msgSender();

        UserProxy proxy = UserProxy(_proxies[sender]);

        require(proxy.transfer(address(_punkContract), punkIndex), "PunkWrapper: transfer fail");

        _mint(sender, punkIndex);
    }

    /**
     * @dev Burns a specific wrapped punk
     */
    function burn(uint256 punkIndex)
        public
        whenNotPaused
    {
        address sender = _msgSender();

        require(_isApprovedOrOwner(sender, punkIndex), "PunkWrapper: caller is not owner nor approved");

        _burn(punkIndex);

        // Transfers ownership of punk on original cryptopunk smart contract to caller
        _punkContract.transferPunk(sender, punkIndex);
    }

    /**
     * @dev Internal function to transfer ownership of a given punk index to another address
     */
    function _transferFrom(address from, address to, uint256 punkIndex)
        internal
        whenNotPaused
    {
        super._transferFrom(from, to, punkIndex);
    }

}