
![](i/punks-prints.png)


> Someday, owning a CryptoPunk might signify just how early of an
> adopter you were into the world of blockchain and its thriving digital
> art scene. Or, they could just be a bunch of [24x24 pixel] images.
>
> -- [June 2017](https://mashable.com/2017/06/16/cryptopunks-ethereum-art-collectibles/)
>
>
> Ultra-rare alien [24x24 pixel] CryptoPunk
> sells for 605 ETH, or ~$750,000.
> The investment thesis. "Aliens are the rarest form of CryptoPunk and
> we believe that the acquired Alien [#2890, one of nine]
> will be prized by collectors over
> time and mature into an iconic digital art piece."
>
> -- [January 2021](https://cointelegraph.com/news/ultra-rare-alien-cryptopunk-nft-sells-for-605-eth-or-750-000)





# Awesome CryptoPunks  - Modern 24x24 Pixel Crypto Art on the Blockchain


10 000 unique collectible characters with proof of ownership stored on the ethereum blockchain.

![](i/punks-zoom.png)




Q: What is a CryptoPunk?

The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership & for-sale status.

![](i/punks-banner.png)




Q: Who's behind CryptoPunk?

Matt Hall and John Watkinson  from Larva Labs in New York

> We're coming up on two years of the CryptoPunks launch.
> We thought CryptoPunks might be just a blog post, a couple weeks of
> interest and the end of it - and it's still going strong.
>
> -- Matt Hall ([April, 2019](https://www.artnome.com/news/2019/4/08/autoglyphs-generative-art-born-on-the-blockchain))




Q: How were the punk images created?

With a generator that was programmed to generate punks with a range of features and rarity. For example, there are only 88 Zombie Punks, 24 Apes, 9 Aliens and exactly 1 Alien Punk smoking a pipe.


Q: Is the 24x24 Pixel Art Image stored on the blockchain?

The actual images of the punks are too large to store on the blockchain, so we took a hash of the composite image of all the punks and embeded it into the contract. You can verify that the punks being managed by the ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image
([`punks.png`](i/punks.png) - 2400x2400 - ~830kb) and comparing it to the hash stored in the contract.


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

>  Alien update:
> There are currently 3 open bids against aliens totaling 1 876 ETH (~$2.46M USD). -- [Jan 26, 2021](https://twitter.com/larvalabs/status/1353914494012039169)


Punk Types _(5)_

Type   | Count
-------|---------
Alien  | 9
Ape    | 24
Zombie | 88
Female | 3840
Male   | 6039

9+24+88+3840+6039 = 10000




**All Attributes**

Beanie _(44)_
Choker _(48)_
Pilot Helmet _(54)_
Tiara _(55)_
Orange Side _(68)_
Buck Teeth _(78)_
Welding Goggles _(86)_
Pigtails _(94)_
Pink With Hat _(95)_
Top Hat _(115)_
Spots _(124)_
Rosy Cheeks _(128)_
Blonde Short _(129)_
Wild White Hair _(136)_
Cowboy Hat _(142)_
Wild Blonde _(144)_
Straight Hair Blonde _(144)_
Big Beard _(146)_
Red Mohawk _(147)_
Half Shaved _(147)_
Blonde Bob _(147)_
Vampire Hair _(147)_
Clown Hair Green _(148)_
Straight Hair Dark _(148)_
Straight Hair _(151)_
Silver Chain _(156)_
Dark Hair _(157)_
Purple Hair _(165)_
Gold Chain _(169)_
Medical Mask _(175)_
Tassle Hat _(178)_
Fedora _(186)_
Police Cap _(203)_
Clown Nose _(212)_
Smile _(238)_
Cap Forward _(254)_
Hoodie _(259)_
Front Beard Dark _(260)_
Frown _(261)_
Purple Eye Shadow _(262)_
Handlebars _(263)_
Blue Eye Shadow _(266)_
Green Eye Shadow _(271)_
Vape _(272)_
Front Beard _(273)_
Chinstrap _(282)_
3D Glasses _(286)_
Luxurious Beard _(286)_
Mustache _(288)_
Normal Beard Black _(289)_
Normal Beard _(292)_
Eye Mask _(293)_
Goat _(295)_
Do-rag _(300)_
Shaved Head _(300)_
Muttonchops _(303)_
Peak Spike _(303)_
Pipe _(317)_
VR _(332)_
Cap _(351)_
Small Shades _(378)_
Clown Eyes Green _(382)_
Clown Eyes Blue _(384)_
Headband _(406)_
Crazy Hair _(414)_
Knitted Cap _(419)_
Mohawk Dark _(429)_
Mohawk _(441)_
Mohawk Thin _(441)_
Frumpy Hair _(442)_
Wild Hair _(447)_
Messy Hair _(460)_
Eye Patch _(461)_
Stringy Hair _(463)_
Bandana _(481)_
Classic Shades _(502)_
Shadow Beard _(526)_
Regular Shades _(527)_
Horned Rim Glasses _(535)_
Big Shades _(535)_
Nerd Glasses _(572)_
Black Lipstick _(617)_
Mole _(644)_
Purple Lipstick _(655)_
Hot Lipstick _(696)_
Cigarette _(961)_
Earring	_(2459)_


(Source: [CryptoPunks Types and Attributes](https://www.larvalabs.com/cryptopunks/attributes))





### More

Q: What is a Wrapped CryptoPunk?

437 punks are "wrapped" as non-fungible tokens (ERC-721) for sale on  markets, see [Wrapped Punks](https://wrappedpunks.com/) for more.






### History


CryptoPunk is one of the first "Non-Fungible Token" and was an inspiration for the Ethereum ERC-721 non-fungible token standard
that today powers most crypto art and collectibles on the blockchain.

How much did the punks cost when first released?  You could claim a punk (for "free")
that is, by simply paying the transaction fee of around 11 cents.
Now, you have to buy a punk from someone else and need to pay the market rate.

> With the CryptoPunks, where we gave away 9,000 of them, a large
>  number of them went to a few early people that just got on it and
> automated that process. -- Matt Hall ([April 2019](https://www.artnome.com/news/2019/4/08/autoglyphs-generative-art-born-on-the-blockchain))





**Genesis Story**

> CryptoPunks started with a pixel-art character generator Watkinson
> began playing with in December 2016. It randomly mixed a selection of characteristics (sunglasses, skin colors, hair types, and so on) to come up with 10,000 24-by-24-pixel "punks" - a characterization that nods to the early '90s cypherpunks, cofounded by the late Timothy May. None look exactly alike, and certain types of punks turned out to be rarer than others.
>
> [..]
>
> "We muddled our way through figuring out how an ERC-20
> token would look if it were not fungible," said Hall. After many attempts, they settled on putting the hash of each CryptoPunk's image file into its respective smart contract, including some "marketplace functions" that would allow people to buy and sell the Punks. They posted their project to the Ethereum subreddit and Hacker News and waited for people to notice. Very few did. About 100 claimed a Punk, which Hall and Watkinson offered for free.
>
> Then, in June 2017, the pair got in touch with Mashable and told them about CryptoPunks. "This Ethereum-based project could change how we think about digital art," read the headline above an image of a blond, glasses-wearing Punk with the caption, "Someone owns this picture."
>
> "Things went crazy," said Hall. "We went from having something like 8,600 CryptoPunks available to within 20 hours, they were all claimed." The pair had already reserved 1,000 for themselves "just in case it becomes a thing."
>
> Watkinson got in on the action. The day the Punks exploded, he sold one of his for a dollar. Someone bought it, so he sold another for $10. That sold, too, so he went up to $50, then $100. That same day, someone offered an alien Punk for 10 ether, which at the time was $3,000. "Boom, someone bought that," said Watkinson. "I was just like, whoaaa. The day before that, we were like, will anyone care?"
>
> (Source: [How CryptoPunks' Creators Charmed the Art World and Paved the Way for Blockchain Art](https://breakermag.com/how-cryptopunks-creators-charmed-the-art-world-and-paved-the-way-for-blockchain-art/) by Jessica Klein, Breaker Mag, January 2019)



## Articles

- [This ethereum-based project could change how we think about digital art - Someone owns this picture.](https://mashable.com/2017/06/16/cryptopunks-ethereum-art-collectibles/) by Jason Abbruzzese, Mashable, June 2017


- [Ultra-rare alien CryptoPunk sells for 605 ETH, or $750,000. Is the market getting overheated?](https://cointelegraph.com/news/ultra-rare-alien-cryptopunk-nft-sells-for-605-eth-or-750-000) by
Andrew Thurman, Coin Telegraph, January 2021





## Stats

![](i/punks-sales.png)

Sales Stats

- Number of Sales (Last 12 Months): 4 641
- Average Sale Price (Last 12 Months): 5.60 ETH (~$9 621)
- Total Value of All Sales (Lifetime): 25 990 ETH (~$45million)



Contract Stats

> The [CryptoPunksMarket] contract now holds 4,095 ETH (~$5.4M USD) in open bids and pending withdrawals. -- [Jan 26, 2021](https://twitter.com/larvalabs/status/1353915659453870080)




