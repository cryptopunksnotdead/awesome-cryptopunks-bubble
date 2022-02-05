# More Punks V1 Notes

---

**Note: See [Punks V1 History](PUNKS_V1_HISTORY.md) for the main page. This here are quick (scratch) notes only.**

---

Official V1 Phunk Wrapped Links:

Why Wrapped?

> V1 CryptoPhunks (buggy, Philip is every image)

- Website: https://www.v1phunks.io    - De-Philip-ify your V1 Phunk!   by  @dumbnamenumbers  (aka 
middlemarch.eth)?
- Opensea: https://opensea.io/collection/official-v1-phunks
  - https://opensea.io/collection/philipinternproject - Original V1 Phunks (OpenSea)
- Etherscan: <https://etherscan.io/address/0x235d49774139c218034c0571ba8f717773edd923#code>  Token: V1 Cryptophunks (Wrapped) (WPHV1)


> Q: How do you wrap a V1 Phunk you might ask? 
> 
> A: You simply send your V1 Phunk to 0x235d49774139c218034c0571ba8f717773edd923 with safeTransferFrom()
>  and the wrapping occurs in the onERC721Received() callback!
>
>  o
> 
> I wanted to differentiate the wrapped V1s from the V2s,
>  so I decided to change the background color
>   to the same purple that the wrapped V1 Punks have.
>
> This was actually not so easy to do for all 10 000 images! Do you like it?



Official V1 Punk Wrapper "V2" Links:

- Website:   
- Etherscan: <https://etherscan.io/address/0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d>  Token: V1 Cryptopunks (Wrapped) (WPV1)

Official V1 Punk Wrapper "Classic" Links  (by 0xfoobar  formerly seeker_curious?)

- Website:     https://classicpunks.com/    
- Etherscan  <https://etherscan.io/address/0xf4a4644e818c2843ba0aabea93af6c80b5984114>  Token:  Wrapped CryptoPunks V1 (WPUNKS1)


"Unoffical" V1 Punk Wrapper Links by ????

- Etherscan: - <https://etherscan.io/address/0xd5688b55b670be8c702a19ef8ddddc6b820c011d>  Token: Wrapped V1 Cryptopunks (WV1PUNKS)  
- Opensea - [wrapped-v1-cryptopunks](https://opensea.io/collection/wrapped-v1-cryptopunks)  



The welcome message on the (login required / invite-only) Discord chat server reads:

> Welcome to V1 Punks
>
> Launched in June 2017 by Larva Labs, cryptopunks were originally free for anyone with an ethereum wallet to claim (+ gas).  
> The punks were a huge hit at launch and all of them were claimed incredibly fast.  
> In the original cryptopunks contract, there was a code error that caused ethereum to be allocated to the buyer 
> instead of the seller when a purchase was made. 
> In other words, a buyer was immediately refunded for their purchase and was able to keep the punk.
>
> Not long after the bug was found a newer version of the punks contract (Version 2, V2) 
>  was released and punks were airdropped to this new contract.  
>  V1 punk owners are now able to wrap their punks into an ERC-721 contract 
>  (another kind of standardized contract) and patch over the bug.  
>  This recovery of the original punks contract is a community led and rapidly growing phenomenon
>  consisting of original punk claimant's, [non-fungible] token historians, 
>  digital archeologists and extremely talented developers.  
>  There is no clear leader and all important decisions are voted on by community members.
>
> V1 Punks exist just as V2s do. This cannot be changed or undone since the V1 Punks are a permanent part of the blockchain.  
> The new wrappers impart a slight change to the image in the form of a new background.
>  While this is a very modest change in the image, the core Punk remains the same. 
> 
> While the V1 punks still exist in their original form, so does the existing bug in the V1 contract 
> so NEVER put an unwrapped V1 on sale as you will most likely loose it. 
>  V1 punks are not a derivative but are in fact the "original/classic" cryptopunks. 
>  This is verified on the ethereum blockchain and is immutable.


0xfoobar Explaining the V1 CryptoPunks exploit...this one is incredibly tricky so want to share what I learned! <https://twitter.com/0xfoobar/status/1374604091263905794>

Move to punks.contracts - Why? Why not?

> TL;DR - when a buyer purchased a punk, the ETH deposited in the contract could be withdrawn only by the *buyer*, not by the seller. So buy(), withdraw(), repeat.
>  
>  You can see an example of these transactions here: 
> buy() - https://etherscan.io/tx/0xb55c39c17564184190f61f7c070646ed0115174dcee492a6493ed0128ad54c7b
>
> withdraw() - https://etherscan.io/tx/0x6bf4eda0c1e8d350aa1daaf60393bf687d8656c9430ac289ab1429ff7c8f8e83
> 
> So how is this possible? This line says that the money goes to `offer.seller`, so everything seems in order.
>
>     function buyPunk(uint punkIndex) payable {
>        Offer offer = punksOfferedForSale[punkIndex];
>        if (!offer.isForSale) throw;                // punk not actually for sale
>        if (offer.onlySellTo != 0x0 && offer.onlySellTo != msg.sender) throw;  // punk not supposed to be sold to this user
>        if (msg.value < offer.minValue) throw;      // Didn't send enough ETH
>        if (offer.seller != punkIndexToAddress[punkIndex]) throw; // Seller no longer owner of punk
>
>        punkIndexToAddress[punkIndex] = msg.sender;
>        balanceOf[offer.seller]--;
>        balanceOf[msg.sender]++;
>        Transfer(offer.seller, msg.sender, 1);
>
>        punkNoLongerForSale(punkIndex);
>        pendingWithdrawals[offer.seller] += msg.value;              // <===
>        PunkBought(punkIndex, msg.value, offer.seller, msg.sender);
>     }
>
> Let's look at the `punkNoLongerForSale()` function, one line earlier.
>
>       function punkNoLongerForSale(uint punkIndex) {
>          if (punkIndexToAddress[punkIndex] != msg.sender) throw;
>          punksOfferedForSale[punkIndex] = Offer(false, punkIndex, msg.sender, 0, 0x0);   // <===
>          PunkNoLongerForSale(punkIndex);
>       }
>
> Note that this overwrites the current offer. 
> The new `offer.seller` is now set to `msg.sender` (the current buyer).
>
> Solidity is pass-by-reference, so our `offer` variable in the first line refers to the same struct modified in `punkNoLongerForSale()`.
>
> One line too early, `offer.seller` is overwritten, and the purchase price goes to `msg.sender`. 
>
> buy(), withdraw(), repeat. Seller beware!
> 
> This is the one-line fix in V2 of the CryptoPunks contract. 
>
>     function buyPunk(uint punkIndex) payable {
>        Offer offer = punksOfferedForSale[punkIndex];
>           //...
>        address seller = offer.seller;    // <===
>           //...
>        punkNoLongerForSale(punkIndex);
>        pendingWithdrawals[seller] += msg.value;            // <=== 
>        PunkBought(punkIndex, msg.value, seller, msg.sender);
>     }
>
> 
> Here we freeze the seller value before modifying the offer struct, and everything works like a charm!
> 
> 
> 

