
_Code on the Blockchain - Electronic Contract Scripts_


# Inside the Wrapped Punk (WPUNKS) Blockchain Contract / Service


Turn classic unique punks into "standardized" non-fungible tokens

How? Non-fungible Tokens (ERC721 on Ethereum) each backed 1:1 by a CryptoPunk



## Source Code

Etherscan

- WrappedPunk (WPUNKS), see contract address [`0xb7f7f6c52f2e2fdb1963eab30438024864c313f6`](https://etherscan.io/address/0xb7f7f6c52f2e2fdb1963eab30438024864c313f6#code)




## Overview

The [WrappedPunk](dl/WrappedPunk.sol) contract script is about 1 800 lines total.


<!--
Contract commentary:

> ???
>

-->



Interfaces (Ethereum Standards and Optional Extensions) used / supported:
``` solidity
interface IERC721             // ERC-721 compliant contract
interface IERC721Enumerable   // ERC-721 Non-Fungible Token Standard, optional enumeration extension
interface IERC721Receiver     // ERC-721 token receiver interface
interface IERC721Metadata     // ERC-721 Non-Fungible Token Standard, optional metadata extension

interface IERC165             //  declare support of contract interfaces, which can then be queried by others
```


Libraries (re)used:

``` solidity
library SafeMath
library Counters
library Address
library Strings
```


The contract outline & inheritance for the WrappedPunk contract:

``` solidity
contract Context

contract ERC165 is IERC165
contract ERC721 is Context, ERC165, IERC721  //  ERC721 Non-Fungible Token Standard basic
   using SafeMath
   using Address
   using Counters

contract ERC721Enumerable is ERC721, IERC721Enumerable //  ERC-721 Non-Fungible Token with optional enumeration extension logic
contract ERC721Metadata is ERC721, IERC721Metadata
   using Strings

contract ERC721Full is ERC721Enumerable, ERC721Metadata  // Full ERC721 Token

contract Ownable is Context
contract Pausable is Context

contract UserProxy
contract WrappedPunk is Ownable, ERC721Full, Pausable
```


And [CryptoPunksMarket contract](../contracts) functions called
(via the "imported" external functions in ICryptoPunk):

``` solidity
interface ICryptoPunk {
  function punkIndexToAddress(uint256 punkIndex) returns (address);
  function punksOfferedForSale(uint256 punkIndex) returns (bool, uint256, address, uint256, address);
  function buyPunk(uint punkIndex) payable;
  function transferPunk(address to, uint punkIndex);
}
```


### WrappedPunk

#### Constants

> The metadata details about the "Wrapped Cryptopunks" WPUNKS ERC721 non-fungible token.

``` solidity
string private _name   = "Wrapped Cryptopunks";  // Token name
string private _symbol = "WPUNKS";               // Token symbol
```


#### Events

**ProxyRegistered**

``` solidity
event ProxyRegistered(address user, address proxy);
```

#### Storage

**proxies**

Mapping from user address to proxy address

``` solidity
mapping(address => address) private _proxies;
```

#### Functions

**registerProxy**

Registers proxy for user

``` solidity
function registerProxy()
```

<!--
  todo/check:
    why register proxy for user?  is it a two-step process for better security?
-->


**mint**

Mints a wrapped punk

``` solidity
function mint(
  uint256 punkIndex
)
```

**burn**

Burns a specific wrapped punk

``` solidity
function burn(
  uint256 punkIndex
)
```

(Source: [WrappedPunk.sol](WrappedPunk.sol))

