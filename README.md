Looking for Cats?  See the [**Awesome CryptoKitties Bubble (Anno 2017) »**](https://github.com/cryptocopycats/awesome-cryptokitties-bubble)

---


![](i/punks-prints.png)


> Someday, owning a CryptoPunk might signify just how early of an
> adopter you were into the world of blockchain and its thriving digital
> art scene. Or, they could just be a bunch of [24×24 pixel] images.
>
> -- [June 2017](https://mashable.com/2017/06/16/cryptopunks-ethereum-art-collectibles/)
>
>
> There will be a desire and need to buy expensive [status symbols]
> in the digital realm [to "flex" how rich and stupid I am].
> What could be more desirable than a small [24×24]
> pixelated [knitted cap-wearing ape] face?
> CryptoPunk artwork [![](i/punk-8219.png) [#8219](https://www.larvalabs.com/cryptopunks/details/8219)] just sold for $176,000.
>
> -- [January 2021](https://decrypt.co/53519/an-ethereum-based-cryptopunk-artwork-just-sold-for-176000)
>
>
> Ultra-rare alien [24×24 pixel] CryptoPunk
> sells for 605 ETH, or $750,000.
> The investment thesis. "Aliens are the rarest form of CryptoPunk and
> we believe that the acquired Alien [![](i/punk-2890.png) [#2890](https://www.larvalabs.com/cryptopunks/details/2890), one of nine]
> will be prized by collectors over
> time and mature into an iconic digital art piece."
>
> -- [January 2021](https://cointelegraph.com/news/ultra-rare-alien-cryptopunk-nft-sells-for-605-eth-or-750-000)
>
> CryptoPunks are the Warhols of the digital age.
>
> -- [February 2021](https://twitter.com/beaniemaxi/status/1360788595657818114)
>
> 10 000 CryptoPunks, ≈13 500 Picasso paintings. Do the math.
>
> -- [February 2021](https://twitter.com/0x_Capital/status/1360057260324577281)
>
> CryptoPunks are truly priceless - the rookie cards of digital collectibles.
>
> -- Mark Cuban, Billionaire, [February 2021](https://twitter.com/mcuban/status/1358883725321383938)






SPOILER:  You can download all 10 000 CryptoPunks
in a 2400×2400 image (~ 830kb) for free.
See [`punks.png` »](https://github.com/larvalabs/cryptopunks/blob/master/punks.png). Yes, the originals¹!


¹: On the blockchain only
the punk index (e.g. 2890, 8219, and so on)
as an integer number gets stored - and
one time only the "Don't Trust, Verify" SHA256 hash
of the all-10 000-punks-in-one image in the [contract code »](contracts#constants).




**REMINDER: In the digitial world there are no originals! Every copy is a original and you cannot tell the difference 
(all 0s and 1s are the same). And, yes, you can always make as many (free) copies as you like (in a free world).
Claiming that you can protect your exclusive rights to pixels because the record of ownership 
is stored in a public database is absurd.
Without laws and governments that help you with your rights - the claim is just 
a meaningless series of 0s and 1s.  PS: Do you really own CryptoPunks? (Spoiler: No.)
Check your license agreement with LarvaLabs - the pixel art license seller - and do NOT get fooled by the record of ownership. 
You are a licensee and NOT an owner.**




# Awesome CryptoPunks Bubble (Anno 2021)  - Modern 24×24 Pixel Crypto Art on the Blockchain


10 000 unique collectible characters with proof of ownership stored on the ethereum blockchain.

![](i/punks-zoom.png)




Q: What is a CryptoPunk?

The CryptoPunks are 24×24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership & for-sale status.

![](i/punks-banner.png)




Q: Who's behind CryptoPunk?

[Matt Hall](https://github.com/megamattron) and
[John Watkinson](https://github.com/pents90)
from [Larva Labs](https://github.com/larvalabs) in New York City, United States



> We're coming up on two years of the CryptoPunks launch.
> We thought CryptoPunks might be just a blog post, a couple weeks of
> interest and the end of it - and it's still going strong.
>
> -- Matt Hall ([April, 2019](https://www.artnome.com/news/2019/4/08/autoglyphs-generative-art-born-on-the-blockchain))




Q: How were the punk images created?

With a generator that was programmed to generate punks with a range of features and rarity. For example, there are only 88 Zombie Punks, 24 Apes, 9 Aliens and exactly 1 Alien Punk smoking a pipe.


Q: Is the 24×24 Pixel Art Image stored on the blockchain?

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





## More


### Wrapped CryptoPunks (WPUNKS)

437 punks are "wrapped" as "standardized" non-fungible tokens (ERC-721) for sale on  markets, see [Wrapped Punks](https://wrappedpunks.com/) for more.


Markets include:
- [Wrapped CryptoPunks @ OpenSea](https://opensea.io/collection/wrapped-cryptopunks)


What about the Wrapped CryptoPunks (WPUNKS) contract?

See [Inside the Wrapped CryptoPunks (WPUNKS) Blockchain Contract / Service »](wrapped)


### CryptoPunk, the Shell Version

The cryptopunk command line tool lets you
mint your own 24×24 pixel punk images off chain
from the True Official Genuine CryptoPunks™ sha256-verified original 10 000 unique character collection
(in your shell terminal); incl. 2x/4x/8x zoom for bigger sizes

To use the `punk` (or `cryptopunk`) command line tool. Try:

```
$ punk -h
```

resulting in:

```
Usage: cryptopunk [options] IDs
  Mint punk characters from composite (./punks.png) - for IDs use 0 to 9999

  Options:
    -z, --zoom=ZOOM   Zoom factor x2, x4, x8, etc. (default: 1)
    -d, --dir=DIR     Output directory (default: .)
    -f, --file=FILE   True Official Genuine CryptoPunks™ image (default: ./punks.png)
    -h, --help        Prints this help
```

Let's mint punk #2890 and #8219:

```
$ punk 2890 8219
```

printing:

```
==> reading >./punks.png<...
     >ac39af4793119ee46bbff351d8cb6b5f23da60222126add4268e261199a2921b< SHA256 hash matching
         ✓ True Official Genuine CryptoPunks™ verified
==> (1/2) minting punk #2890; writing to >./punk-2890.png<...
==> (2/2) minting punk #8219; writing to >./punk-8219.png<...
```

And voila!

![](i/punk-2890.png)
![](i/punk-8219.png)

Find out more [**Crypto Punks, the Shell Version »**](https://github.com/rubycoco/blockchain/tree/master/cryptopunks)



### CryptoPunks Picasso Style (Generated with Pix2Pix A.I.)

> Artonymous Artikfakt writes:
>
> Playing around trying to generate some CryptoPunks [Picasso Style] with A.I. (artificial intelligence)
> using Pix2Pix [- a creative machine learning algorithm that turns a crude line drawing into an oil painting].
> These are all regenerated from the training set. 
> Just did a quick test and will try to train it further over night. Lets see how it goes. 

![](i/punks-picasso.png)

(Source: [CryptoPunks Picasso Style, Artonymous Artikfakt](https://twitter.com/artonymousart/status/1124808048453783553))




### Famous CryptoPunks Look-Alikes

[famouspunks.com](https://www.famouspunks.com/) -
a website dedicated to matching CryptoPunks with their celebrity lookalikes. You can find pretty decent matches for Hulk Hogan, John Waters, and, if you're being generous, Katy Perry in her blue hair days.

![](i/famouspunks.png)




## Remakes

### CryptoPunks, Polkadot Edition ("SubstraPunks")

> In 2020, the devs created the artist - okay fine, the algo - who drew the Substrapunks, as an homage to Cryptopunks. 
>
> The team didn't expect their hackathon project to have any value. Just like cryptopunks - they gave them away to anyone who claimed one.
>  It took a while. Not many people believed, and even fewer people expected them to ever be worth anything!   
>
>  Soon, people started buying and selling them - there was no market. 
>  Someone made an online spreadsheet page to keep track of prices & trades - that was v1 of the marketplace! 
>  No one really knew the value of different traits - most were available for a few dollars, but some were already 3 figures.
>
> -- Substra Punkette, Hello World! The Story So Far, [January 2021](https://twitter.com/SubstraPunk/status/1350480927093358593)



CryptoPunks, Polkadot Edition ("SubstraPunks") 
is a remake
on the Polkadot blockchain - contracts built with the Substra(te) machinery - 
by Alexander Mitrovich & [Greg Zaitsev](https://github.com/gregzaitsev), [Usetech](https://github.com/usetech-llc), Moscow, Russia.


10 000 unique character images are generated from a brand new set of face parts.

![](i/punks-remake-polkadot.png)

> Punk images are auto-generated from 8 parts. 
> Some of them are optional (like a beard or cigar), some are required (like the face). 
> Some are uni-sex (like earrings or noserings), but some define the gender 
> of the generated character (like lipstick or blonde hair for girls or a beard for boys). 
> If the gender is not determined, the chance decides 
> what it is going to be at the moment when they are generated.
> The component parts are:
>
> 1. Face (2 options: black and white)
> 2. Beard, optional (7 options)
> 3. Earrings, optional (3 options)
> 4. Eyes/sunglasses (5 options)
> 5. Hair (12 options)
> 6. Mouth (6 options)
> 7. Nose ring, optional (1 option)
> 8. Cigar or a pipe, optional
>
> The total combinations possible are 89 820, but the algorithm randomly picked 10 000 of them.

![](i/punks-remake-polkadot-traits.png)


Find the open source code on github @ [`usetech-llc/substrapunks`](https://github.com/usetech-llc/substrapunks). (Note: includes the art generation algorithm / code).




---

## History


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

- [A Physical Model for Digital Art Ownership - The CryptoPunks in their First Gallery Show.](https://www.larvalabs.com/blog/2019-2-1-15-1/a-physical-model-for-digital-art-ownership-the-cryptopunks-in-their-first-gallery-show) by Larva Labs, February 2019


- [CryptoPunks Two Year Anniversary - A look at the activity and trends over the first two years of the CryptoPunks.](https://www.larvalabs.com/blog/2019-6-21-1-1/cryptopunks-two-year-anniversary) by Larva Labs, June 2019



- [An Ethereum-based CryptoPunk Artwork Just Sold for $176,000. Owning a pixelated avatar of a knitted cap-wearing ape is a status symbol, argues the user who paid thousands for it.](https://decrypt.co/53519/an-ethereum-based-cryptopunk-artwork-just-sold-for-176000) by
Liam Frost, Decrypt, January 2021


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


<!--
![](i/punk-transactions-usd.png)
-->

