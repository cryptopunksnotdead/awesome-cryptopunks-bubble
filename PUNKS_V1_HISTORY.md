# (Crypto) Punks, V1 - The Historic First Edition (Anno 2017 - June 9th)


The CryptoPunks launched June, 9th 2017
to little fanfare and were completely free for anyone to claim via an Ethereum contract. Over a week went by before the full 10 000 were claimed by over a hundred keen crypto-goers. Soon after, a small but critical issue was identified within the smart contract once listings began to appear. The method offerpunkforsale was not correctly coded and users were able to 'purchase' a punk, exchanging their ETH
for the listed punk, then execute the withdraw command
and receive the ETH that was paid to the contract. That ETH should not have been accessible to the buyer but only to the seller (as it is today with the v2 contract).


The issue with the contract was caused by one line of code:

![](i/cryptopunks-contract-v1-bug.png)


The well-known early punk claimer [Hemba](https://twitter.com/soldthebottom),
in the course of a legitimate purchase, discovered this exploit and used it to heist a couple dozen punks listed for sale. Hemba has since returned more than v1 30 punks heisted in that exploit including the extremely rare (and historic) v1 punk #6487.
Abound with glee and excitement, the Discord channel soon realised that these several 1, 10 and 100 ETH sales (ETH was ~$300 at the time) on the first day of trading were not legitimate but the cause of major concern.

Owners were then warned not to interact with their punks until the developers worked out a solution to this issue.
Larva Labs alerted the public to the bug via this update:

![](i/cryptopunks-update-v1-bug.png)

![](i/cryptopunks-update-v1-bug-ii.png)

![](i/cryptopunks-update-v1-bug-iii.png)


In the days following, Larva Labs issued a new contract with the bug removed and added bid functions.
On June 23rd 2017, they 're-minted' all of the punks and airdropped them back to their rightful owners. Note that all 10 000 punks and their IDs are identical between both versions of the contract. v1 and v2 Punks are identical in their aesthetic, though non-fungible and unique in their tokening.


## 2017-2020 - The Dark Ages for Punks

There isn't much to say regarding this time period for cryptopunks save for a few sweeps and pumps from the minority of people who were aware of them. [Non-fungible] tokens and crypto went through a deep, cold and long bear market. Buyers, bidders, sellers and attention was scarce.
It really wasn't until September of 2020 where one could see a marked spike in social interest and sales.


For reference, here's an All-Time CryptoPunks sales volume, data, graphs, & charts:


![](i/cryptopunks-sales-summary.png)


Source: [cryptoslam.io/cryptopunks/sales/summary](https://www.cryptoslam.io/cryptopunks/sales/summary)


## Resurgence of v1 Punks

With the recent meteoric rise and attention on historical [non-fungible] tokens, v1 punks has piqued the interest of
'[non-fungible] token archaeologists',
collectors and speculators. Although there has always been a small minority who have known of v1 Punks' existence, only recently have they come to the fore.

To be clear, v1 punks are the original and first contract created by Larvalabs and preceded their famous cryptopunks [non-fungible] tokens. They are identical to their v2 brothers and thanks to a new wrapper they can be wrapped as ERC-721s and safely traded on popular  marketplaces. They are not derivatives, nor copies nor fakes.
The v1 punks contract immutably exists on the blockchain and their provenance is without dispute.


For a long time v1's went under the radar, only traded sporadically in private transactions. In early 2017 [@0xfoobar](https://twitter.com/0xfoobar) created a 'wrapper contract', a way to wrap the tokens into ERC-721 compliant tokens and patch over the contract bug. The wrapper imparted a slight change to the image (adding a reddish-orange ribbon in the top left) but leaving the core image intact.

More recently an improved wrapper was developed
by [@FrankPoncelet](https://twitter.com/FrankPoncelet)
and [@simo_eth](https://twitter.com/simo_eth) to match a dedicated marketplace for v1 punks - [v1punks.io](https://www.v1punks.io/).

![](i/cryptopunks-marketplace-v1.png)


With the development of this marketplace and wrapper, the stage is set for v1 punks to make their comeback.


v1 punkers love art and community. They are positive and welcoming. v1's are a polarising topic with some wishing they never existed and others loving that they do. Their history and place in the cryptopunks story cannot be disputed or erased however, and that is significant. The blockchain cannot be reversed.


Per @nftstrategies in this Twitter thread, "What we are buying is attention, in the form of a story. The buyers (of) #v1Punks aren't challenging the power of Larva Labs, we raided their dumpster and found precious treasure. This real, indelible token has one of the best stories of all [non-fungible] tokens and true historic provenance."


## New Wrapper & Marketplace

The new wrapper contract, which offers improvements upon previous iterations, will be supported
by a dedicated fee-less marketplace - [v1punks.io](https://www.v1punks.io/) -
allowing users the opportunity to safely trade and interact with their v1 punks.


How does this wrapper contract work, you wonder? Well, to wrap, you have to safely nestle your ERC-20 v1 punk into the wrapper contract. It spits out a lovely ERC-721 with complete metadata and is then tradable without vulnerability via popular marketplaces. The wrapper colours the background of your punk by default in a soft purple hue and the marketplace will display different colors depending on the current status of the punk, just like Larva Labs' v2 cryptopunks.


Note: Cryptopunks don't actually have a background color
as the art is transparent, so by adding one via the wrapper we aren't modifying the original art, merely differentiating v1's from their v2 brothers to avoid confusion.
Of course, users can unwrap their v1 punk at any time and receive the original, untainted art.


The new marketplace will be the primary hub for safely trading v1's with features added progressively as the project grows in exposure. In addition, users can list, buy, bid and sell for wrapped v1's on popular marketplaces such as OpenSea, LooksRare and Rarible. The new marketplace will also act as insurance policy for v1 punks to survive and thrive, avoiding any sort of third-party censorship on marketplaces, as has been seen in the past with Larva Labs & OpenSea.


New Wrapper Marketplace Links:

- OpenSea @ [official-v1-punks](https://opensea.io/collection/official-v1-punks)
- LooksRare @ [0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D](https://looksrare.org/collections/0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D)
- Rarible @ [official-v1-punks](https://rarible.com/official-v1-punks/items)

Old Wrapper Marketplace Links (Note: We highly encourage users to gradually move all v1 Punks onto the newer wrapper):

- OpenSea @ []()
- Rarible @ [0xf4a4644e818c2843ba0aabea93af6c80b5984114](https://rarible.com/collection/0xf4a4644e818c2843ba0aabea93af6c80b5984114/items)
- LooksRare @ [0xF4a4644E818c2843Ba0AAbEa93af6c80B5984114](https://looksrare.org/collections/0xF4a4644E818c2843Ba0AAbEa93af6c80B5984114)



## Wrapping

One of the most important things that someone who may be interested in buying a v1 punk needs to know is this:

While the v1 punks still exist in their original form, so does the existing bug in the v1 contract! Using the existing wrapper, or the new wrapper and marketplace, gets your punk removed from the old contract, and, as such, the original bug does not exist. Unwrapped v1 punks that are put up for sale are vulnerable to the old bug and the v1 punk could be stolen! Also of note, the transfer functions within the existing v1 contract still function normally, the only bug seems to be selling and buying the punk without it being wrapped.


### How To Wrap Unwrapped v1 Punks

Step 1:

First we go to the original, bugged v1 Punks contract:
<https://etherscan.io/address/0x6Ba6f2207e343923BA692e5Cae646Fb0F566DB8D#writeContract>

You will see a button "Connect to Web3" with a red dot.
Connect with MetaMask or WalletConnect.
Next, we make a PRIVATE sale to the wrapper contract address:

![](i/cryptopunks-wrap-v1.png)


The top field is the Punk you want to wrap. For this example, the Punk ID is: 4684

The middle field is a price: put that to 0

The last field is the WRAPPER contract address: 0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D

And then hit that blue "Write" button to complete.

IMPORTANT: WAIT FOR THE TRANSACTION TO SUCCEED BEFORE STEP 2


Step 2:

Now we go to the new wrapper contract: <https://etherscan.io/address/0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d#writeContract>

Connect your MetaMask or WalletConnect again.
Now go to the wrap method:

![](i/cryptopunks-wrap-v1-ii.png)


The top field is the ETH to send. As we put 0 in the private sale, we put 0 here too. (Tip: Make sure to input 0, and not 0.0)

The bottom field is for your punk ID again and hit that blue "Write" button to complete.

Voila! Your v1 punk is officially wrapped and good to go.


### How to Unwrap from the Old Wrapper

We go to the @0xfoobar wrapper contract:
<https://etherscan.io/address/0xF4a4644E818c2843Ba0AAbEa93af6c80B5984114#writeContract>

Connect your MetaMask or WalletConnect with the "Connect to Web3" button with a red dot.

Now go to the unwrap method:


![](i/cryptopunks-unwrap-v1-ii.png)


Fill in your punk ID number and hit that blue "Write" button to complete.

IMPORTANT: WAIT FOR THE TRANSACTION TO COMPLETE BEFORE YOU WRAP
YOUR NOW-UNWRAPPED PUNK











## V1 Punks in the News





## Sources

V1 and V2 (Crypto) Punks Wiki <https://v1punks.gitbook.io>

