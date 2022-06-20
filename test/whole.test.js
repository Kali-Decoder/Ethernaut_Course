const Fallback = artifacts.require("Fallback");
const Fallout = artifacts.require("Fallout");
const CoinFlip = artifacts.require("CoinFlip");
const Telephone = artifacts.require("Telephone");
let fallback;
let fallout;
let coinflip;
let telephone;

contract("Testing smart contract",(accounts)=>{
    beforeEach(async ()=>{
        fallback= await Fallback.deployed();
        let ether= await web3.utils.toWei("1","ether");
        fallout= await Fallout.deployed({from:accounts[0],value:ether});
        coinflip= await CoinFlip.deployed();
        telephone= await Telephone.deployed({from:accounts[2]});

    });
    // it("Should test first smart contract ",async ()=>{
    //     let owner= await fallback.owner();
    //     assert.equal(accounts[0],owner);

    //     let ether = await web3.utils.toWei("1","ether");
        
    //     await fallback.contribute({from:accounts[2],value:ether,gas:'1000000'});
    //      await fallback.contributions(accounts[2]);
        
    //     let bal = await fallback.getContribution({from:accounts[2]});

    //     bal = await fallback.getContribution({from:owner});
    //     console.log(bal.toString());

    //     await fallback.withdraw({from:owner});

    //     let b= await web3.eth.getBalance(owner);
    //     console.log(b.toString())

    // });

    // it("Should Test Fallout contract",async()=>{
    //     let owner= await fallout.owner();
    //     let bal = await fallout.allocations(owner)
    //     await fallout.postAllocation({from:accounts[1],value:'10000'});
    //     bal = await  fallout.allocations(accounts[1]);
    //     assert.equal(bal.toNumber(),10000);

    //     let c=await fallout.getAllocateBalance({from:accounts[1]});
    //     console.log(c)
    //     await fallout.sendAllocation(accounts[1]);
    //     let b = await web3.eth.getBalance(accounts[1]);

    //     await fallout.collectAllocations({from:accounts[0]})
    //     let x = await web3.eth.getBalance(accounts[1]);
    //     console.log(await web3.utils.fromWei(x,"ether"));
        

    // })
    // it("Should test Coinflip contract ",async ()=>{
    //     let status = await coinflip.status();
    //     let consecutiveValue= await coinflip.consecutiveWins();

    //     assert.equal(status,"Start");
    //     let ether= await web3.utils.toWei("1","ether");
    //     await coinflip.choice(0,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())
    //     await coinflip.choice(1,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())

    //     await coinflip.choice(1,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())

    //     await coinflip.choice(0,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())

    //     await coinflip.choice(1,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())



    // })

    it("Should test telephone contract",async()=>{
        let owner= await telephone.owner();
        assert.equal(accounts[2],owner);

        await telephone.changingOwner(accounts[0],{from:accounts[2]});
        owner= await telephone.owner();
        console.log(owner);
    });


})
