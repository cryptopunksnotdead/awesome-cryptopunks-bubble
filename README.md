
![](i/punks-bids.png)


# Awesome CryptoPunks  - Modern 24x24 Pixel Crypto Art on the Blockchain


10 000 unique collectible characters with proof of ownership stored on the ethereum blockchain.





Q: What is a CryptoPunk?

The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership & for-sale status.

Q: Who's behind CryptoPunk?

Started by Lava Labs in New York
by Matt Hall and John Watkinson.




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


### Types & Attributes


Punk Types _(5)_

Type   | Count
-------|---------
Alien  | 9
Ape    | 24
Zombie | 88
Female | 3840
Male   | 6039

9+24+88+3840+6039 = 10000

>  Alien update:
> There are currently 3 open bids against aliens totaling 1 876 ETH (~$2.46M USD). -- [Jan 26, 2021](https://twitter.com/larvalabs/status/1353914494012039169)



**All Attributes**

Beanie (44)
Choker (48)
Pilot Helmet (54)
Tiara (55)
Orange Side (68)
Buck Teeth (78)
Welding Goggles (86)
Pigtails (94)
Pink With Hat (95)
Top Hat (115)
Spots (124)
Rosy Cheeks (128)
Blonde Short (129)
Wild White Hair (136)
Cowboy Hat (142)
Wild Blonde (144)
Straight Hair Blonde (144)
Big Beard (146)
Red Mohawk (147)
Half Shaved (147)
Blonde Bob (147)
Vampire Hair (147)
Clown Hair Green (148)
Straight Hair Dark (148)
Straight Hair (151)
Silver Chain (156)
Dark Hair (157)
Purple Hair (165)
Gold Chain (169)
Medical Mask (175)
Tassle Hat (178)
Fedora (186)
Police Cap (203)
Clown Nose (212)
Smile (238)
Cap Forward (254)
Hoodie (259)
Front Beard Dark (260)
Frown (261)
Purple Eye Shadow (262)
Handlebars (263)
Blue Eye Shadow (266)
Green Eye Shadow (271)
Vape (272)
Front Beard (273)
Chinstrap (282)
3D Glasses (286)
Luxurious Beard (286)
Mustache (288)
Normal Beard Black (289)
Normal Beard (292)
Eye Mask (293)
Goat (295)
Do-rag (300)
Shaved Head (300)
Muttonchops (303)
Peak Spike (303)
Pipe (317)
VR (332)
Cap (351)
Small Shades (378)
Clown Eyes Green (382)
Clown Eyes Blue (384)
Headband (406)
Crazy Hair (414)
Knitted Cap (419)
Mohawk Dark (429)
Mohawk (441)
Mohawk Thin (441)
Frumpy Hair (442)
Wild Hair (447)
Messy Hair (460)
Eye Patch (461)
Stringy Hair (463)
Bandana (481)
Classic Shades (502)
Shadow Beard (526)
Regular Shades (527)
Horned Rim Glasses (535)
Big Shades (535)
Nerd Glasses (572)
Black Lipstick (617)
Mole (644)
Purple Lipstick (655)
Hot Lipstick (696)
Cigarette (961)
Earring	(2459)


(Source: [CryptoPunks Types and Attributes](https://www.larvalabs.com/cryptopunks/attributes))





### More

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


Contract Stats

> The [CryptoPunksMarket] contract now holds 4,095 ETH (~$5.4M USD) in open bids and pending withdrawals. -- [Jan 26, 2021](https://twitter.com/larvalabs/status/1353915659453870080)

