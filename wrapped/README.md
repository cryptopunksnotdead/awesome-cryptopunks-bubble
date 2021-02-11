
_Code on the Blockchain - Electronic Contract Scripts_


# Inside the Wrapped Punk (WPUNKS) Blockchain Contract / Service


Turn classic unique punks into "standardized" non-fungible tokens

How? Non-fungible Tokens (ERC721 on Ethereum) each backed 1:1 by a CryptoPunk


Note: The Wrapped Punk (WPUNKS) contract script is open source
with some inline running commentary.
The [WrappedPunk](dl/WrappedPunk.sol) contract script is about 1 800 lines total.



## Source Code

Etherscan

- WrappedPunk (WPUNKS), see contract address [`0xb7f7f6c52f2e2fdb1963eab30438024864c313f6`](https://etherscan.io/address/0xb7f7f6c52f2e2fdb1963eab30438024864c313f6#code)




## Overview

Contract commentary:

> ???
>


The contract outline & inheritance for the wrapped punks contract looks like this:


``` solidity

contract Context
contract Ownable is Context
contract Pausable is Context
interface IERC721Enumerable   //  ERC-721 Non-Fungible Token Standard, optional enumeration extension

interface IERC721    // ERC721 compliant contract
tokenId, bytes calldata data) external;
interface IERC721Receiver  //  ERC721 token receiver interface
interface IERC165  //  declare support of contract interfaces, which can then be queried by others
contract ERC165 is IERC165

contract ERC721 is Context, ERC165, IERC721  //  ERC721 Non-Fungible Token Standard basic
   using SafeMath
   using Address
   using Counters

contract ERC721Enumerable is ERC721, IERC721Enumerable //  ERC-721 Non-Fungible Token with optional enumeration extension logic


interface IERC721Metadata   // ERC-721 Non-Fungible Token Standard, optional metadata extension

contract ERC721Metadata is ERC721, IERC721Metadata
    using Strings

contract ERC721Full is ERC721Enumerable, ERC721Metadata  // Full ERC721 Token

contract UserProxy

contract WrappedPunk is Ownable, ERC721Full, Pausable

// Extern
interface ICryptoPunk   // Interface for interacting with CryptoPunks
```


Libraries used:

``` solidity
library SafeMath
library Counters
library Address
library Strings
```




### WrappedPunk

#### Constants

> The metadata details about the "Wrapped Cryptopunks" WPUNKS ERC721 non-fungible token.

``` solidity
string private _name   = "Wrapped Cryptopunks";  // Token name
string private _symbol = "WPUNKS";               // Token symbol
```

