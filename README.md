
![](i/punks-banner.png)


# Awesome CryptoPunks  - Modern 24x24 Pixel Crypto Art on the Blockchain


10 000 unique collectible characters with proof of ownership stored on the ethereum blockchain.




Q: What is a CryptoPunk?

The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership & for-sale status.


Q: How were the punk images created?

With a generator that was programmed to generate punks with a range of features and rarity. For example, there are only 88 Zombie Punks, 24 Apes, 9 Aliens and exactly 1 Alien Punk smoking a pipe.


Q: Is the 24x24 Pixel Art Image stored on the blockchain?

The actual images of the punks are too large to store on the blockchain, so we took a hash of the composite image of all the punks and embeded it into the contract. You can verify that the punks being managed by the ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image
([`punks.png`](i/punks.png) - 2400x2400 - ~830kb) and comparing it to the hash stored in the contract.


![](i/punks-zoom.png)

You can generate this hash for the punks image file via a command line tool e.g.

```
$ openssl sha -sha256 punks.png
```

You can use this hash to verify the image file containing all the punks:

``` solidity
ac39af4793119ee46bbff351d8cb6b5f23da60222126add4268e261199a2921b
```



Q: What about the CryptoPunks Contract?

See [Inside the CryptoPunksMarket Blockchain Contract / Service »](contracts)







Q: What is a Wrapped CryptoPunk?

437 punks are "wrapped" as non-fungible tokens (ERC-721) for sale on  markets, see [Wrapped Punks](https://wrappedpunks.com/) for more.




History


CryptoPunk is one of the first "Non-Fungible Token" and was an inspiration for the Ethereum ERC-721 non-fungible token standard
that today powers most crypto art and collectibles on the blockchain.

How much did the punks cost when first released?  You could claim a punk (for "free")
that is, by simply paying the transaction fee of around 11 cents.
Now, you have to buy a punk from someone else and need to pay the market rate.




Sales Stats

- Number of Sales (Last 12 Months): 4 641
- Average Sale Price (Last 12 Months): 5.60 ETH (~$9 621)
- Total Value of All Sales (Lifetime): 25 990 ETH (~$45million)
